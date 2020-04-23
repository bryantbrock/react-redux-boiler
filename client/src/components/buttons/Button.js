import React, {Component} from 'react'
import 'resources/css/main.css'

export class Button extends Component {
  render() {
    const {color, value} = this.props

    return (
      <button
        className="btn"
        onClick={this.props.onClick}
        type="submit"
        color={color}>
          <span>{value}</span>
      </button>
    )
  }
}

export default Button
