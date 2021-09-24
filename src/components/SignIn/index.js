import {Component} from 'react'

import './index.css'

class SignIn extends Component {
  state = {
    username: '',
    password: '',
    notMatched: false,
    isForgetPassword: false,
    reEnterPassword: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    console.log(history)
    history.replace('/home')
  }

  submitForm = event => {
    event.preventDefault()
    const {username, password} = this.state
    if ((username && password) !== '') {
      const isPasswordMatch = localStorage.getItem(username)
      const parsedData = JSON.parse(isPasswordMatch)
      console.log(parsedData)
      console.log(password)
      console.log(parsedData === password)
      if (parsedData === password) {
        this.setState({notMatched: false})
        this.onSubmitSuccess()
      } else {
        this.setState({notMatched: true})
      }
    } else {
      this.setState({notMatched: true})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickForgetPassword = () => {
    this.setState({isForgetPassword: true})
  }

  onChangeReEnterPassword = event => {
    this.setState({reEnterPassword: event.target.value})
  }

  onClickConformPassword = () => {
    const {username, reEnterPassword} = this.state
    this.setState({
      notMatched: false,
      isForgetPassword: false,
      password: reEnterPassword,
      reEnterPassword: '',
    })
    localStorage.setItem(username, JSON.stringify(reEnterPassword))
  }

  renderForgetPassword = () => {
    const {reEnterPassword} = this.state
    return (
      <>
        <label className="input-label" htmlFor="reEnterPassword">
          SET PASSWORD
        </label>
        <input
          type="password"
          id="reEnterPassword"
          className="password-input-filed"
          value={reEnterPassword}
          onChange={this.onChangeReEnterPassword}
        />
        <button
          type="button"
          onClick={this.onClickConformPassword}
          className="conform_button"
        >
          CONFORM
        </button>
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {notMatched, isForgetPassword} = this.state

    return (
      <div className="bg-container">
        <h1> Welcome!!! To Currency Conversion App</h1>
        <p>Sign In to Continue</p>
        <form className="sign-in-form-container" onSubmit={this.submitForm}>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
          {notMatched && <p className="invalid"> Invalid UserName/Password</p>}
          {isForgetPassword && this.renderForgetPassword()}
          <p className="forgetPassword" onClick={this.onClickForgetPassword}>
            forget password?
          </p>
        </form>
      </div>
    )
  }
}

export default SignIn
