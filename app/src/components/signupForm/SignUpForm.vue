<template>
  <div class="signup">
    <b-alert :show="!!error" variant="danger">{{error}}</b-alert>

    <!--FORM OF REGISTRATION-->
    <b-form class="signup-form" v-if="!isRegistered">
      <b-form-group
        id="group-email"
        label="Ваш email:"
        label-for="email"
      >
        <b-form-input
          id="email"
          type="email"
          required
          placeholder="Введите Email"
          v-model="registerData.email"
        />
      </b-form-group>

      <b-form-group id="group-name" label="Ваше имя:" label-for="name">
        <b-form-input
          id="name"
          required
          placeholder="Ваше имя"
          v-model="registerData.name"
        />
      </b-form-group>

      <b-form-group id="group-password" label="Пароль:" label-for="password">
        <b-form-input
          id="password"
          type="password"
          required
          placeholder="Пароль"
          v-model="registerData.password"
        />
      </b-form-group>

      <b-button class="col-12"
                type="submit"
                variant="primary"
                @click.prevent="handleRegister"
                :disabled="isSending"
      >Зарегистрироваться</b-button>
    </b-form>

    <!--FORM OF CONFIRM EMAIL-->
    <b-form class="confirm-form" v-if="isRegistered">
      <b-form-group
        id="group-confirm-email"
        label="Ваш email:"
        label-for="email"
        v-show="!registerData.email"
      >
        <b-form-input
          id="email"
          type="email"
          required
          placeholder="Введите Email"
          v-model="registerData.email"
        />
      </b-form-group>

      <b-form-group
        id="group-confirm-code"
        label="Код подтверждения, отправленный на ваш email:"
        label-for="code"
      >
        <b-form-input
          id="code"
          required
          placeholder="Код подтверждения"
          v-model="confirmData.code"
        />
      </b-form-group>

      <b-button class="col-12"
                type="submit"
                variant="primary"
                @click.prevent="handleConfirm"
                :disabled="isSending"
      >Подтвердить</b-button>
    </b-form>

    <p class="text-center mt-2">или <b-link :to="{name: 'Login'}">Войти</b-link></p>

    <!--MODAL-->
    <b-modal id="confirmed-popup"
             title="Регистрация завершена"
    >Через {{remainTimeBeforeRedirect}} секунд вы будете перемещены на страницу авторизации</b-modal>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
const Validator = require('validatorjs')

export default {
  name: 'SignUpForm',
  data() {
    return {
      error: '',
      registerData: {
        name: '',
        email: '',
        password: ''
      },
      confirmData: {
        code: '',
      },
      isRegistered: false,
      isSending: false,
      remainTimeBeforeRedirect: 5
    }
  },
  mounted() {
    if(this.initConfirmation()) {
      this.registerData.email = this.localStoredEmail
      this.isRegistered = this.localStoredIsRegistered
    }
  },
  methods: {
    async handleRegister() {
      const isValid = new Validator({
        name: this.registerData.name,
        password: this.registerData.password,
        email: this.registerData.email,
      }, {
        'name': 'required|min:3|max:16',
        'email': 'required|email',
        'password': 'required|min:6|max:32'
      })

      if(isValid.passes()) {
        this.error = ''
        this.isSending = true

        try {
          await this.register(this.registerData)
          this.isRegistered = true
        } catch(err) {
          this.error = err.error
        }
        this.isSending = false
      } else {
        this.error = isValid.errors.first('email') ||
          isValid.errors.first('name') ||
          isValid.errors.first('password')
      }
    },
    async handleConfirm() {
      const isValid = new Validator({
        code: this.confirmData.code,
        email: this.registerData.email,
      }, {
        'email': 'required|email',
        'code': 'required|integer|min:1000|max:9999'
      })

      if(isValid.passes()) {
        this.isSending = true

        try {
          await this.confirmRegistration({
            code: this.confirmData.code,
            email: this.registerData.email
          })
          this.$bvModal.show('confirmed-popup')
          setInterval(() => this.remainTimeBeforeRedirect--, 1000)
          setTimeout(() => {
            this.$router.push({name: 'Login'})
          }, 2000)
        } catch(err) {
          this.error = err.error
        }
        this.isSending = false

      } else {
        this.error = isValid.errors.first('email') ||
          isValid.errors.first('code')
      }
    },
    ...mapActions({
      register: 'user/register',
      confirmRegistration: 'user/confirmRegistration',
      initConfirmation: 'user/initConfirmation'
    })
  },
  computed: {
    localStoredIsRegistered: state => state.user.confirmationOfRegistration,
    localStoredEmail: state => state.user.data.email
  }
}
</script>

<style scoped lang="scss">
  .signup-form {
    width: 100%;
  }
</style>
