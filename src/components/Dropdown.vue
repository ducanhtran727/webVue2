<template>
  <div class="drop-Down">
    <div class="menu-dropDown" v-for="(item,index) in menuDropDown" :key="index">
        <router-link to="/" class="dropDown-title"><h5>{{ item.title }}</h5></router-link>
        <p v-for="(value,i) in item.content" :key="i" @click="filterProduct(value)" >{{value}}</p>
    </div>
    <div class="slider">
            <img :src="image" class="d-block w-100"/>     
    </div>
  </div>
</template>

<script>
export default {
  props:['menuDropDown','image','gender'],
  data(){
    return {
      
    };
  },
  created(){
    console.log(this.gender)
  },
  methods:{
    filterProduct(item){
      this.$router.push(`/${this.gender}/${item}`)
    }
  }
};
</script>
<style scoped>
.d-flex-space-around{
    display: flex;
}
.drop-Down {
  position: fixed;
  top: 100px;
  left: 55px;
  border: 1px solid lightgray;
  background-color: white;
  display: flex;
  padding-top: 50px;
  align-items: flex-start;
  justify-content: space-around;
  /* background-color: lightblue; */
  width: 92.5%;
  height: 350px;
}
.slider{
    width: 37%;
}
.dropDown-title{
  text-decoration:none ;
}
.dropDown-detail{
  text-decoration:none ;
}
.menu-dropDown h5{
    font-size: 12px;
    font-weight: bold;
    color: black;
    cursor: pointer;
}
.menu-dropDown h5:hover{
    text-decoration: underline;
}
.menu-dropDown p{
    font-size: 11px;
    color: gray;
    margin: 20px 0;
    cursor: pointer;
}
.menu-dropDown p:hover{
    text-decoration: underline;
}
</style>
