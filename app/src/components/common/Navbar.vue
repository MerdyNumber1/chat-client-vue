<template>
  <b-navbar fixed="top" type="dark" variant="primary">
    <b-container>
      <b-navbar-brand href="#">Chat</b-navbar-brand>
      <b-navbar-nav class="ml-auto d-flex justify-content-end align-items-center">
        <b-nav-item-dropdown :text="user.name" right>
          <b-dropdown-item @click="handleLogout">Выйти</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'Navbar',
  computed: {
    ...mapState({
      user: state => state.user.data
    })
  },
  methods: {
    handleLogout() {
      this.logout()
      this.$router.push({name: 'Login'})
    },
    ...mapActions({
      logout: 'user/logout'
    })
  }
}
</script>
