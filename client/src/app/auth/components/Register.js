import React, {Component} from 'react'
import {connect} from 'react-redux'
import {registerUser} from 'app/auth/actions'

export class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit = (e) => {
    e.preventDefault()
    const {email, password} = this.state
    const user = {
      email,
      password,
    }

    this.props.registerUser(user)
  }
  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.onSubmit}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="example@mail.com" />
          <label>Password</label>
          <input
            type="text"
            name="password"
            placeholder="Password" />
          <label>Confirm Password</label>
          <input
            type="text"
            name="confirmPassword"
            placeholder="..." />

          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {registerUser})(Register)
