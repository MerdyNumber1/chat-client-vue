// pages
const Chat = () => import('@/views/chat/Chat')
const Login = () => import('@/views/login/Login')
const SignUp = () => import('@/views/signup/SignUp')
const Confirm = () => import('@/views/confirm/Confirm')
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
        component: SignUp,
      },
      {
        path: 'confirm',
        name: 'ConfirmSignUp',
        component: Confirm,
        props: route => ({
          email: route.query.email,
          code: parseInt(route.query.code)
        })
      }
    ]
  },
]
