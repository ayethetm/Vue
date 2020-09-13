<template>

  
  <section v-if="orderDone" >
    <div class="container mt-5 bg-white 
     rounded text-center">
     <div class="card shadow">
       <div class="col-md-12 my-3">
          <b-button variant="success" class="rounded-circle">
               <b-icon icon="check2-circle" font-scale="2"> 
                </b-icon>
              </b-button>
         <h2 class="text-success">Your order is successfully submitted!</h2>
         <br>

      <router-link :to="{name: 'item-list'}" >
        <button class="btn btn-primary mr-3">Buy More </button>
      </router-link>

      <router-link :to="{name: 'order-list'}" >
        <button class="btn btn-info">My Order List</button>
      </router-link>

       </div>
     </div>
    </div>

  </section>
    <section v-else>
       <div class="container shadow mt-5 bg-white rounded text-center">
        <div class="row">
          <div class="col-md-8 my-3">
            <h4>Your Shopping Cart</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <table class="table table-bordered ">
              <thead class="thead-light">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in cart" :key="index">
                  <td>{{++index}}</td>
                  <td>{{item.name}}</td>
                  <td>
                    <button class="btn btn-sm px-3 btn-outline-secondary mx-2" @click="plusCart(item.id)"> + </button>
                    {{item.qty}}
                    <button class="btn btn-sm px-3 btn-outline-danger mx-2" @click="minusCart(item.id)"> - </button>
                  </td>
                  
                  <td>{{formattingNumber(item.price)}} MMK</td>
                  
                  <td>{{formattingNumber(item.price*item.qty)}} MMK</td>

                  <td>
                    <button
                      @click="removeFromCart(item.id)"
                      class="btn btn-sm btn-danger mx-2 px-2">
                      x
                    </button>
                  </td>
                </tr>
               
              </tbody>
            </table>

            <div class="form-group">
              <textarea class="form-control" placeholder="Your Additional Comment Here!" 
              v-model="notes">
              </textarea>
            </div>

            <p class="my-3 text-right">
              <router-link :to="{name:'item-list'}"><button class="btn btn-warning btn-sm">
                Continue Shopping
              </button></router-link>
            </p>
          </div>
          <div class="col-md-4">
            <h4>Please choose deliver type</h4>
            <ul class="list-group">
              <li class="list-group-item">
                <span class="float-left"><strong>{{ cartItemsCount }}</strong> items</span>
                <span class="float-right">{{ formattingNumber(itemsSubtotal) }} MMK</span>
              </li>
              <li class="list-group-item">
                <span class="float-left">Delivery:</span>
                <select v-model="selectedShippingOption" class="float-right">
                  <option disabled value="">Select an option</option>
                  <option
                    v-for="option in shippingOptionsArray"
                    :key="option.text"
                    :value="option.rate">
                    {{ option.text }} ({{ option.rate }} MMK )
                  </option>
                </select>
              </li>
              <li class="list-group-item">
                <span class="float-left">Subtotal</span>
                <span class="float-right">{{formattingNumber(subtotal)}} MMK</span>
              </li>
              <li class="list-group-item">
                <span class="float-left">Tax ({{ salesTax * 100 }}%)</span>
                <span class="float-right">{{ formattingNumber(salesTaxApplied ) }} MMK</span>
              </li>
              <li class="list-group-item">
                <span class="float-left">Total</span>
                <span class="float-right">{{ formattingNumber(total) }} MMK</span>
              </li>
            </ul>

            <button
                enabled="this.selectedShippingOption"
              class="btn btn-lg btn-success my-2" @click="order()">
                Check out
            </button>
          </div>
        </div>
      </div>
    </section>


</template>

<script type="text/javascript">
  import ItemService from '@/services/ItemService.js'
  
  export default{
    services:{
      ItemService
    },

    data(){
      return{
      
    
        totalAmount:0,
        notes: '',
        orderDone: 0,
        selectedShippingOption: '',
        shippingOptionsArray: [
          {
            text: 'In 1 day',
            rate: 2000,
          },
          {
            text: 'In 3 days',
            rate: 1500,
          },
          {
            text: '3 to 5 days',
            rate: 1000,
          },
          
        ],
        salesTax: 0.03,
      }
    },
      computed:{
      cart(){
        
        return this.$store.state.cart;
      },
      cartItemsCount() {
        return this.cart.length;
      },
      itemsSubtotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.qty), 0);
      },
      subtotal() {
        if (this.selectedShippingOption) {
          return Number(this.itemsSubtotal) + Number(this.selectedShippingOption);
        }
        return '---';
      },
      salesTaxPercentage() {
        return `${this.salesTax * 100}%`;
      },
      salesTaxApplied() {
        if (this.selectedShippingOption) {
          return (this.subtotal * this.salesTax).toFixed(2);
        }
        return '---';
      },
      total() {
        
          return Number(this.subtotal)
                 + Number(this.salesTaxApplied);
        
        
      },
    },
    methods: {
      removeFromCart(itemId) {
        this.$store.dispatch('removeFromCart', itemId)
      },
      plusCart(itemId){
        this.$store.dispatch('plusCart',itemId)
      },
      minusCart(itemId){
        this.$store.dispatch('minusCart',itemId)
      },
      order(){
        let data = {shop_data: JSON.stringify(this.$store.state.cart),notes: this.notes,totalAmount:this.total};
        ItemService.createOrder(data)
        .then(response => {
          console.log(response)
          localStorage.clear();
          this.orderDone = 1;
          this.$store.dispatch('getData')
        })
        .catch(error => {
          console.log('There was an error:',error.response)
        })
      },
      formattingNumber(number) {
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }

    },
    filters: {
      currencydecimal (value) {
        // return value.toFixed(0)
        return Math.ceil(value)
      }
    }
  }
</script>

<style type="text/css">
  
</style>