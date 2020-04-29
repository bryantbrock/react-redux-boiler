import React, {Component} from 'react'
import {connect} from 'react-redux'
import {submitAuthForm} from 'app/auth/state'
import {clearErrors} from 'app/errors/state'
import {loginFields} from 'app/auth/constants'
import {redirectOnSuccess} from 'app/auth/selectors'
import {Header, Anchor, Button} from 'components'
import {Form} from 'modules/form'
import {toObj} from 'utils/misc'
import 'resources/css/main.css'

const authEnhancer = connect(
  state => ({
    redirect: redirectOnSuccess(state),
  }),
  {
    submitAuthForm,
    clearErrors,
  }
)

class Login extends Component {
  onSubmit = async (data, path) => {
    const {submitAuthForm, clearErrors, history} = this.props

    clearErrors()
    await submitAuthForm(data, 'auth/login')

     if (this.props.redirect) {
      history.push(`/${path}`)
      clearErrors()
    }
  }
  render() {
    const anchor = {path: '/sign-up', value: "Don't have an Account? Sign up"}
    const button = {value: 'Login', path: 'dashboard'}
    const prepSubmit = data => this.onSubmit(data, button.path)

    return (
      <div className="login-root">
        <Header>Login</Header>
        <Form
          onSubmit={prepSubmit}
          fields={loginFields}>
          <Anchor 
            path={anchor.path}
            value={anchor.value} />
          <Button
            value={button.value}
            path={button.path}
            onClick={prepSubmit}/>
        </Form>
      </div>
    )
  }
}

export default authEnhancer(Login)
