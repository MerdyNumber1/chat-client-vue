<template>
  <div id="app">
    <router-view/>
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
