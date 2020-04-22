import {Home} from 'components'
import {Register, Login, MaterialLogin} from 'app/auth'
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
    component: MaterialLogin,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
]