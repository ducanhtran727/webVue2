<template>
  <div class="header" id="header">
    <ul class="menu">
      <router-link to="/" class="item-menu"
        ><a class="item-link">HOME</a></router-link
      >
      <div @mouseover="womenMenuMouseOver()" @mouseout="womenMenuMouseLeave()">
        <router-link to="/" id="womenMenu" class="item-menu women-menu"
          ><a class="item-link">WOMEN</a
          ><drop-down :menuDropDown="menuDropDownWomen" v-show="womenMenu"></drop-down
        ></router-link>
      </div>
      <div class="men-item" @mouseover="menMenuMouseOver()" @mouseout="menMenuMouseLeave()">
        <router-link to="/" class="item-menu"
          ><a class="item-link">MEN</a>
          <drop-down :menuDropDown="menuDropDownMen" v-show="menMenu"></drop-down></router-link
        >
      </div>
      <router-link to="/" class="item-menu"
        ><a class="item-link">NEWS</a></router-link
      >
      <router-link to="/" class="item-menu"
        ><a class="item-link">CONTACT</a></router-link
      >
    </ul>
    <router-link class="logo" to="/">
      <a
        ><img
          src="https://demo.uix.store/sober/wp-content/themes/sober/images/logo.svg"
      /></a>
    </router-link>
    <div class="menu-icon">
      <div class="icon" @click="searchClick()">
        <img :src="searchImg" />
      </div>
      <div class="icon cart-container" @click="cartClick()">
        <img :src="cartImg" />
        <div class="counter-cart">
          <p v-if="this.$store.state.cartList.length">{{this.$store.state.cartList.length}}</p>
        </div>
      </div>
      <div class="icon" @click="loginClick()">
        <img :src="loginImg" />
      </div>
    </div>
    <template v-if="iconStatus == 'search'">
      <transition enter-class=""
                  enter-active-class=""
                  leave-class=""
                  leave-active-class="">
        <search-modal @closeSearch="iconStatus = $event"></search-modal>
      </transition>
    </template>
    <template v-if="iconStatus == 'cart'">
      <cart-modal @closeCart="iconStatus = $event"></cart-modal>
    </template>
    <template v-if="iconStatus == 'login'">
      <login-modal @closeLogin="iconStatus = $event"></login-modal>
    </template>
  </div>
</template>

<script>
import search from "../assets/img/search-black-18dp.svg";
import cart from "../assets/img/cart.svg";
import loginIcon from "../assets/img/person-black-18dp.svg";
import Dropdown from "./Dropdown";
import SearchModal from "./Search";
import CartModal from './Cart';
import LoginModal from './Login';
export default {
  data() {
    return {
      searchImg: search,
      cartImg: cart,
      loginImg: loginIcon,
      womenMenu: false,
      menMenu:false,
      iconStatus: "",
      menuDropDownMen:[
          {title:"YOUR-CITY" , content:['Sai Gon','Ha Noi','Hung Yen','Hai Phong','Quang Linh']},
          {title:"YOUR-CITY" , content:['Sai Gon','Ha Noi','Hung Yen','Hai Phong','Quang Linh']},
          {title:"YOUR-CIRY" , content:['Sai Gon','Ha Noi','Hung Yen','Hai Phong','Quang Linh']},
      ],
      menuDropDownWomen:[
          {title:"COUNTRY" , content:['Viet Nam','ThaiLand','Korean','China','Japan']},
          {title:"COUNTRY" , content:['Viet Nam','ThaiLand','Korean','China','Japan']},
          {title:"COUNTRY" , content:['Viet Nam','ThaiLand','Korean','China','Japan']},
          {title:"COUNTRY" , content:['Viet Nam','ThaiLand','Korean','China','Japan']},
      ],
    };
  },
  components: {
    dropDown: Dropdown,
    searchModal: SearchModal,
    cartModal:CartModal,
    loginModal:LoginModal
  },
  methods: {
    womenMenuMouseOver() {
      console.log(this.womenMenu);
      document.getElementById("header").classList.add("bot-border");
      return (this.womenMenu = true);
    },
    womenMenuMouseLeave() {
      document
        .getElementById("header")
        .classList.remove("bot-border");
      return (this.womenMenu = false);
    },
    menMenuMouseOver() {
      document.getElementById("header").classList.add("bot-border");
      return (this.menMenu = true);
    },
    menMenuMouseLeave(){
      document
        .getElementById("header")
        .classList.remove("bot-border");
      return (this.menMenu = false);
    },
    searchClick() {
      this.iconStatus = "search";
      console.log(this.iconStatus);
    },
    cartClick(){
        this.iconStatus = "cart"
    },
    loginClick(){
        this.iconStatus = "login"
    }
  },
};
</script>
<style scoped>
.header {
  height: 100px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  padding: 0 20px;
  display: grid;
  transition: all .5s;
  grid-template-columns: repeat(12, 1fr);
  background: rgba(204, 204, 204, 0);
}
.header:hover{
  background-color: white;
  transition: all .5s;
}
.move-top{
  top: -100px;
}
.d-none {
  display: none;
}
.bot-border {
  border-bottom: 1px solid lightgray;
}
.bg-white {
  background-color: white;
}
.menu {
  list-style: none;
  grid-column: 1/5;
  margin: 0px 0px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.item-menu {
  height: 100px;
  display: flex;
  align-items: center;
  text-decoration: none;
}
.item-link {
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  padding: 5px 0;
  margin: 0 20px;
  font-size: 12px;
  position: relative;
  color: black;
}
.item-link::after {
  content: "";
  display: block;
  height: 2px;
  background: #000;
  margin-top: 3px;
  position: absolute;
  left: 0;
  bottom: -3px;
  transition: all 0.5s;
  width: 0;
}
.item-menu:hover .item-link::after {
  transition: all 0.5s;
  width: 100%;
  right: 0;
}
.logo {
  grid-column: 5/9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-icon {
  grid-column: 9/13;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.icon {
  margin: 0 20px;
  cursor: pointer;
}
.icon img {
  width: 130%;
}
.cart-container {
  display: flex;
  align-items: center;
}
.cart-container .counter-cart p {
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: white;
  margin-left: 5px;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  line-height: 20px;
}
</style>
