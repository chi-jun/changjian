// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'ant-design-vue/dist/antd.css'
import layer from 'vue-layer'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.baseURL = process.env.API_HOST
Vue.prototype.uid = 1
Vue.prototype.session = "aaaa"
Vue.prototype.mid = 1

import VueSocketio from 'vue-socket.io'
// import socketio from 'socket.io-client'

Vue.use(new VueSocketio({
  debug: true,
  connection: 'ws://www.likonget.com:3010',
  vuex: {
  }
}))
 
//这里的url是后台提供的socket的地址
Vue.prototype.$layer = layer(Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
