<template>
  <nav class="navbar navbar-expand navbar-light bg-light shadow">
    <div class="container">
     <router-link class="navbar-brand" to="/">
      <img src="@/assets/p.jpg" width="100px" height="50px" alt="" loading="lazy">
     </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item pr-3">
            <router-link :to="{name:'item-list'}" class="nav-link mr-2">Items</router-link>
          </li>
       <!--    <li class="nav-item active">
            <router-link :to="{name:'item-create'}" class="nav-link mr-2">Item Create</router-link>
          </li> -->
          

           <li class="nav-item">
            <router-link :to="{name:'cart'}" class="nav-link mr-2">Cart
              <span v-if="cartCount > 0" class="badge badge-pill badge-danger">
                {{ cartCount }}
              </span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'order'}" class="nav-link mr-2">Orders
              <span v-if="orderCount > 0" class="badge badge-pill badge-danger">
                {{ orderCount }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script type="text/javascript">
  export default{
    computed: {
      cartCount() {
        this.$store.dispatch('getData')
        return this.$store.state.cart.length
      }
     
    }
  }
</script>
<style type="text/css">
  
</style>