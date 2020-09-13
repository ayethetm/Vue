import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart: [],
    token:null,
    authStatus:'',
  },
  mutations: {
    addToCart (state, payload) {
      let item = state.cart.find(item => item.id == payload.id);
      if (item) {
        item.qty += Number(payload.qty);
      } else {
        state.cart.push(payload);
      }
    }, 
    removeFromCart (state, payload) {
      let indexToDelete = state.cart.find(item => item.id == payload)
      state.cart.splice(indexToDelete, 1)
    },
    plusCart (state, payload) {
      let indexToDelete = state.cart.find(item => item.id == payload)
      ++indexToDelete.qty
    },
    minusCart (state, payload) {
      let indexToDelete = state.cart.find(item => item.id == payload)
      if (indexToDelete.qty == 1) {
        state.cart.splice(indexToDelete, 1)
      }else{
        --indexToDelete.qty
      }
    },
    saveCart(state) {
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    getData(state){
      if(localStorage.getItem('cart')){
        state.cart = JSON.parse(localStorage.getItem('cart'));
      }else{
        state.cart = [];
      }
    },
    auth_success(state,token){
      state.authStatus = 'success'
      localStorage.setItem('token',token)
      state.token = token
    },
    auth_fail(state){
      state.authStatus = 'fail'
    },
    logout(state){
      localStorage.removeItem('token')
      state.token = null
    }
  },
  actions:{
     addToCart({ commit }, payload) {
      commit('addToCart', payload)
      commit('saveCart')
    },
    removeFromCart({ commit }, payload) {
      commit('removeFromCart', payload)
      commit('saveCart')
    },
    plusCart({ commit }, payload) {
      commit('plusCart', payload)
      commit('saveCart')
    },
    minusCart({ commit }, payload) {
      commit('minusCart', payload)
      commit('saveCart')
    },
    getData({ commit }){
      commit('getData')
    },
    loginSuccess({commit},token){
      commit('auth_success',token)
    },
    loginFail({commit}){
      commit('auth_fail')
    },
    logout({commit}){
      commit('logout')
    }
  },
  getters : {
    isLoggedIn(state){
      return state.token
    },
    authStatus(state){
      return state.authStatus
    } 
  }
})
export default store