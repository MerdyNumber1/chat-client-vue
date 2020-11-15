import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import VueMeta from 'vue-meta'
import axios from '@/config/axios.config'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(VueMeta)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(new VueSocketIO({
    autoConnect: false,
    connection: SocketIO(process.env.VUE_APP_SOCKET_URL, {
      query: `token=${localStorage.getItem('token')}`
    }),
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
