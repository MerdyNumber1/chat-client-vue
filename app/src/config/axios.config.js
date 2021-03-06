import axios from 'axios'
import store from '@/store'
import router from '@/router'

axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'

const token = localStorage.getItem('token')

if(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

axios.interceptors.response.use(undefined, (err) => {
    if (err.response.status === 401) {
      store.dispatch('user/logout')
      router.push({name: 'Login'})
    }
    return Promise.reject(err.response.data)
})

export default axios
