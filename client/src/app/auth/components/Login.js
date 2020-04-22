import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from 'app/auth/actions'
import {clearErrors} from 'app/errors/actions'
import {Form} from 'components/form'
import {loginFields} from 'app/auth/constants'
import {redirectOnSuccess} from 'app/auth/selectors'

const authEnhancer = connect(
  state => ({
    redirect: redirectOnSuccess(state),
  }),
  {
    login,
    clearErrors,
  }
)

export class Login extends Component {
  onSubmit = async (data, path) => {
    const {login, clearErrors, history} = this.props

    await login(data)

     if (this.props.redirect) {
      history.push(`/${path}`)
      clearErrors()
    }
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
            path: '/login/settings',
          }} />
      </div>
    )
  }
}

export default authEnhancer(Login)
