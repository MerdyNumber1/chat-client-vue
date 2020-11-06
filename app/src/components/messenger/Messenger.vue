<template>
  <div class="chat__main d-flex justify-content-center">
    <div class="chat__container w-100" v-if="true">
      <div class="chat__box chatContainerScroll">
        <message
          v-for="(message, i) in messages"
          :key="`msg-${i}`"
          :message="message"
        />
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
import Message from "@/components/message/Message";
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
        res.forEach(msg => {
          this.messages.push({
            ...msg,
            self: msg.name === this.user.name,
            time: moment(msg.createdAt).format('h:mm')
          })
        })
      })
  },
  sockets: {
    connect() {
      this.socketConnected = true
    },
    message(msg) {
      this.messages.push({
        ...msg,
        self: msg.name === this.user.name,
        time: moment(msg.time).format('h:mm')
      })
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
        this.messages.push({
          text: this.textMessage,
          self: true,
          name: this.user.name,
          time: moment().format('h:mm')
        })
        this.textMessage = ''
      }
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
