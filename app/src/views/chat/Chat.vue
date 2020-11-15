<template>
  <messenger />
</template>

<script>
import Messenger from "@/components/messenger/Messenger";

export default {
  name: 'Chat',
  metaInfo: {
    title: 'Main'
  },
  components: {
    'messenger': Messenger
  }
}
</script>
