import Vue from 'vue'

import VueRouter from 'vue-router'
import store from './store'

import ItemCreate from './views/ItemCreate.vue'
import ItemList from './views/ItemList.vue'
import ItemShow from './views/ItemShow.vue'
import ShoppingCart from './views/ShoppingCart.vue'

import Order from './views/Order.vue'
import OrderShow from './views/OrderShow.vue'

import Register from './views/Register.vue'
import Login from './views/Login.vue'

// Vue Router
Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/items',
      name: 'item-list',
      component: ItemList
    },
    {
      path: '/item/create',
      name: 'item-create',
      component: ItemCreate
    },
    {
      path: '/items/:id',
      name: 'item-show',
      component: ItemShow
    },
    {
      path: '/cart',
      name: 'cart',
      component: ShoppingCart
    },
    {
      path: '/orders',
      name: 'order-list',
      component: Order,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/orders/:id',
      name: 'order-show',
      component: OrderShow,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ],
  mode: 'history' // abstract
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  }else{
    next()
  }
})

export default router