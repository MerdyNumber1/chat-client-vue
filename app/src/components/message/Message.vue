<template>
  <b-card :class="['message', message.self && 'message_self']">
      <b-row class="align-items-center">
        <div class="message__name">{{ message.name }}</div>
        <div class="message__text">{{ message.text }}</div>
        <div class="message__time">{{ message.time }}</div>
      </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'Message',
  props: {
    self: Boolean,
    message: Object
  }
}
</script>

<style lang="scss">
.message {
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 95%;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10px;
  padding: 0 10px;
  &_self {
    justify-content: flex-end;
    align-self: flex-end;
    background: #f7f7f7;
  }
  &__name {
    font-weight: bold;
    font-size: 18px;
  }
  &__time {
    font-size: 14px;
  }
  &__text {
    width: 85%;
    margin: 0 20px;
  }
}
</style>
