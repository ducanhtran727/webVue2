<template>
  <div id="app" class="app">
    <app-header id="header" @stay="stay = $event"  />
    <router-view />
    <app-subcribe></app-subcribe>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from  './components/Header';
import Footer from './components/Footer';
import Subcribe from './components/Subcribe';
export default {
  data(){
    return{
      lastScrollTop: 0,
      stay:false
    }
  },
  components:{
    'appHeader': Header,
    'appFooter':Footer,
    'appSubcribe':Subcribe
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
      if(this.stay){
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
.d-none{
  display: none;
}
*{
    padding: 0px 0px;
    margin: 0px 0px;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  font-family: 'Recursive', sans-serif;
}
</style>
