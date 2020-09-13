<template>
  <!-- <div class="container">
    <div class="row my-5">
      <div class="col-md-6 mx-auto">
        <h2>Welcome New Member</h2>
        <form v-on:submit.prevent="register">
          <div class="form-group text-left">
            <label for="exampleInputName">User Name</label>
            <input type="text" class="form-control" id="exampleInputName" v-model="name">
          </div>
          <div class="form-group text-left">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group text-left">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" autocomplete="off">
          </div>
          <div class="form-group text-left">
            <label for="exampleInputConfirmPassword">Confirm Password</label>
            <input type="password" class="form-control" id="exampleInputConfirmPassword" v-model="confirmpassword" autocomplete="off">
             <span class="md-helper-text text-danger" v-if="errorPasswordMessage">Confirm Password does not match with Password.</span>
          </div>
          <button type="submit" class="btn btn-primary btn-block"  :disabled="Active">Create</button>

          <p class="text-secondary my-3">Are you already a member?
            <router-link :to="{name:'login'}" class="link-green">Log in Here
            </router-link>
          </p>
        </form>
      </div>
    </div>
  </div> -->


  <!-- new  -->

  <div class="container">

    <!-- Outer Row -->
    <div class="row justify-content-center">

      <div class="col-xl-10 col-md-6">

        <div class="card o-hidden border-0 shadow-lg my-3">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6">
                <img src="@/assets/register.jpg" 
                class="d-block w-100 h-100 img-fluid">
              </div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Hello New Member</h1>
                  </div>
                      <form v-on:submit.prevent="register">
                    
                        <div class="form-group row">
                          <div class="col-sm-12">
                              <input type="text" class="form-control" 
                              name="user_name" minlength="4" 
                              required="required" placeholder="Enter User Name" v-model="name">
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-sm-12">
                              <input type="emial" class="form-control" name="user_email" minlength="4" 
                                required="required" placeholder="Enter User Email" v-model="email">
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-sm-12">
                              <input type="password" class="form-control" name="user_password" minlength="4" 
                              required="required" placeholder="Enter User Password" v-model="password">
                          </div>
                        </div>
                          <div class="form-group row">
                          <div class="col-sm-12">
                              <input type="password" class="form-control" name="user_confirm_password" minlength="4" 
                              required="required" placeholder="Confirm User Password" v-model="confirmpassword">
                              <span class="md-helper-text text-danger" 
                              v-if="errorPasswordMessage">Confirm Password does not match with Password.</span>
                          </div>
                        </div>
                        <br>
                        <div class="form-group row">
                          <div class="col-sm-12" >
                              <input type="submit" class="form-control btn btn-warning w-50" value="Register" style="border-radius: 13px;"  :disabled="Active">
                          </div>
                        </div>
                        <p class="text-secondary my-3">Are you already a member?
                          <router-link :to="{name:'login'}" class="link-green">Log in Here
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
  export default{
    data(){
      return {
        name:null,
        email:null,
        password:null,
        confirmpassword:null,
        errorPasswordMessage:false,
        Active:true
      };
    },
    watch:{
      confirmpassword(value){
        this.confirmpassword=value
        this.matchPassword(value);
      }
    },
    methods:{
      matchPassword(value){
        if (this.password && value && (this.password !== value)) {
          this.errorPasswordMessage=true;
          
        }else{
          this.errorPasswordMessage = false;
          this.Active=false;
        }
      },
      register(){
        let user={name:this.name,email:this.email,password:this.password};
        ItemService.register(user).
        then(()=>{
          this.$router.push('/login')
        }).catch(err=>{
          if (err.response.status) {
            this.errorMessage = err.response.data.errors
          }
        })
      }
    }
  }
</script>

<style type="text/css">
  
</style>