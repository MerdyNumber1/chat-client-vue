<template>
  <div class="signup">
    <signup-form />
  </div>
</template>

<script>
import {SignUpForm} from '@/components'

export default {
  name: 'SignUp',
  metaInfo: {
    title: 'Вход'
  },
  components: {
    'signup-form': SignUpForm
  }
}
</script>

<style></style>
