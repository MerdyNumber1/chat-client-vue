<template>
  <b-container class="mt-5">
    <navbar />
    <router-view />
  </b-container>
</template>

<script>
import {mapActions} from 'vuex'
import Navbar from '@/components/common/Navbar'
import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'


Vue.use(new VueSocketIO({
    connection: SocketIO(process.env.VUE_APP_SOCKET_URL, {
      query: `token=${localStorage.getItem('token')}`
    }),
  })
)

export default {
  name: 'MainContainer',
  components: {
    'navbar': Navbar
  },
  mounted() {
    this.getCurrentUser()
  },
  methods: {
    ...mapActions({
      getCurrentUser: 'user/getCurrentUser',
      logout: 'user/logout'
    })
  },
  sockets: {
    authError() {
      this.logout()
      this.$router.push({name: 'Login'})
    }
  }
}
</script>
