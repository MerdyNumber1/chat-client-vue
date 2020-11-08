<template>
  <div class="signup">
    <signup-form />
  </div>
</template>

<script>
import SignupForm from '@/components/forms/SignupForm'

export default {
  name: 'Signup',
  metaInfo: {
    title: 'Регистрация'
  },
  components: {
    'signup-form': SignupForm
  }
}
</script>

<style></style>
