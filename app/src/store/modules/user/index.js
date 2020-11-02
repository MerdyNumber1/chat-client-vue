import axios from '@/config/axios.config'
import setJsonLocalStorage from "@/utils/setLocalStorage";
import getJsonLocalStorage from "@/utils/getLocalStorage";

export default {
  namespaced: true,
  state: {
    token: null,
    data: {
      email: '',
      name: '',
    },
    confirmationOfRegistration: false,
  },
  actions: {
    register({commit, state}, payload) {
      return axios.post('user', {
        name: payload.name,
        email: payload.email,
        password: payload.password
      }).then(() => setJsonLocalStorage('confirmRegistration', {
        email: payload.email
      }))
    },
    confirmRegistration({commit, state}, payload) {
      return axios.post('user/confirm', {
        email: payload.email,
        code: payload.code
      })
    },
    initConfirmation({commit}) {
      const localStoreState = getJsonLocalStorage('confirmRegistration')
      if(localStoreState.email) {
        commit('setupConfirmation', localStoreState.email)
        return true
      }
    }
  },
  mutations: {
    setupConfirmation(state, payload) {
      state.confirmationOfRegistration = true
      state.data.email = payload
    }
  }
}
