import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from "axios";
const baseURL = `http://${process.env.VUE_APP_BASEURL}/`
axios.defaults.baseURL = baseURL

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
