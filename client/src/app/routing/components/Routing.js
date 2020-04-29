import React, {Component} from 'react'
import {Switch} from 'react-router-dom'
import {RouteWithSubRoutes, routes, PrivateRoute} from 'app/routing'

export class Routing extends Component {
  render() {
    return (
      <Switch>
        {routes.map((route, i) => route.private 
          ? <PrivateRoute 
              key={i}
              Component={route.component} 
              isAuthenticated={this.props.isAuthenticated}
              {...route}/>
          : <RouteWithSubRoutes key={i} {...route} />
        )}
      </Switch>
    )
  }
}

export default Routing
