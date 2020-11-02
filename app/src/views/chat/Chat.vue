<template>
  <messenger />
</template>

<script>
import Messenger from "@/components/messenger/Messenger";

export default {
  name: 'Chat',
  metaInfo: {
    title: 'Chat'
  },
  components: {
    'messenger': Messenger
  }
}
</script>
