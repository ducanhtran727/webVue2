<template>
  <div class="top-news" v-bind:style="{ backgroundImage: 'url(' + banner1 + ')' }">
    <div class="box-title">
      <h1 class="title">MEN</h1>
      <router-link to="/" class="link-to-home"><p>HOME</p></router-link>
    </div>
  </div>
</template>

<script>
import banner1 from '../assets/img/firstbanner.jpg'
export default {
 data(){
   return{
     banner1
   }
 }
  
}
</script>

<style scoped>
  .link-to-home{
    text-decoration: none;
    color: black;
  }
  .top-news{
    /* background-image: url('http://pe.heromc.net:3000/static/media/S1.47a7deff.jpg'); */
    width: 100vw;
    height: 70vh;
    background-position: center;
    background-size: cover;
    text-align: center;
    padding-top: 25vh;
  }
  .title{
    font-size: 70px;
    font-weight: 500;
  }
  .new-tab{
    display: flex;
    justify-content: space-evenly;
    width: 400px;
    margin: 0 auto;
  }
  .new-tab p {
    font-weight: bold;
    cursor: pointer;
  }
  .box-title{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }
</style>