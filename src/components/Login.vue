<template>
  <div class="loginModal">
    <notifications group="foo" width=500 height=500 position='bot center' />
    <div class="box-title">
      <h2>My Account</h2>
      <img :src="closeIcon" @click="closeLogin()" />
    </div>
    <div class="login-box">
      <div class="login-title">
        <div class="title" @click="openLogin()">Login</div>
        <div class="title" @click="openRegister()">Register</div>
      </div>
      <template v-if="loginStatus">
        <login-form class="fadeToRight"></login-form>
      </template>
      <template v-else>
        <register-form class="fadeToLeft"></register-form>
      </template>
    </div>
  </div>
</template>

<script>
import closeIcon from '../assets/img/close.svg'
import loginForm from '../components/loginForm'
import registerForm from '../components/registerForm'
export default {
  data() {
    return {
      closeIcon,
      loginStatus: true,
    }
  },
  methods: {
    closeLogin() {
      this.$emit('closeLogin', false)
    },
    openLogin() {
      this.loginStatus = true
    },
    openRegister() {
      this.loginStatus = false
    },
  },
  components: {
    loginForm,
    registerForm,
  },

}
</script>
<style>
.form-input {
  display: flex;
  flex-direction: column;
}
.login-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
}
.login-title {
  display: flex;
}
.title {
  margin: 0 25px;
  font-size: 25px;
  font-weight: 600;
  color: gray;
  cursor: pointer;
  position: relative;
}
.title:hover {
  color: black;
}
.title::after{
    content: '';
    display: block;
    position: absolute;
    left: 0;
    height: 2px;
    margin-top: 3px;
    bottom: -3px;
    transition: all .5s;
    background-color: black;
    width:0%;
}
.title:hover::after{
  width: 100%;
  right: 0;
  transition: all .5s;
}
.loginModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 40px 50px 40px 40px;
  background-color: white;
}
.box-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.box-title img {
  width: 2%;
  cursor: pointer;
}
.fadeToLeft {
  animation-name: fadeToLeft;
  animation-duration: 0.5s;
}
.fadeToRight {
  animation-name: fadeToRight;
  animation-duration: 0.5s;
}

@keyframes fadeToLeft {
  0% {
    transform: translateX(-200px);
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes fadeToRight {
  0% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
