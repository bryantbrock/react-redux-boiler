import React from 'react'
import {Route, Redirect} from 'react-router-dom'


export default function PrivateRoute({component: Component, ...opts}) {
  return (
    <Route {...opts} render={(props) => (
      opts.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
}