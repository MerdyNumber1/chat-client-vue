// pages
const Chat = () => import('@/views/chat/Chat')
const Login = () => import('@/views/login/Login')
const SignUp = () => import('@/views/signup/SignUp')
//containers
const AuthContainer = () => import('@/containers/AuthContainer')
const MainContainer = () => import('@/containers/MainContainer')


export default [
  {
    path: '/',
    name: 'MainContainer',
    component: MainContainer,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'Chat',
        component: Chat
      }
    ]
  },
  {
    path: '/auth',
    name: 'AuthContainer',
    component: AuthContainer,
    redirect: {name: 'SignUp'},
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'signup',
        name: 'SignUp',
        component: SignUp
      }
    ]
  },
]
