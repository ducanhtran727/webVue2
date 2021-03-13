import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from "./route/routes";
import {ValidationProvider} from 'vee-validate/dist/vee-validate.full.esm';
import {ValidationObserver} from 'vee-validate';
import Notifications from "vue-notification";
import {store} from './store/store'
Vue.component("ValidationProvider",ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.use(VueRouter);
Vue.use(Notifications)
const router = new VueRouter({
  mode:'history',
  routes
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
