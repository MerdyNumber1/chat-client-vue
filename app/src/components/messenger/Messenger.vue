<template>
  <div class="chat__main d-flex justify-content-center">
    <div class="chat__container w-100" v-if="true">
      <div class="chat__wrapper" ref="chat">
        <div class="chat__box" ref="messages">
          <message
            v-for="(message, i) in messages"
            :key="`msg-${i}`"
            :message="message"
            :user="user"
            @selfMessageMounted="scrollToBottom"
            @messageMounted="handleScroll"
          />
        </div>
      </div>
      <b-input-group>
        <b-form-input
          class="chat__input"
          placeholder="Введите сообщение..."
          style="height: 45px;"
          v-model="textMessage"
          trim
          @keyup.enter.native="handleSendMessage"
        />
        <b-input-group-append>
          <b-button
            class="chat__submit"
            @click="handleSendMessage"
            variant="primary"
            type="submit"
          >
            Отправить
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    <b-spinner v-else
               style="width: 3rem; height: 3rem;"
               class="mt-4"
    />
  </div>
</template>

<script>
import Message from "./Message"
import {mapState} from 'vuex'
import Validator from 'validatorjs'
import moment from 'moment'

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
  mounted() {
    this.$axios.get('/messages')
      .then(res => {
        res.data.forEach(msg => {
          this.handleReceiveMessage({
            ...msg,
            name: msg.user.name,
            time: msg.createdAt
          })
          this.scrollToBottom()
        })
      })
  },
  sockets: {
    connect() {
      this.socketConnected = true
    },
    message(msg) {
      this.handleReceiveMessage(msg)
    }
  },
  methods: {
    handleSendMessage() {
      const isValid = new Validator({
        message: this.textMessage
      }, {
        'message': 'required|max:256'
      })
      if(isValid.passes()) {
        this.$socket.emit('message', this.textMessage)
        this.textMessage = ''
      }
    },
    handleReceiveMessage(msg) {
      this.messages.push({
        text: msg.text,
        name: msg.name,
        time: msg.time ? moment(msg.time).format('HH:mm') : moment().format('HH:mm')
      })
    },
    handleScroll(messageHeight = 0, wrap = this.$refs.chat, scrollElement = this.$refs.messages) {
      if((wrap.scrollTop + wrap.offsetHeight + messageHeight + 10) === scrollElement.scrollHeight) wrap.scrollTop = scrollElement.scrollHeight
    },
    scrollToBottom(wrap = this.$refs.chat, scrollElement = this.$refs.messages) {
      wrap.scrollTop = scrollElement.scrollHeight
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
  &__wrapper {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
  &__box {
    width: 100%;
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
