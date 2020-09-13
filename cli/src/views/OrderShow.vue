<template>
  <div class="container my-5 shadow">
    <div class="row my-3">
      <div class="col-md-12">
        <h2 class="text-gray-dark font-weight-bold my-3">Order Detail </h2>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-12" v-if="order">
        
        <div class="row">
          <div class="col-md-6">
            <p class="text-left ml-1" ><strong><b-icon icon="receipt" font-scale="1.5"></b-icon> </strong> {{ order.order_voucherno }} (Voucher Number) </p>
            <p class="text-left ml-1" v-if="order.order_user"><strong>
              <b-icon icon="person-square" font-scale="1.5"></b-icon> 
             </strong> {{ order.order_user.user_name }}</p>
          </div>
          <div class="col-md-6">
            <p class="text-right"><strong><b-icon icon="calendar-date-fill" font-scale="1.5"></b-icon></strong> {{ order.created_at }}</p>
          </div>
        </div>

        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th>No</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in items" :key="index">
              <td>{{++index}}</td>
              <td>{{item.item_name}}</td>
              <td>{{formattingNumber(item.item_price)}} MMK</td>
              <td>{{item.qty}}</td>
              <td>{{formattingNumber(item.qty*item.item_price)}} MMK</td>
            </tr>
            <tr>
              <td colspan="4">Total</td>
              <td>{{formattingNumber(total)}} MMK</td>
            </tr>
          </tbody>
        </table>
        <router-link :to="{name:'item-list'}">
                  <button class="mb-3 btn btn-info ">
                  Back to items
                  </button>
                </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import ItemService from '@/services/ItemService.js'
  export default{
    data(){
      return{
        order : {},
        items : []
      }
    },
    created(){
      let id = this.$route.params.id;
      ItemService.getOrder(id)
        .then(response => {
          this.order = response.data.order
          this.items = response.data.order.order_items
        })
        .catch(error => {
          console.log('There was an error:',error.response)
        })
    },
    methods: {
      formattingNumber(number) {
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }
    },
    computed: {
      total(){
        return this.items.reduce((total, item) => total + (item.item_price * item.qty), 0);
      }
    }
  }
</script>

<style type="text/css">
  
</style>