<template>
  <b-container>
    <router-view />
  </b-container>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'MainContainer',
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
    }
  }
}
</script>
