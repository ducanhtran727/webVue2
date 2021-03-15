<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-left">
        <p>©2021 Sober</p>
        <a href="#">News</a>
        <a href="#">FAQs</a>
        <a href="#">Contact us</a>
      </div>
      <div class="footer-right">
        <span class="material-icons">
          facebook
        </span>
        <span class="material-icons">
          recommend
        </span>
        <span class="material-icons">
          public
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.footer {
  margin-left:40px;
  margin-right: 40px;
  height: 90px;
  margin-top: 40px;
}
.footer-left{
    display: flex;
    justify-content: space-around;
    width: 20%;
    
}
.footer-left p{
    font-weight: bold;
}
.footer-left a{
    text-decoration: none;
    color: gray;
}
.footer-right{
    display: flex;
    justify-content: space-around;
    width: 10%;
}
.footer-right span{
    cursor: pointer;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 12px;
  border-top: 1px solid gray;
}
</style>
