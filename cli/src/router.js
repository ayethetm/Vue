import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Testing from '@/views/Testing.vue'
import Exercise from '@/views/Exercise.vue'
import Detail from '@/views/Detail.vue'

const router = new VueRouter({
  routes: [
// { 
//     path: '/',
//     component: Home
//  },
 { 
    path: '/testing',
    component: Testing
 },
 { 
    path: '/exercise',
    component: Exercise
 },
  { 
    path: '/detail/:id',
    name: 'detail',
    component: Detail
 }
  ],
  mode: 'history' //history=>show route in url
});

export default router