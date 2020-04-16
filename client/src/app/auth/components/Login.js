import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from 'app/auth/actions'
import {clearErrors} from 'app/errors/actions'
import {Form} from 'components/form'
import {loginFields} from 'app/auth/constants'

export class Login extends Component {
  onSubmit = async data => {
    await this.props.login(data)

     // Redirect if registry success
     if (this.props.status === 200 && this.props.redirect) {
      this.props.history.push('/dashboard')
      this.props.clearErrors()
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
            path: 'dashboard',
          }} />
      </div>
    )
  }
}

const selector = state => ({
  status: state.errors.status,
  redirect: state.errors.redirect,
})

export default connect(selector, {login, clearErrors})(Login)
