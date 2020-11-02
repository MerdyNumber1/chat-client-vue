<template>
  <b-form class="login-form">
    <b-alert :show="!!error" variant="danger">{{error}}</b-alert>
    <b-form-group id="group-name" label="Ваше имя:" label-for="name">
      <b-form-input
        id="name"
        required
        placeholder="Ваше имя"
        v-model="loginData.name"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="group-password" label="Пароль:" label-for="password">
      <b-form-input
        id="password"
        type="password"
        required
        placeholder="Пароль"
        v-model="loginData.password"
      ></b-form-input>
    </b-form-group>

    <b-button
      class="col-12"
      type="submit"
      variant="primary"
      @click.prevent="handleLogin"
      :disabled="isSending"
    >Войти</b-button>

    <p class="text-center mt-2">или <b-link :to="{name: 'SignUp'}">Зарегистрироваться</b-link></p>
  </b-form>
</template>

<script>
import {mapActions} from 'vuex'
import Validator from 'validatorjs'
import router from "@/router";

export default {
  name: 'LoginForm',
  data() {
    return {
      error: '',
      isSending: false,
      loginData: {
        name: '',
        password: '',
      }
    }
  },
  methods: {
    async handleLogin() {
      const isValid = new Validator({
        name: this.loginData.name,
        password: this.loginData.password
      }, {
        'name': 'required|min:3|max:16',
        'password': 'required|min:6|max:32'
      })

      if(isValid.passes()) {
        this.error = ''
        this.isSending = true
        try {
          let res = await this.login({
            name: this.loginData.name,
            password: this.loginData.password
          })
          this.$router.push({name: 'Chat'})
        } catch (err) {
          this.error = err.error
        }
        this.isSending = false
      } else {
        this.error = isValid.errors.first('name') ||
          isValid.errors.first('password')
      }
    },
    ...mapActions({
      login: 'user/login'
    })
  }
}
</script>


<style scoped lang="scss">
.login-form {
  width: 100%;
}
</style>
