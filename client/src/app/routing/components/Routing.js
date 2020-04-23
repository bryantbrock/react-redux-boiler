import React, {Component} from 'react'
import {Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {RouteWithSubRoutes, routes, PrivateRoute} from 'app/routing'

const enhanceRouting = connect(
  state => ({
    isAuthenticated: state.auth.isAuthenticated,
  })
)

export class Routing extends Component {
  render() {
    const {isAuthenticated} = this.props
    
    return (
      <Switch>
        {routes.map((route, i) => route.private 
          ? <PrivateRoute 
              key={i}
              component={route.component} 
              isAuthenticated={isAuthenticated}
              {...route}/>
          : <RouteWithSubRoutes key={i} {...route} />
        )}
      </Switch>
    )
  }
}

export default enhanceRouting(Routing)
