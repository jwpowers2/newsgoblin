//import Vue from 'vue'
//import { createApp } from 'vue';
import { createApp } from 'vue/dist/vue.esm-bundler'
import Vuex from 'vuex'
import VueTouch from 'vue-touch';
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


createApp(App).use(router).use(store).mount('#app')

/*
Vue.config.productionTip = false
Vue.use(VueTouch);

new Vue({
  router,
//  Vuex,
//  store,
  render: h => h(App)
}).$mount('#app')
*/