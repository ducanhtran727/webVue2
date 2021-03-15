<template>
  <div class="flex-center p-container">
    <div class="box-banner-new flex-center-col box">
      <div class="box-banner-title">New Arrivals</div>
      <div class="box-banner-child flex-center">
        <router-link to="/">
          <a class="box-banner-link ">Shop Now</a>
        </router-link>
      </div>
    </div>
    <div class="box-banner-container">
      <div class="flex-center">
        <div class="box-women flex-center-col box">
          <div class="box-banner-title-small">WOMEN</div>
          <div class="box-banner-child flex-center">
            <router-link to="/women">
              <a class="box-banner-link">Shop Now</a>
            </router-link>
          </div>
        </div>
        <div class="box-men flex-center-col box">
          <div class="box-banner-title-small">MEN</div>
          <div class="box-banner-child flex-center">
            <router-link to="/men">
              <a class="box-banner-link">Shop Now</a>
            </router-link>
          </div>
        </div>
      </div>
      <div class="box-info flex-center-col box">
        <div class="box-banner-title-small">Free Ship On All Oder</div>
        <div class="box-banner-child flex-center">
          <router-link to="/">
            <a class="box-banner-link">Shop Now</a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-center-col{
    display: flex;
flex-direction: column;
  align-items: center;
  justify-content: center;
}
.p-container{
    padding: 40px 40px 0px 40px;
    margin-top: 40px ;
}
.box-banner-new{
    background-image: url("http://pe.heromc.net:3000/static/media/b1.694cdc73.jpg");
    background-position: center;
    background-size:cover;
    height: 80vh;
    width: 50vw;
}
.box-women{
   background-image: url("http://pe.heromc.net:3000/static/media/b2.48947481.jpg");
   background-position: center;
   background-size: cover;
    height: 40vh;
    width: 25vw;
}
.box-men{
   background-image: url("http://pe.heromc.net:3000/static/media/b3.53dcbf6b.jpg");
    background-position: center;
    background-size:cover;
    height: 40vh;
    width: 25vw;
}
.box-info{
    background-image: url("http://pe.heromc.net:3000/static/media/b4.4bbfaeec.jpg");
    background-position: center;
    background-size:cover;
    height: 40vh;
    width: 50vw;
}
.box-banner-title{
    color: #fff;
    position: absolute;
    font-size: 50px;
    font-weight: 200;
    font-family: sans-serif;
    z-index: 100;
}
.box-banner-title-small{
    color: #fff;
    position: absolute;
    font-size: 26px;
    font-weight: 350;
    font-family: sans-serif;
    z-index: 100;
}
.box-banner-child a{
    font-size: 16px;
    margin: 0 20px 10px 20px;
    margin-top: 120px;
    text-decoration: none;
    color: #fff;
    

}

.box-banner-child{
    width: 40%;
    height: 40%;
    transition: all .5s;
    opacity: 0;
}
.box:hover .box-banner-child{
    width: 80%;
    height: 80%;
    opacity: 1;
    background-color: rgba(3, 3, 3, 0.6);
}
</style>
