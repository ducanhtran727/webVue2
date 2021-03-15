import Vuex from "vuex";
import Vue from "vue";
import prd1 from '../assets/img/prd1.png'
import prd2 from '../assets/img/prd2.jpg'
import prd21 from '../assets/img/prd21.jpg';
import prd22 from '../assets/img/prd22.jpg';
import prd31 from '../assets/img/prd31.jpg';
import prd32 from '../assets/img/prd32.jpg';
import prd41 from '../assets/img/prd41.jpg';
import prd42 from '../assets/img/prd42.jpg';
import prd51 from '../assets/img/prd51.jpg';
import prd52 from '../assets/img/prd52.jpg';
import prd61 from '../assets/img/prd61.jpg';
import prd62 from '../assets/img/prd62.jpg';
import prd71 from '../assets/img/prd71.jpg';
import prd72 from '../assets/img/prd72.jpg';
import prd81 from '../assets/img/prd81.png';
import prd82 from '../assets/img/prd82.png';
import prd91 from '../assets/img/prj91.jpg';
import prd92 from '../assets/img/prd92.jpg';
import prd101 from '../assets/img/prd101.jpg';
import prd102 from '../assets/img/prd102.jpg';
import news1 from '../assets/img/news1.jpg';
import news2 from '../assets/img/news2.jpg';
import news3 from '../assets/img/news3.jpg';


Vue.use(Vuex);

export const store = new Vuex.Store({
         state: {
           productList: [
             {
               name: "Roll Top Backpack",
               description:
                 "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
               price: 270000,
               salePercent: "10%",
               hotTag: "HOT",
               image2:
                 prd1,
               image1:
                 prd2,
               type: "Backpack",
               amount: 1,
               heart: 0
             },
             {
               name: "Sonnenbrille Goldfarben",
               description:
                 "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
               price: 2560000,
               image2:
                 prd21,
               image1:
                 prd22,
               type: "glasses",
               salePercent: "",
               hotTag: "HOT",
               amount: 1,
               heart: 0
             },
             {
               name: "Large Monogram Barrel",
               description:
                 "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
               price: 1005000,
               image2:
                 prd31,
               image1:
                 prd32,
               type: "BAGS",
               salePercent: "15%",
               hotTag: "",
               amount: 1,
               heart: 0
             },
             {
               name: "Monogram Print Silk",
               description:
                 "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
               price: 790000,
               image2:
                 prd41,
               image1:
                 prd42,
               type: "PANTS",
               salePercent: "25%",
               hotTag: "HOT",
               amount: 1,
               heart: 0
             },
             {
               name: "Flared Skirts",
               description:
                 "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
               price: 700000,
               image2:
                 prd51,
               image1:
                 prd52,
               type: "SKIRT",
               salePercent: "20%",
               hotTag: "",
               amount: 1,
               heart: 0
             },
             {
               name: "Cotton Poplin Dress",
               description:
                 "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
               price: 540000,
               image2:
                 prd61,
               image1:
                 prd62,
               type: "DRESS",
               salePercent: "50%",
               hotTag: "HOT",
               amount: 1,
               heart: 0
             },
             {
               name: "Tasche Baguette",
               description:
                 "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
               price: 1250000,
               image2:
                 prd71,
               image1:
                 prd72,
               type: "BAGS",
               salePercent: "",
               hotTag: "HOT",
               amount: 1,
               heart: 0
             },
             {
               name: "Monogram Print Bikini",
               description:
                 "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
               price: 342000,
               image2:
                 prd81,
               image1:
                 prd82,
               type: "BIKINI",
               salePercent: "12%",
               hotTag: "HOT",
               amount: 1,
               heart: 0
             },
             {
               name: "Cotton Hat",
               description:
                 "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
               price: 400000,
               image2:
                 prd91,
               image1:
                 prd92,
               type: "HATS",
               salePercent: "22%",
               hotTag: "HOT",
               amount: 1,
               heart: 0
             },
             {
               name: "Classic Topper",
               description:
                 "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
               price: 400000,
               image2:
                 prd101,
               image1:
                 prd102,
               type: "JACKET",
               salePercent: "34%",
               hotTag: "",
               amount: 1,
               heart: 0
             }
           ],
           cartList: [],
           newsList:[
             {
               name:'A Guide To The Best Accessories For Fall',
               img:news1,
               type:'INSPIRATION',
               date:'15.3.2021',
               detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim...'
             },
             {
               name:'The Best Street Style From Brooklyn’s 2016',
               img:news2,
               type:'INSPIRATION',
               date:'16.3.2021',
               detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim...'
             },
             {
               name:'A Minimalist Coat Is A Must For Fall',
               img:news3,
               type:'FASHION',
               date:'17.3.2021',
               detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim...'
             }
           ],
           value:''
         },
         getters:{
           productFilter: state => {
             return state.productList.filter(item => item.name.toLowerCase().indexOf(state.value))
           }
         },
        //  mutations :{
        //    updateValue: (state ,payload) =>{
        //      state.value = payload
        //    }
        //  },
        //  actions: {
        //    actionUpdate : ({commit},payload) =>{
        //      commit("updateValue",payload)
        //    }
        //  }
        //  mutations
       });
