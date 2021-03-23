<template>
  <div>
    <notifications group="cart" width="500" height="500" position="bottom right" />
    <div
      class="top-news"
      v-bind:style="{ backgroundImage: 'url(' + banner3 + ')' }"
    >
      <div class="box-title">
        <h1 class="title">WOMEN</h1>
        <h2>{{params}}</h2>
        <router-link to="/" class="link-to-home"><p>HOME</p></router-link>
      </div>
    </div>
    <div class="body-main">
      <div class="filter-type">
        <div class="title-type">Product Categories</div>
        <ul>
          <li v-for="(item,index) in listType" :key="index" @click="filterType(item)">{{item}}</li>
        </ul>
      </div>
      <div class="box-right">
        <div class="sub-title">ALL Product </div>
        <hr>
        <div class="list-product">
          <box-product  v-for="(item ,index) in womenList" :key="index" :product="item" :index="index"></box-product>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import boxProduct from '../components/boxProduct'
import banner3 from '../assets/img/banner3.jpg'
export default {
  data() {
    return {
      banner3,
      listType:['Sunglasses','Dress','Shirt','Bikini','Pants','Jacket','Bags'],
      params : this.$route.params.id
    }
  },
  components:{
    boxProduct
  },
  computed:{
    womenList(){
      if(this.params){
        const womenList = this.$store.state.productList.filter(item => item.gender.toLowerCase() === 'women')
        console.log(womenList)
        return womenList.filter(item => item.type.toLowerCase() === this.params.toLowerCase())
      }
     else{
       return this.$store.state.productList.filter(item => item.gender.toLowerCase() === 'women')
     }
    },
  },
  watch:{
    '$route'(to , from ){
      this.params = to.params.id
      console.log(this.params)
    }
  },
  methods:{
    filterType(item){
      this.$router.push(`/women/${item}`)
    }
  }

}
</script>
<style scoped>
.title-type{
  font-size: 20px;
  font-weight: bold;
}
.sub-title{
  font-size: 25px;
  font-weight: 600;
}
.box-right{
  text-align: center;
  width: 115%;
}
.list-product{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.body-main{
  display: flex;
  margin: auto;
  padding: 40px;
}
.filter-type{
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.filter-type ul{
  list-style: none;
  padding: 0;
  margin-top:20px;
}
.filter-type li {
  padding: 20px 0;
  cursor: pointer;
  color: gray;
}
.filter-type li:hover{
  text-decoration: underline;
}
.link-to-home {
  text-decoration: none;
  color: black;
}
.top-news {
  width: 100vw;
  height: 70vh;
  background-position: 50% 75%;
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
