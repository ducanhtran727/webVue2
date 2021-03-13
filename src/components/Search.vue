<template>
  <div class="searchModal">
    <notifications group="cart" width=500 height=500 position='top right' />
    <div class="box-title">
      <h2>Search</h2>
      <img :src="closeIcon" @click="closeSearch()" />
    </div>
    <div class="search-container fadeUp">
      <div class="box-search">
        <img :src="iconSearch" />
        <input placeholder="Search name product" type="text" v-model="search" />
      </div>
      <div class="product-filter" v-for="(item , index) in productFilter" :key="index">
        <div class="box-image">
          <img
            :src="item.image2"
          />
        </div>
        <div class="box-name">
          {{item.name}}
        </div>
        <div class="box-price">{{item.price}} đ</div>
        <div class="box-btn" @click="addToCart(item)">Add To Cart</div>
      </div>
    </div>
  </div>
</template>

<script>
import searchIcon from '../assets/img/search-black-18dp.svg'
import closeIcon from '../assets/img/close.svg'
export default {
  data() {
    return {
      iconSearch: searchIcon,
      closeIcon,
      search:''
    }
  },
  methods: {
    closeSearch() {
      this.$emit('closeSearch', false)
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
    }
  },
  computed:{
    productFilter(){
      return this.$store.state.productList.filter(item=>item.name.indexOf(this.search))
    }
  }
}
</script>
<style scoped>
.product-filter{
  display: flex;
  align-items: center;
  height: 120px;
  margin: 20px 10px;
  padding: 5px;
  border-bottom: 1px solid gray;
}
.box-name{
  font-size: 20px;
  width: 40%;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-price{
  font-size: 17px;
  width: 40%;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-btn{
  width: 10%;
  background-color: black;
  color:white;
  font-size: 15px;
  font-weight: bold;
  padding: 20px;
  cursor: pointer;
}
.box-image{
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-image img{
  width: 100%;
  height: 100%;
}
.searchModal {
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
.search-container {
 display: flex;
 flex-direction: column;
 height:90vh;
 overflow: scroll;
}
.box-search {
  display: flex;
  align-items: center;
  margin: 70px 0px 0px 0px;
  width: 100%;
  border-bottom: 1px solid grey;
}
.box-search:hover {
  border-bottom: 2px solid black;
}
.box-search input {
  border: none;
  outline: none;
  height: 50px;
  color: gray;
  font-weight: 600;
  font-size: 20px;
  width: 100%;
}
.box-search img {
  padding: 0px 20px 0px 10px;
  width: 4%;
}
.fadeUp {
  animation-name: fadeUp;
  animation-duration: 0.5s;
}
@keyframes fadeUp {
  0% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
