import React, {Component} from 'react'
import {connect} from 'react-redux'
import {registerUser} from 'app/auth/actions'

export class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit = (e) => {
    e.preventDefault()
    const {email, password, name} = this.state

    const user = {
      email,
      password,
      name,
    }
    // Still need to validate submission 
    // before sending it to the server
    this.props.registerUser(user)
  }
  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.onSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onChange}
            name="name" />
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.onChange}
            name="email"/>
          <label>Password</label>
          <input
            type="text"
            value={this.state.password}
            onChange={this.onChange}
            name="password"/>
          <label>Confirm Password</label>
          <input
            type="text"
            value={this.state.confirmPassword}
            onChange={this.onChange}
            name="confirmPassword"/>

          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {registerUser})(Register)
