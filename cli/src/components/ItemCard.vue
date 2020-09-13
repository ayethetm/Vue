<template>
	  <div class="card my-3 shadow">
    <img :src="item.item_photo" class="card-img-top">
    <div class="card-body">
      <h4 class="card-title">{{item.item_name}}</h4>
     <!--  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.</p> -->
      <router-link :to="{name: 'item-show', params: { id: item.item_id }}" >
      	<b-button variant="outline-info" class="mb-2 mr-3">
               <b-icon icon="eye-fill"> 
                </b-icon>
              </b-button>
      	</router-link>

      <b-button @click="addToCart()" variant="outline-warning" class="mb-2">
      	<b-icon icon="cart-plus"> 
                </b-icon></b-button>
    </div>
  </div>
</template>
<script type="text/javascript">
	export default{
		props:{
			item: Object
		},
		methods:{
			addToCart(){
				let myitem = {id:this.item.item_id,name:this.item.item_name,price:this.item.item_price,qty:1}
				this.$store.dispatch('addToCart',myitem)
			}
		}
	}
</script>
<style type="text/css">
	
</style>