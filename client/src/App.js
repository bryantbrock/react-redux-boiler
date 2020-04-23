import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Switch} from "react-router-dom"
import {RouteWithSubRoutes, routes} from 'app/routing'
import store from 'store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
