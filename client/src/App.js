import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Switch} from "react-router-dom"
import {routes} from 'routes'
import {RouteWithSubRoutes} from 'components'
import store from 'store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
