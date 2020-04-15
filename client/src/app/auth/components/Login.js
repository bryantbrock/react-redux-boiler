import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from 'app/auth/actions'
import {Form} from 'components/form'
import {loginFields} from 'app/auth/constants'

export class Login extends Component {
  onSubmit = data => {
    this.props.login(data)
  }
  render() {
    return (
      <div>
        <h2>Login</h2>
        <Form
          onSubmit={this.onSubmit}
          fields={loginFields}
          button={{
            value: 'login',
            color: 'primary',
            path: 'dashboard',
          }} />
      </div>
    )
  }
}

export default connect(null, {login})(Login)
