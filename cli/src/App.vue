<!-- main component -->

<template>
  <div id="app">
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="./assets/logo.png" width="30" height="30" alt="" loading="lazy">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/testing">Testing <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/exercise" class="nav-link" >Exercise</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->
   

   <!-- new navbar -->

   <nav class="navbar navbar-expand-md navbar-light py-3 shadow">
    <div class="container">
    <a class="navbar-brand" href="#">
          <img src="./assets/p.jpg" width="120px" height="50px" alt="" loading="lazy">
        </a>
    <button class="navbar-toggler" data-toggle="collapse" 
    data-target="#myNav">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse" id="myNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item pr-3">
             <router-link class="nav-link" to="/testing">Testing <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item pr-3">
            <router-link to="/exercise" class="nav-link" >Exercise</router-link>
           
          </li>
          <li class="nav-item pr-3">
            <router-link to="/exercise" class="nav-link" >Contact</router-link>
            
          </li>
        </ul>
      </div>
    </div>
</nav>

  <img src="./assets/banner4.jpg" class="img-fluid" style="width:100%;height: 400px;">
   <div class="container">
      <div class="row">
        <div class="col-md-12">
          <router-view></router-view>
        </div>
      </div>
  </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted(){
    this.$router.replace('/testing')
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
