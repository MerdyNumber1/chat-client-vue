<template>
  <div class="auth-container mt-5">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'AuthContainer'
}
</script>

<style lang="scss">
.auth-container {
  max-width: 500px;
  width: 92%;
  margin: 0 auto;
}
</style>
