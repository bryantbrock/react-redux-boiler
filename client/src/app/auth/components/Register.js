import React, {Component} from 'react'
import {connect} from 'react-redux'
import {register} from 'app/auth/actions'
import {Form} from 'components/form'
import {registerFields} from 'app/auth/constants'

export class Register extends Component {
  onSubmit = data => {
    this.props.register(data)
  }
  render() {
    
    return (
      <div>
        <h2>Sign Up</h2>
        <Form
          onSubmit={this.onSubmit}
          fields={registerFields}
          button={{
            value: 'Sign Up',
            color: 'primary',
            path: 'dashboard',
          }} /> 
      </div>
    )
  }
}

export default connect(null, {register})(Register)
