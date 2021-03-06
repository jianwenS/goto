// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import http from './api'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import FastClick from 'fastclick'
import '@/assets/css/iconfont.css'
import '@/assets/css/reset.css'
import '@/assets/css/border.css'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(http)
Vue.config.productionTip = false
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
