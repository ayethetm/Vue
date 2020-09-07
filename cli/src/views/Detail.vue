<template>
	 
	<!-- <div>
		<h1>{{item.item_name}}</h1>
	</div> -->

	<div class='card mt-5'>
              <div class='row'>
              <div class='col-md-6 pl-5'>
              <img src='../assets/img1.jpg' class='img-fluid d-block w-75'>
              </div>
              <div class='col-md-6'>
              <div class='card-body text-left'>
                <h3 class='card-text font-weight-bold'>{{item.item_name}}</h3>
                <i class='fa fa-star'></i>
                <i class='fa fa-star'></i>
                <i class='fa fa-star'></i>
                <i class='fa fa-star'></i>
                <i class='fa fa-star-half'></i><br><br>
                <h5 class='card-text font-weight-bold'>7500 MMK</h5>
                <br><p>Available Colors</p>
                <button class='btn btn-outline-secondary btn-sm'>Pink</button>
                <button class='btn btn-outline-secondary btn-sm'>Yellow</button>
                <button class='btn btn-outline-secondary btn-sm'>White</button>
                <br><br>
                <p>Quantity 
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                </p>
                <a class='btn btn-outline-success add_to_cart' href='#'
                role='button'>
                Add to Cart</a></div>
              </div>
              </div>
    </div>
	
	</template>
<script type="text/javascript">

	import ItemService from '@/services/ItemService.js'

	export default{
		data(){
			return{
				item:Object,
				
			}
		},
		mounted()
		{
			this.getDetail();
		},
		methods:{
			getDetail(){
				let id = this.$route.params.id;
				ItemService.getItem(id).then(res=>{
					this.item = res.data.item
				})
				.catch(err=>{
					console.log('There was an error:',err.response)
				})
			}
		}
	}
</script>
<style type="text/css"></style>