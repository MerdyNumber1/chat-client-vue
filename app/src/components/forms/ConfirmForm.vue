<template>
  <div class="confirm">
    <!--FORM OF CONFIRM EMAIL-->
    <b-alert :show="!!error" variant="danger">{{error}}</b-alert>
    <b-form class="confirm-form">
      <b-button class="col-12"
                type="submit"
                variant="primary"
                @click.prevent="handleConfirm"
                :disabled="isSending"
      >Подтвердить</b-button>
    </b-form>

    <!--MODAL-->
    <b-modal id="confirmed-popup"
             title="Регистрация завершена"
    >Через 5 секунд вы будете перемещены на страницу авторизации</b-modal>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Validator from 'validatorjs'

export default {
  name: 'ConfirmForm',
  props: {
    email: String,
    code: Number,
  },
  data() {
    return {
      isSending: false,
      error: ''
    }
  },
  mounted() {
    const isValid = new Validator({
      email: this.email,
      code: this.code
    }, {
      'email': 'required|email',
      'code': 'required|integer|min:1000|max:9999'
    })

    if(!isValid.passes()) {
      this.$router.push({name: 'SignUp'})
    }
  },
  methods: {
    handleConfirm() {
      if(!this.error) {
        this.confirm({
          email: this.email,
          code: this.code
        }).then(() => {
          this.$bvModal.show('confirmed-popup')
          setTimeout(() => {
            this.$router.push({name: 'Login'})
          }, 5000)
        })
          .catch(err => {
            this.error = err.error
          })
      }
    },
    ...mapActions({
      confirm: 'user/confirm'
    })
  }
}
</script>
