import React, {Component} from 'react'
import {connect} from 'react-redux'
import {submitAuthForm} from 'app/auth/state'
import {clearErrors} from 'app/errors/state'
import {Form} from 'modules/form'
import {loginFields} from 'app/auth/constants'
import {redirectOnSuccess} from 'app/auth/selectors'

const authEnhancer = connect(
  state => ({
    redirect: redirectOnSuccess(state),
  }),
  {
    submitAuthForm,
    clearErrors,
  }
)

export class Login extends Component {
  onSubmit = async (data, path) => {
    const {submitAuthForm, clearErrors, history} = this.props

    await submitAuthForm(data, 'auth/login')

     if (this.props.redirect) {
      history.push(`/${path}`)
      clearErrors()
    }
  }
  render() {
    return (
      <div className={classes.root}>
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
const classes = {
  root: {
    height: '100vh',
    margin: 'auto',
    width: '40%', 
    padding: '100px 0', 
    display: 'flex',
    justifyContent: 'center',
    background: '#FFF'
  }
}

export default authEnhancer(Login)
