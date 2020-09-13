<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-md-6 mx-auto">
        <h2>Register Page!</h2>
        <form>
          <div class="form-group text-left">
            <label for="exampleInputName">Name</label>
            <input type="text" class="form-control" id="exampleInputName">
          </div>
          <div class="form-group text-left">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group text-left">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <div class="form-group text-left">
            <label for="exampleInputConfirmPassword">Confirm Password</label>
            <input type="password" class="form-control" id="exampleInputConfirmPassword">
          </div>
          <button type="submit" class="btn btn-primary btn-block">Create</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    
  }
</script>

<style type="text/css">
  
</style>