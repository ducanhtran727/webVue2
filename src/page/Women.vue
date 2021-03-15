<template>
  <div class="top-news">
    <div class="box-title">
      <h1 class="title">WOMEN</h1>
      <router-link to="/" class="link-to-home"><p>HOME</p></router-link>
    </div>
  </div>
</template>

<script>

export default {

  
}
</script>
<style scoped>
  .link-to-home{
    text-decoration: none;
    color: black;
  }
  .top-news{
    background-image: url('http://pe.heromc.net:3000/static/media/S3.7ad70116.jpg');
    width: 100vw;
    height: 70vh;
    background-position: 50% 75%;
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