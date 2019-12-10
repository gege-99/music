import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/reset.css'
import axios from './utils/axios.js'

Vue.config.productionTip = false

Vue.prototype.$axios=axios
// 将axios请求模块挂载到原型上

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
