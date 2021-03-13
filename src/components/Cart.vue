<template>
  <div class="cartModal">
    <div class="box-title">
      <h2>Cart</h2>
      <img :src="closeIcon" @click="closeCart()" />
    </div>
    <div class="box-container">
      <div class="box-cart-title">
        <div class="cart-title">Cart</div>
        <div class="cart-title">Whish List</div>
      </div>
      <div class="cart-list">
        <div class="cart-item">
          <div class="image-item">Image</div>
          <div class="name-item">Name</div>
          <div class="amount-item p-left">Amount</div>
          <div class="price-item">Price</div>
          <div class="totalPrice-item">Total Price</div>
        </div>
        <div class="cart-item" v-for="(item, index) in cartList" :key="index">
          <div class="image-item">
            <img :src="item.image2" />
          </div>
          <div class="name-item">{{ item.name }}</div>
          <div class="amount-item">
            <div class="box-amount">
              <span @click="decrease(index)">-</span>
              <p>{{ item.amount }}</p>
              <span @click="increase(index)">+</span>
            </div>
          </div>
          <div class="price-item">{{ item.price }} Đ</div>
          <div class="totalPrice-item">{{ item.price * item.amount }} Đ</div>
          <span class="deleteItem" @click="deleteItem(index)">x</span>
        </div>
      </div>
    </div>
    <div class="cart-checkout-box">
      <div class="total-box">
        <p>Total :</p>
        <p v-if="totalPrice">{{ totalPrice }} Đ</p>
      </div>
      <div class="checkout-box">
        Check out
      </div>
    </div>
  </div>
</template>

<script scoped>
import closeIcon from '../assets/img/close.svg'
export default {
  data() {
    return {
      closeIcon,
    }
  },
  methods: {
    closeCart() {
      this.$emit('closeCart', false)
    },
    deleteItem(item) {
      this.$store.state.cartList.splice(item, 1)
    },
    increase(index) {
      this.$store.state.cartList[index].amount++
    },
    decrease(index) {
      this.$store.state.cartList[index].amount--
    },
  },
  computed: {
    cartList() {
      return this.$store.state.cartList
    },
    totalPrice() {
      const totalPrice = this.$store.state.cartList.map((element) => {
        return element.amount * element.price
      })
      if (totalPrice.length > 0) {
        return totalPrice.reduce((a, b) => a + b)
      }
    },
  },
}
</script>
<style>
.deleteItem {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 2%;
  height: 100%;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
}
.box-amount {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  /* border: .5px solid gray; */
  height: 90%;
}
.p-left {
  padding-left: 17px;
}
.box-amount span {
  font-size: 35px;
  cursor: pointer;
}
.box-amount p {
  margin: 0;
  font-size: 20px;
  color: gray;
  position: relative;
}
.box-amount p::after {
  content: '';
  display: block;
  height: 2px;
  width: 100%;
  background-color: gray;
  position: absolute;
  left: 0;
}
.cart-item {
  display: flex;
  height: 100px;
  border-bottom: 1px solid gray;
  color: black;
  font-weight: 600;
  padding: 10px 0;
}
.image-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 15%;
  height: 100%;
}
.name-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 35%;
  height: 100%;
}
.image-item img {
  max-width: 40%;
}
.amount-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 15%;
  height: 100%;
}
.price-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 15%;
  height: 100%;
}
.totalPrice-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 18%;
  height: 100%;
}
.cartModal {
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
.box-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  animation-name: fadeUp;
  animation-duration: 0.5s;
}
.box-cart-title {
  display: flex;
}
.cart-title {
  margin: 0 30px;
  color: gray;
  font-size: 25px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
}
.cart-title::after {
  content: '';
  display: block;
  left: 0;
  height: 2px;
  position: absolute;
  background-color: black;
  width: 0%;
  transition: all 0.5s;
}
.cart-title:hover {
  color: black;
}
.cart-title:hover::after {
  width: 100%;
  transition: all 0.5s;
}
.visited {
  color: black;
}
.cart-checkout-box {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border: 1px #ddd solid;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 320px;
  justify-content: space-between;
}
.total-box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
}
.total-box p {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}
.checkout-box {
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: bold;
  color: #fff;
  background-color: black;
}
.cart-list {
  width: 100%;
  margin-top: 40px;
  height: 412px;
  overflow-y: scroll;
}
@keyframes fadeUp {
  0% {
    transform: translateY(150px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
