import store from '@/store'

export function authMiddleware (to, from, next) {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['user/isLoggedIn']) {
      next()
      return
    }
    next({name: 'Login'})
  } else if(to.matched.some(record => record.meta.noAuth)) {
    if(!store.getters['user/isLoggedIn']) {
      next()
      return
    }
    next({name: 'Chat'})
  } else {
    next()
  }
}
