import {Component} from 'react'

import Cookies from 'js-cookie'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    checked: true,
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken)
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeChecked = () => {
    this.setState(ps => ({checked: !ps.checked}))
  }

  renderUserName = () => {
    const {username} = this.state
    return (
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </div>
    )
  }

  renderPassword = () => {
    const {password, checked} = this.state
    return (
      <div>
        <label htmlFor="password">Password</label>
        {checked && (
          <input
            type="password"
            id="password"
            value={password}
            onChange={this.onChangePassword}
          />
        )}
        {!checked && (
          <input
            type="text"
            id="password"
            value={password}
            onChange={this.onChangePassword}
          />
        )}
      </div>
    )
  }

  renderCheckBox = () => {
    const {checked} = this.state
    return (
      <div>
        <input
          id="showPassword"
          type="checkbox"
          value={checked}
          onClick={this.onChangeChecked}
        />
        <label htmlFor="showPassword">Show Password</label>
      </div>
    )
  }

  render() {
    const {errorMsg, showSubmitError} = this.state
    return (
      <div>
        <img
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
        <form onSubmit={this.submitForm}>
          <div>{this.renderUserName()}</div>
          <div>{this.renderPassword()}</div>
          <div>{this.renderCheckBox()}</div>
          <button type="submit">Login</button>
          {showSubmitError && <p>*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginRoute
