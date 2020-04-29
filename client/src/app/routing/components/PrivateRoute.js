import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const enhanceRouting = connect(
  state => ({
    isAuthenticated: state.auth.isAuthenticated,
  }),
)

class PrivateRoute extends React.Component {
  render() {
    const {Component, isAuthenticated} = this.props

    return (
      <Route render={() => (
        isAuthenticated
          ? <Component />
          : <Redirect to='/login' />
      )} />
    )
  }
}

export default enhanceRouting(PrivateRoute)