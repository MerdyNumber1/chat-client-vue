<template>
  <b-container class="mt-5">
    <navbar />
    <router-view />
  </b-container>
</template>

<script>
import {mapActions} from 'vuex'
import Navbar from '@/components/common/Navbar'

export default {
  name: 'MainContainer',
  components: {
    'navbar': Navbar
  },
  mounted() {
    this.getCurrentUser()
    this.$socket.io.opts.query = {token : localStorage.getItem('token')}
    this.$socket.open()
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
