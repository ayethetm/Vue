<template>
	<div class="container">

	<img src="@/assets/banner4.jpg" class="img-fluid">

			<div class="row mt-5">
				<div class="col-md-3" v-for="(item,index) in items" :key="index">
					<ItemCard :item="item"></ItemCard>
				</div>
			</div>

	</div>
</template>
<script type="text/javascript">
import ItemCard from '@/components/ItemCard.vue'
import ItemService from '@/services/ItemService.js'

	export default{
		components:{
			ItemCard
		},
		data()
		{
			//include items array 
			// return{
			// 	items:[
			// 	{id:1,text:'Learn Javascript'},
			// 	{id:2, text: 'Learn Vue'},
			// 	{ id:3, text: 'Build something awesome'
			// 	
		// }
			return{
				items: []
			}
			},
			created(){
				
					ItemService.getItems().then(res=> {
						this.items= res.data.items
					}).catch(err=> {
						console.log('There is an error:',err.response)
					})
				}
			}
		

</script>

<style type="text/css">
	
</style>