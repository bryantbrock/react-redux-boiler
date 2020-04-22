import {Home} from 'components'
import {LoginForm} from 'components/material'
import {Register, Login} from 'app/auth'
import {Dashboard} from 'app/dashboard'

export const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/sign-up",
    component: Register,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/material-login",
    component: LoginForm,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
]