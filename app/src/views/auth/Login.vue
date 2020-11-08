<template>
  <div class="login">
    <login-form />
  </div>
</template>

<script>
import LoginForm from '@/components/forms/LoginForm'

export default {
    name: 'Login',
    metaInfo: {
        title: 'Вход'
    },
    components: {
      'login-form': LoginForm
    }
}
</script>

<style lang="">

</style>
