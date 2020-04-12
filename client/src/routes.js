import {Home} from 'components'
import {Register} from 'app/auth/components'

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
]