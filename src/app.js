import 'normalize.css'
import 'element-ui/lib/theme-default/index.css'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import App from './views/App.vue'
import store from './vuex/store'
import routes from './routes'

Vue.use(Element)
Vue.use(VueRouter)
Vue.use(Vuex)
// Vue.config.silent = true;

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
