<!-- main component -->

<template>
  <div id="app">
   <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>

import navbar from './components/navbar.vue'
export default {
  components:{
    navbar
  },
  name: 'App',
  mounted(){
    this.$router.push('/items')
  },
  data(){
    return{

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}


/*css */

.navbar-brand
{
  font-family: Lucida Console, Courier, monospace;
  font-size: 2.2rem;  
  font-color: #daa52c;
}
.navbar ul li
{
  font-size: 1.2rem;
  font-family: courier;
}
.navbar ul li:hover
{
  font-size: 1.3rem;
  font-weight: bold;
}
</style>
