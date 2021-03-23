<template>
  <div class="product-detail">
    <div class="modal-overlay" @click="closeModal()"></div>
    <div class="modal-content">
      <div class="box-img">
        <img :src="product.image2" />
        <div class="product-tag">
          <div class="sale-tag" v-if="product.salePercent">
            {{product.salePercent}}
          </div>
          <div class="hot-tag" v-if="product.hotTag">
            {{product.hotTag}}
          </div>
          <div class="heart-tag">
            {{product.heart}}<img :src="favoriteIcon" />
          </div>
        </div>
      </div>
      <div class="box-info">
        <h2>{{product.name}}</h2>
        <p class="sub-title">
          {{product.description}}
        </p>
        <h4>{{product.price}} Đ</h4>
        <button class="btn-cart" @click="addToCart(product)">Add To Cart</button>
        <hr>
        <p>Category : {{product.type}}</p>
        <hr>
      </div>
    </div>
  </div>
</template>
<script>
import favoriteIcon from '../assets/img/favorite.svg'
export default {
  props:['product'],
  data() {
    return {
      favoriteIcon
    }
  },
  methods:{
    closeModal(){
      this.$emit('closeModal',false);
    },
    addToCart(item){
      this.$store.state.cartList.push(item)
      this.$notify({
        group: 'cart',
        type: 'success',
        title: 'Add To Cart Success',
        text: 'Check Your Cart',
        duration:500
      })
    },
  }
}
</script>
<style scoped>
.sub-title{
  font-size: 13px;
  color: grey;
  font-weight: 500;
  font-optical-sizing: auto;
  max-width: 60%;
  padding: 0;
  margin: 0;
}
.btn-cart{
  padding: 20px 40px;
  background-color: black;
  cursor: pointer;
  color: white;
}
.box-info {
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
}
.product-tag {
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 2;
  top: 3%;
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
.hot-tag{
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
.heart-tag {
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
.product-detail {
  position: relative;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 9999;
  bottom: 0;
  right: 0;
}
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.modal-content {
  position: relative;
  display: flex;
  margin: auto;
  width: 80vw;
  height: 80vh;
}
.box-img {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.box-img img {
  width: 100%;
  height: 100%;
}
</style>
