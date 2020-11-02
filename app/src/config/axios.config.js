import axios from 'axios'
import store from '@/store'

axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'

const token = localStorage.getItem('token')
if(token) {
  axios.defaults.headers.common['Authorization'] = token
}

axios.interceptors.response.use(undefined, (err) => {
    if (err.status === 401) {
      store.dispatch('user/logout')
    }
    return Promise.reject(err.response.data)
})

export default axios
