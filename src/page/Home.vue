<template>
  <div>
    <notifications group="cart" width=500 height=500 position='top right' />
    <home-banner></home-banner>
    <box-banner></box-banner>
    <div class="home-tab">
      <p class="tab-name">Best Seller</p>
      <p class="tab-name">New Products</p>
      <p class="tab-name">Sales Products</p>
    </div>
    <div class="product-list" >
      <box-product
      v-for="(item,index) in productList"
        :key="index"
        :product="item"
        :index="index"
      ></box-product>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Baner'
import BoxBanner from '../components/BoxBanner'
import BoxProduct from '../components/boxProduct'
export default {
  components: {
    homeBanner: Banner,
    boxBanner: BoxBanner,
    boxProduct: BoxProduct,
  },
  computed: {
    productList(){
      return this.$store.state.productList
    },
  },
}
</script>
<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.home-tab {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0px;
}
.tab-name {
  margin: 0 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: #636e72;
  position: relative;
}
.tab-name:hover {
  color: black;
}
.tab-name::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  height: 2px;
  margin-top: 3px;
  bottom: -3px;
  transition: all 0.5s;
  background-color: black;
  width: 0%;
}
.tab-name:hover::after {
  width: 100%;
  transition: all 0.5s;
}
</style>
