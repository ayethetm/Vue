import Vue from 'vue'

import VueRouter from 'vue-router'

//Vue Router
Vue.use(VueRouter)

import ItemCreate from '@/views/ItemCreate.vue'
import ItemList from '@/views/ItemList.vue'
import ItemShow from '@/views/ItemShow.vue'
import ShoppingCart from '@/views/ShoppingCart.vue'
import Order from '@/views/Order.vue'

const router = new VueRouter({
  routes: [
// { 
//     path: '/',
//     component: Home
//  },
 { 
    path: '/items',
    name:'item-list',
    component: ItemList
 },
 { 
    path: '/item/create',
    name:'item-create',
    component: ItemCreate
 },
  { 
    path: '/item/:id',
    name: 'item-show',
    component: ItemShow
 },
 { 
    path: '/cart',
    name: 'cart',
    component: ShoppingCart
 },
 { 
    path: '/order',
    name: 'order',
    component: Order
 }
  ],
  mode: 'history' //history=>show route in url
});

export default router