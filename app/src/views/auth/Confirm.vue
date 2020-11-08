<template>
  <confirm-form :email="email" :code="code" />
</template>

<script>
import ConfirmForm from "@/components/forms/ConfirmForm";

export default {
  name: 'Confirm',
  metaInfo: {
    title: 'Confirm'
  },
  components: {
    'confirm-form': ConfirmForm
  },
  props: {
    email: String,
    code: Number,
  },
}
</script>
