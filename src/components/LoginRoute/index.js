import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import SavedVideosContext from '../../context/SavedVideosContext'

import {
  LoginContainer,
  FormContainer,
  LoginButton,
  FieldContainer,
  CheckBoxContainer,
  InputContent,
} from './styledComponents'

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
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
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
      <FieldContainer>
        <label htmlFor="username">Username</label>
        <InputContent
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </FieldContainer>
    )
  }

  renderPassword = () => {
    const {password, checked} = this.state
    return (
      <FieldContainer>
        <label htmlFor="password">Password</label>
        {checked && (
          <InputContent
            type="password"
            id="password"
            value={password}
            onChange={this.onChangePassword}
            placeholder="Password"
          />
        )}
        {!checked && (
          <InputContent
            type="text"
            id="password"
            value={password}
            onChange={this.onChangePassword}
            placeholder="Password"
          />
        )}
      </FieldContainer>
    )
  }

  renderCheckBox = () => {
    const {checked} = this.state
    return (
      <CheckBoxContainer>
        <input
          id="showPassword"
          type="checkbox"
          value={checked}
          onClick={this.onChangeChecked}
        />
        <label htmlFor="showPassword">Show Password</label>
      </CheckBoxContainer>
    )
  }

  render() {
    const {errorMsg, showSubmitError} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <LoginContainer isDarkMode={isDarkTheme}>
              <FormContainer onSubmit={this.submitForm}>
                <img
                  alt="website logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                />
                <div>{this.renderUserName()}</div>
                <div>{this.renderPassword()}</div>
                <div>{this.renderCheckBox()}</div>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <p>*{errorMsg}</p>}
              </FormContainer>
            </LoginContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}

export default LoginRoute
