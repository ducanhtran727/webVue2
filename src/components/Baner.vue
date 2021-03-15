<template>
  <div class="banner">
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active hello1"  data-bs-interval="5000">
          <div class="carousel-caption d-none d-md-block">
            <transition
              appear
              enter-class=""
              enter-active-class="animate__animated animate__fadeInDown"
            >
              <div class="banner-title">New Arrivals</div>
            </transition>
          </div>
        </div>
        <div class="carousel-item hello2" data-bs-interval="2000">
         
        </div>
        <div class="carousel-item hello3">
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
<style scoped>
.hello1{
  background-image: url('http://pe.heromc.net:3000/static/media/S1.47a7deff.jpg');
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100%;
}
.hello2{
  background-image: url('http://pe.heromc.net:3000/static/media/S3.7ad70116.jpg');
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100%;
}
.hello3{
  background-image: url('http://pe.heromc.net:3000/static/media/S2.1cedb505.jpg');
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100%;
}

.banner {
  height: 713px;

}
.carousel-item img{
  height: 100vh;
  width: 100%;
}
.banner-title {
  position: absolute;
  font-weight: 100;
  font-size: 60px;
  bottom: 180px;
  left: 372px;
  font-family: sans-serif;
  margin-top: 35px;
  margin-bottom: 25px;
}
</style>
