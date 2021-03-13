<template>
  <div class="login-container">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)" class="login-form">
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
        <div class="remember-box">
          <input type="checkbox" />
          Remember me
        </div>
        <button type="submit" class="btn-login">Login</button>
        <router-link class="fogotPassword" to="/">
          <p>Lost Your Password ?</p>
        </router-link>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
export default {
  methods: {
    onSubmit() {
      this.$notify({
        group: 'foo',
        type: 'success',
        title: 'Login Success',
        text: 'Welcome To Sober Shop!',
      })
    },
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
}
</script>
<style scoped>
.fogotPassword {
  color: gray;
  margin-top: 20px;
  font-size: 15px;
}
.remember-box {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}
.remember-box input {
  margin: 20px 20px 20px 0px;
  width: 20px;
  height: 20px;
  background-color: gray;
}
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
.input-item input {
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
}
.input-item span {
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
