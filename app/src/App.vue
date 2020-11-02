<template>
  <div id="app">
    <router-view class="mt-5"/>
  </div>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Chat',
    htmlAttrs: {
        lang: 'en'
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/main';
</style>
