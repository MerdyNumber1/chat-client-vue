<template>
  <div class="chat__main d-flex justify-content-center">
    <div class="chat__container w-100" v-if="socketConnected">
        <div class="chat__box chatContainerScroll">
          <message />
        </div>
        <b-form-row class="w-100">
          <b-form-textarea
            class="chat__input"
            placeholder="Enter something..."
            rows="1"
            v-model="textMessage"
          />
          <b-button class="ml-2 chat__submit" @click="handleSendMessage">Отправить</b-button>
        </b-form-row>
    </div>
    <b-spinner v-else
               style="width: 3rem; height: 3rem;"
               class="mt-4"
    />
  </div>
</template>

<script>
import Message from "@/components/message/Message";
import {mapState} from 'vuex'

export default {
  name: 'Messenger',
  components: {
    'message': Message
  },
  data() {
    return {
      socketConnected: false,
      messages: [],
      textMessage: ''
    }
  },
  sockets: {
    connect() {
      this.socketConnected = true
    },
    message(msg) {
      this.messages.push(msg)
    }
  },
  methods: {
    handleSendMessage() {
      this.$socket.emit('message', JSON.stringify({
        user: this.user.name,
        message: this.textMessage
      }))
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.data
    })
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
