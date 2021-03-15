<template>
  <div class="subcribe-box">
    <div class="title">Newsletter</div>
    <p>Get timely updates from your favorite products</p>
    <div class="input-box">
      <input placeholder="Enter your email" />
      <div class="btn-subcribe">Subcribe</div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
p{
    font-size: 14px;
    font-weight: bolder;
    color: grey;
    margin: 0;
    padding: 0;
}
.title {
  font-size: 23px;
  font-weight: 600;
  color: #333;
  margin: 30px;
}
.subcribe-box {
  border-top: 0.5px solid#dfe6e9;
  margin: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 0;
}
.input-box {
  display: flex;
}
.input-box {
  width: 70%;
  height: 50px;
}
.input-box input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #dfe6e9;
  transition: all 1s;
  margin: 0 10px;
}
.input-box input:hover {
  border-bottom: 2px solid black;
  transition: all 1s;
}
.btn-subcribe {
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: bold;
  color: #fff;
  background-color: black;
}
</style>
