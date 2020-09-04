import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Testing from '@/components/Testing.vue'
import Exercise from '@/components/Exercise.vue'

const router = new VueRouter({
  routes: [
{ 
    path: '/testing',
    component: Testing
 },
 { 
    path: '/exercise',
    component: Exercise
 }
  ],
  mode: 'history' //history=>show route in url
});

export default router