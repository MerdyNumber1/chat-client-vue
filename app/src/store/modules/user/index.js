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
  },
  actions: {
    register({commit, state}, payload) {
      return axios.post('user', {
        name: payload.name,
        email: payload.email,
        password: payload.password
      })
    },
    confirm({commit, state}, payload) {
      return axios.post('user/confirm', {
        email: payload.email,
        code: payload.code
      })
    },
    login({commit, state}, payload) {
      return axios.post('user/auth', {
        name: payload.name,
        password: payload.password
      })
    }
  }
}
