<template>
  <div class="chat__container">
    <div class="chat__box chatContainerScroll">
      <message />
    </div>
    <b-form-row class="w-100">
      <b-form-textarea
        class="chat__input"
        v-model="text"
        placeholder="Enter something..."
        rows="1"
      />
      <b-button class="ml-2 chat__submit">Отправить</b-button>
    </b-form-row>
  </div>
</template>

<script>
import Message from "@/components/message/Message";

export default {
  name: 'Messenger',
  components: {
    'message': Message
  }
}
</script>

<style lang="scss">
.chat {
  &__container {
    height: 90vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  &__box {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }
  &__input {
    width: 85%;
  }
  &__submit {
    height: 45px;
  }
}
</style>
