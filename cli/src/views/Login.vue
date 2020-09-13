<template>
  <!-- <div class="container">
    <div class="row my-5">
      <div class="col-md-6 mx-auto">
        <h2>Login To Your Account</h2>

        <p v-if="auth=='fail'" class="text-danger">{{errMsg}}</p>

        <form v-on:submit.prevent="Login">
          <div class="form-group text-left">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model="email">
          </div>
          <div class="form-group text-left">
            <label for="exampleInputPassword1">Password</label>
            <input
             type="password" class="form-control" id="exampleInputPassword1" v-model="password">
          </div>
          <div class="form-group form-check text-left">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div> -->


  <!-- new -->

  <div class="container">

    <!-- Outer Row -->
    <div class="row justify-content-center">

      <div class="col-xl-10 col-md-6">

        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6">
                <img src="@/assets/login.jpg" 
                class="d-block w-100 h-100 img-fluid">
              </div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Login to your Account</h1>
                     <p v-if="auth=='fail'" class="text-danger">{{errMsg}}
                     </p>
                  </div>
                      <form v-on:submit.prevent="Login">
                        <div class="form-group row">
                          <div class="col-sm-12">
                              <input type="emial" class="form-control" name="user_email" minlength="4" 
                                required="required" placeholder="Enter Email" v-model="email">
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-sm-12">
                              <input type="password" class="form-control" name="user_password" minlength="4" 
                              required="required" placeholder="Enter  Password" v-model="password">
                          </div>
                        </div>
                          
                        <div class="form-group row">
                          <div class="col-sm-12" >
                              <input type="submit" class="form-control btn btn-primary w-50" value="Login" style="border-radius: 13px;">
                          </div>
                        </div>
                        <p class="text-secondary my-3">Not a member?
                          <router-link :to="{name:'register'}" class="link-green">Create an account
                          </router-link>
                        </p>
                              
                      </form> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script type="text/javascript">
  import ItemService from '@/services/ItemService.js'
  // import axios from 'axios'
  export default{
    data(){
      return {
        email: '',
        password: '',
        errMsg: ''
      }
    },
    methods:{
      Login(){
        let user = {username: this.email, password: this.password}
        user.client_id = 2
        user.client_secret  = ' Ht2zYgoM9GVnBnpx02oxSXJ2PxWD6ngXGrKQDmkI'
        user.grant_type = 'password'
        ItemService.login(user)
          .then(res => {
            const token = res.data.access_token
            this.$store.dispatch('loginSuccess', token)
            // axios.defaults.headers.common['Authorization'] = token
            this.$router.push('/orders')
          })
          .catch(err =>{
            console.log('There was an error:',err.response)
            this.errMsg = 'Login Failed!, Incorrect Email and Password'
            this.$store.dispatch('loginFail')
          })
      }
    },
    computed:{
      auth(){
        return this.$store.getters.authStatus
      }
    }
  }
</script>

<style type="text/css">
  
</style>