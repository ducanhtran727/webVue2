import Vuex from "vuex";
import Vue from "vue";
import {listItem , listNews} from '../data';

Vue.use(Vuex);

export const store = new Vuex.Store({
         state: {
           productList: listItem,
           cartList: [],
           newsList:listNews,
         },
         getters:{
           productFilter: state => {
             return state.productList.filter(item => item.name.toLowerCase().indexOf(state.value))
           },
           
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
