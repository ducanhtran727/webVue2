<template>
  <div>
    <notifications group="cart" width="500" height="500" position="bottom right" />
    <home-banner></home-banner>
    <box-banner></box-banner>
    <div class="home-tab">
      <p class="tab-name">Best Seller</p>
    </div>
    <div class="product-list">
      <box-product
        v-for="(item, index) in productList"
        :key="index"
        :product="item"
        :index="index"
      ></box-product>
    </div>
    <h2 class="text-center title-news">Fashion News</h2>
    <div class="news-list">
      <box-news v-for="(item ,index ) in newsList" :key="index" :news="item"></box-news>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Baner'
import BoxBanner from '../components/BoxBanner'
import BoxProduct from '../components/boxProduct'
import BoxNews from '../components/boxNews'
export default {
  components: {
    homeBanner: Banner,
    boxBanner: BoxBanner,
    boxProduct: BoxProduct,
    boxNews: BoxNews,
  },
  computed: {
    productList() {
      return this.$store.state.productList.slice(0,10)
    },
    newsList(){
      return this.$store.state.newsList
    }
  },
}
</script>
<style scoped>
.news-list{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
}
.title-news {
  margin-top: 25px;
}
.text-center {
  text-align: center;
}
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
  font-size: 26px;
  font-weight: bold;
  cursor: pointer;
  color: black;
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
