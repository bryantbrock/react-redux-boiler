import {Home} from 'components'
import {Register, Login} from 'app/auth'
import {Dashboard} from 'app/dashboard'

export const routes = [
  {
    path: "/home",
    component: Home,
    routes: []
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
    path: "/dashboard",
    component: Dashboard,
  },
]