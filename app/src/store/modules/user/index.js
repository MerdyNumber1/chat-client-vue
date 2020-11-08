import axios from '@/config/axios.config'
import router from '@/router'
import setJsonLocalStorage from "@/utils/setLocalStorage"
import getJsonLocalStorage from "@/utils/getLocalStorage"

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || null,
    data: {
      email: '',
      name: '',
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token
    }
  },
  actions: {
    register({commit, state}, payload) {
      return axios.post('users', {
        name: payload.name,
        email: payload.email,
        password: payload.password
      })
    },
    confirm({commit, state}, payload) {
      return axios.post('users/confirm', {
        email: payload.email,
        code: payload.code
      })
    },
    login({commit, state}, payload) {
      return axios.post('users/auth', {
        email: payload.email,
        password: payload.password
      }).then(res => {
        localStorage.setItem('token', res.data.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
        commit('authSuccess', {
          token: res.data.token,
          name: payload.name
        })
      })
    },
    logout({commit, state}, payload) {
      localStorage.removeItem('token')
      axios.defaults.headers.common['Authorization'] = null
      commit('authError')
    },
    getCurrentUser({commit}) {
      return axios.get('users/me')
        .then(res => {
          commit('setCurrentUser', res.data)
        })
    }
  },
  mutations: {
    authSuccess(state, payload) {
      state.token = payload.token
      state.data.name = payload.name
    },
    authError(state) {
      state.token = null
      state.data.name = null
    },
    setCurrentUser(state, payload) {
      state.data.name = payload.name
      state.data.email = payload.email
    }
  }
}
