import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom"
import {Routing} from "app/routing"
import store from 'store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
