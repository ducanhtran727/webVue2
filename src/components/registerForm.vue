<template>
  <div class="login-container">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="login-form" @submit.prevent="handleSubmit(onSubmit)">
          <ValidationProvider
          class="input-item"
          rules="required|alpha|max:16|min:6"
          name="name"
          v-slot="{ errors }"
        >
          <input v-model="name" type="text" placeholder="Name" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          class="input-item"
          rules="required|email"
          name="email"
          v-slot="{ errors }"
        >
          <input v-model="email" type="text" placeholder="Email" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          class="input-item"
          rules="required|max:12|min:6"
          name="password"
          v-slot="{ errors }"
        >
          <input v-model="password" type="password" placeholder="Password" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <button type="submit" class="btn-login">Register</button>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
export default {
  methods:{
    onSubmit(){
        this.$notify({
        group: 'foo',
        type: 'success',
        title: 'Register Success',
        text: 'Go to Login Now!',
      })
    },
  },
  data(){
      return{
          name:'',
          email:'',
          password:''
      }
  }
}
</script>
<style scoped>
.login-container {
  width: 35%;
}
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.login-form {
  width: 100%;
}
.input-item {
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1px solid gray;
  outline: none;
  margin: 20px 0;
}
.input-item input{
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
}
.input-item span{
    color: red;
}
.btn-login {
  width: 100%;
  height: 60px;
  margin-top: 30px;
  background-color: black;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
}
</style>
