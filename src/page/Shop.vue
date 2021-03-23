<template>
  <div>
    <notifications group="cart" width="500" height="500" position="bottom right" />
    <div
      class="top-news"
      v-bind:style="{ backgroundImage: 'url(' + banner1 + ')' }"
    >
      <div class="box-title">
        <h1 class="title">Shop</h1>
        <h2>{{params}}</h2>
        <router-link to="/" class="link-to-home"><p>HOME</p></router-link>
      </div>
    </div>
    <div class="body-main">
      <div class="filter-type">
        <div class="title-type">Product Categories</div>
        <ul>
          <li v-for="(item , index) in listType" :key="index" @click="filterType(item)">{{ item }}</li>
        </ul>
      </div>
      <div class="box-right">
        <div class="sub-title" @click="backToAll()">ALL Product</div>
        <hr />
        <div class="list-product">
          <box-product
            v-for="(item, index) in shopList"
            :key="index"
            :product="item"
            :index="index"
          ></box-product>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner1 from '../assets/img/firstbanner.jpg'
import boxProduct from '../components/boxProduct';
export default {
  data() {
    return {
      banner1,
      listType:['Sunglasses','Backpack','Bags','Hats','Shoes','Vest','Pants','Bikini','Dress','Jacket'],
      params : this.$route.params.id
    }
  },
  components:{
    boxProduct
  },
  computed:{
    shopList(){
     if(this.params){
        const shopList = this.$store.state.productList
      return shopList.filter(item => item.type.toLowerCase() === this.params.toLowerCase())
     }else{
       return this.$store.state.productList
     }
    }
  },
  methods:{
    filterType(item){
      this.$router.push(`/shop/${item}`)
    },
    backToAll(){
        this.$router.push('/shop')
    }
  },
  watch:{
    '$route'(to,from){
      this.params = to.params.id
    }
  }
}
</script>
<style scoped>
.title-type {
  font-size: 20px;
  font-weight: bold;
}
.sub-title {
  font-size: 25px;
  display: inline;
  font-weight: 600;
  cursor: pointer;
  position: relative;
}
.sub-title::after{
    content:'';
    display: block;
    height: 2px;
    left: 0;
    position:absolute;
    transition: all .5s;
    width: 0%;
    background-color: black;
}
.sub-title:hover::after{
    width: 100%;
    right: 0;
    transition: all .5s;
}
.box-right {
  text-align: center;
  width: 115%;
}
.list-product {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.body-main {
  display: flex;
  margin: auto;
  padding: 40px;
}
.filter-type {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.filter-type ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}
.filter-type li {
  padding: 20px 0;
  cursor: pointer;
  color: gray;
}
.filter-type li:hover {
  text-decoration: underline;
}
.link-to-home {
  text-decoration: none;
  color: black;
}
.top-news {
  /* background-image: url('http://pe.heromc.net:3000/static/media/S1.47a7deff.jpg'); */
  width: 100vw;
  height: 70vh;
  background-position: center;
  background-size: cover;
  text-align: center;
  padding-top: 25vh;
}
.title {
  font-size: 70px;
  font-weight: 500;
}
.new-tab {
  display: flex;
  justify-content: space-evenly;
  width: 400px;
  margin: 0 auto;
}
.new-tab p {
  font-weight: bold;
  cursor: pointer;
}
.box-title {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}
</style>