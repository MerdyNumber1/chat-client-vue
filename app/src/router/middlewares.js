import store from '@/store'

export function authMiddleware (to, from, next) {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next({name: 'Login'})
  }
  next()
}
