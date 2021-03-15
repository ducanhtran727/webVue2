<template>
  <div class="box-product">
    <div v-if="modalStatus">
      <product-detail
        @closeModal="modalStatus = $event"
        :product="product"
      ></product-detail>
    </div>
    <div class="box-main">
      <div class="product-tag">
        <div class="sale-tag" v-if="product.salePercent">
          {{ product.salePercent }}
        </div>
        <div class="hot-tag" v-if="product.hotTag">
          {{product.hotTag}}
        </div>
        <div class="heart-tag">
          {{product.heart}}<img :src="favoriteIcon">
        </div>
      </div>
      <div class="img-product">
        <img :src="product.image1" />
        <img class="img-product2" :src="product.image2" />
      </div>
      <div class="overlay-product">
        <div class="box-icon cart-icon" @click="addToCart">
          <img :src="cartIcon" />
        </div>
        <div @click="modalStatus = true" class="box-icon eye-icon">
          <img :src="eyeIcon" />
        </div>
        <div class="box-icon favorite-icon" @click="likeProduct(index)">
          <img :src="favoriteIcon" />
        </div>
      </div>
    </div>

    <div class="box-title">
      <div class="title-product">
        {{ product.name }}
      </div>
      <div class="price-product">
        {{ product.price}} Đ
      </div>
    </div>
  </div>
</template>

<script>
import cartIcon from '../assets/img/cart.svg'
import eyeIcon from '../assets/img/eye.svg'
import favoriteIcon from '../assets/img/favorite.svg'
import ProductDetail from './productDetail.vue'

export default {
  props: ['product','index'],
  data() {
    return {
      cartIcon,
      eyeIcon,
      favoriteIcon,
      modalStatus: false,
    }
  },
  methods: {
    addToCart(){
     this.$store.state.cartList.push(this.product)
     this.$notify({
        group: 'cart',
        type: 'success',
        title: 'Add To Cart Success',
        text: 'Check Your Cart',
        duration:500
      })
    },
    likeProduct(index){
      this.$store.state.productList[index].heart++
    }
  },
  components: {
    ProductDetail,
  },
}
</script>
<style scoped>
.overlay-product {
  overflow: hidden;
  position: absolute;
  padding: 20px 0px;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 50%;
  width: 100%;
}
.box-icon {
  background-color: #ffeaa7;
  cursor: pointer;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transform: scale(0);
  /* transition: all .5s;
  animation-name: upFade;
  animation-duration:1s ; */
}
.box-title {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 120px;
}
.box-product {
  position: relative;
  margin: 15px 15px 10px 15px;
  width: 265px;
  height: 410px;
  display: flex;
  flex-direction: column;
}
.box-product:hover .cart-icon {
  transform: scale(1);
  transition: all 1s;
  animation-name: upFade;
  animation-duration: 0.6s;
}
.cart-icon{
  transform: scale(0);
  transition: all 1s;
  animation-name: downFade;
  animation-duration: 0.6s;
}
.box-product:hover .eye-icon {
  transform: scale(1);
  transition: all 1s;
  animation-name: upFade;
  animation-duration: 0.8s;
}
.eye-icon{
  transform: scale(0);
  transition: all 1s;
  animation-name: downFade;
  animation-duration: 0.8s;
}
.box-product:hover .favorite-icon {
  transform: scale(1);
  transition: all 1s;
  animation-name: upFade;
  animation-duration: 1s;
}
.favorite-icon{
  transform: scale(0);
  transition: all 1s;
  animation-name: downFade;
  animation-duration: 1s;
}
.img-product2 {
  opacity: 1;
  transition: all 1s;
}
.box-product:hover .img-product2 {
  opacity: 0;
  transition: all 1s;
}

.title-product {
  font-weight: 500;
}
.price-product {
  font-weight: bold;
}
.hide {
  visibility: hidden;
}
.box-main {
  width: 100%;
  height: 100%;
  position: relative;
}
.product-tag {
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 2;
  top: 3%;
  left: 0;
}
.img-product {
  position: relative;
  width: 100%;
  height: 100%;
}
.img-product img {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.sale-tag {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  width: 40px;
  height: 20px;
  font-size: 12px;
  font-weight: 600;
  background-color: #1abc9c;
  color: whitesmoke;
}
.hot-tag {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  width: 40px;
  height: 20px;
  font-size: 12px;
  font-weight: 600;
  background-color: #ff7675;
  color: whitesmoke;
}
.heart-tag{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  width: 40px;
  height: 20px;
  font-size: 14px;
  font-weight: 600;
  background-color: #74b9ff;
}
@keyframes upFade {
  0% {
    transform: translateY(200px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes downFade {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(200px);
  }
}
</style>
