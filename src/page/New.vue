<template>
  <div class="top-news">
    <div class="box-title">
      <h1 class="title">NEWS</h1>
      <router-link to="/" class="link-to-home"><p>HOME</p></router-link>
      <div class="new-tab">
        <p>All Blog Posts</p>
        <p>FASHION</p>
        <p>SHOPPING</p>
      </div>
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
    color: white;
  }
  .top-news{
    background-image: url('http://pe.heromc.net:3000/static/media/newsbanner.8a651cd6.jpg');
    width: 100vw;
    height: 70vh;
    background-position: -50% 0%;
    background-size: cover;
    text-align: center;
    color: white;
    padding-top: 25vh;
  }
  .title{
    font-size: 85px;
    font-weight: 500;
    color: white;
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
    justify-content: space-between;
    height: 100%;
  }
</style>
