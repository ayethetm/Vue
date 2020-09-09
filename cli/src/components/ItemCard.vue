<template>
	  <div class="card">
    <img :src="item.item_photo" class="card-img-top">
    <div class="card-body">
      <h4 class="card-title">{{item.item_name}}</h4>
      <p class="card-text">{{ item.item_desc }} Some quick example text to build on the card title.</p>
      <router-link :to="{name: 'item-show', params: { id: item.item_id }}" class="btn btn-primary mr-2">Detail</router-link>
      <button @click="addToCart()" class="btn btn-info">Add to Cart</button>
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