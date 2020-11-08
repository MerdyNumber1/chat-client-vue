<template>
  <div class="signup">
    <b-alert :show="!!error" variant="danger">{{error}}</b-alert>

    <!--FORM OF REGISTRATION-->
    <b-form class="signup-form">
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
          trim
        />
      </b-form-group>

      <b-form-group id="group-name" label="Ваше имя:" label-for="name">
        <b-form-input
          id="name"
          required
          placeholder="Ваше имя"
          v-model="registerData.name"
          trim
        />
      </b-form-group>

      <b-form-group id="group-password" label="Пароль:" label-for="password">
        <b-form-input
          id="password"
          type="password"
          required
          placeholder="Пароль"
          v-model="registerData.password"
          trim
        />
      </b-form-group>

      <b-button class="col-12"
                type="submit"
                variant="primary"
                @click.prevent="handleRegister"
                :disabled="isSending"
      >Зарегистрироваться</b-button>
    </b-form>
    <p class="text-center mt-2">или <b-link :to="{name: 'Login'}">Войти</b-link></p>

    <!--MODAL-->
    <b-modal id="confirm-popup" hide-footer title="Проверьте почту">
      На вашу почту было отправлено письмо с подтверждением регистрации
    </b-modal>
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
      isSending: false
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
          this.registerData.name = ''
          this.registerData.password = ''
          this.registerData.email = ''
          this.$bvModal.show('confirm-popup')
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
    ...mapActions({
      register: 'user/register',
    })
  },
}
</script>

<style scoped lang="scss">
  .signup-form {
    width: 100%;
  }
</style>
