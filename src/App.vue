<template>
  <div id="app" class="app">
    <app-header id="header" />
    <router-view />
  </div>
</template>

<script>
import Header from  './components/Header';
export default {
  data(){
    return{
      lastScrollTop: 0
    }
  },
  components:{
    'appHeader': Header,
  },
  mounted(){
    const headerElement = document.getElementById('header');
    window.addEventListener('scroll',()=>{
      if(window.pageYOffset === 0){
        headerElement.classList.remove('bg-white');
        headerElement.classList.remove('move-top');
        this.lastScrollTop = window.pageYOffset
      }
      if(window.pageYOffset < this.lastScrollTop){
        headerElement.classList.add('bg-white');
        headerElement.classList.remove('move-top');
        this.lastScrollTop = window.pageYOffset
      }
      if(window.pageYOffset > this.lastScrollTop){
        headerElement.classList.add('move-top')
        this.lastScrollTop = window.pageYOffset
      }
    })
  }
}
// window.addEventListener('scroll',()=>{
//   document.getElementById('app').lastScrollTop = window.pageYOffset;
//   console.log(document.getElementById('app').lastScrollTop)
// })

</script>
<style>
*{
    padding: 0px 0px;
    margin: 0px 0px;
    box-sizing: border-box;
    font-family: Poppins ,sans-serif;
}
</style>
