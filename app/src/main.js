import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VueMeta from 'vue-meta'
import axios from '@/config/axios.config'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(VueMeta)
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
