<template>
  <tr>
    <td>{{order.order_id}}</td>
    <td>{{order.order_voucherno}}</td>
    <td>{{order.order_user.user_name}}</td>
   <!--  <td>{{order.order_note}}</td> -->
    <td>{{order.order_total}} MMK</td>
    <td>
      
                <router-link  :to="{name: 'order-show', params: { id: order.order_id }}">
                  <b-button variant="outline-info" class="mb-2 mr-3">
               <b-icon icon="eye-fill"> 
                </b-icon>
              </b-button>
                </router-link>
                

      </td>
    <!-- <td class="btn btn-primary">Detail</td> -->
  </tr>
</template>

<script type="text/javascript">
  export default{
    props:{
      order: Object
    },
    methods: {
      
    }
  }
</script>

<style type="text/css">
  
</style>