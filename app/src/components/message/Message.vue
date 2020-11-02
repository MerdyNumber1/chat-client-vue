<template>
  <b-card :class="['message', self && 'message_self']">
      <b-row>
        <div class="message__name">Russell</div>
        <div class="message__text">Hello, I'm Russell. How can I help you today?</div>
        <div class="message__time">08:55</div>
      </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'Message',
  props: {
    self: Boolean
  }
}
</script>

<style lang="scss">
.message {
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 90%;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 40px;
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
    width: 80%;
    margin: 0 20px;
  }
}
</style>
