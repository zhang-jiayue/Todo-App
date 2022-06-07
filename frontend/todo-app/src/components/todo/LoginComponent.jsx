import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js';
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'jiayue',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    // this.handleUserNameChange = this.handleUserNameChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  //   handleUserNameChange(event) {
  //     // a synthetic event
  //     this.setState({
  //       username: event.target.value,
  //     });
  //   }

  //   handlePasswordChange(event) {
  //     // a synthetic event
  //     this.setState({
  //       password: event.target.value,
  //     });
  //   }
  handleChange(event) {
    // a synthetic event
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClicked() {
    // if (this.state.username === 'jiayue' && this.state.password === 'dummy') {
    //   AuthenticationService.registerSuccessfulLogin(
    //     this.state.username,
    //     this.state.password
    //   );
    //   this.props.navigate(`/welcome/${this.state.username}`);
    //   //   this.setState({
    //   //     showSuccessMessage: true,
    //   //     hasLoginFailed: false,
    //   //   });
    // } else {
    //   this.setState({
    //     showSuccessMessage: false,
    //     hasLoginFailed: true,
    //   });
    // }
    // AuthenticationService.executeBasicAuthenticationService(
    //   this.state.username,
    //   this.state.password
    // )
    //   .then(() => {
    //     AuthenticationService.registerSuccessfulLogin(
    //       this.state.username,
    //       this.state.password
    //     );
    //     this.props.navigate(`/welcome/${this.state.username}`);
    //   })
    //   .catch(() => {
    //     this.setState({ showSuccessMessage: false });
    //     this.setState({ hasLoginFailed: true });
    //   });
    AuthenticationService.executeJwtAuthenticationService(
      this.state.username,
      this.state.password
    )
      .then((response) => {
        AuthenticationService.registerSuccessfulLoginForJwt(
          this.state.username,
          response.data.token
        );
        this.props.navigate(`/welcome/${this.state.username}`);
      })
      .catch(() => {
        this.setState({ showSuccessMessage: false });
        this.setState({ hasLoginFailed: true });
      });
  }

  render() {
    return (
      // in JSX you cannot return multiple elements back
      <div>
        <h1>Login</h1>
        <div className="container">
          {/* <ShowInvalidCredentials
          hasLoginFailed={this.state.hasLoginFailed}
        ></ShowInvalidCredentials> */}
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning"> Invalid Credentials</div>
          )}
          {/* <ShowLoginSuccessMessage
          showSuccessMessage={this.state.showSuccessMessage}
        ></ShowLoginSuccessMessage> */}
          Login Name:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          Password:{' '}
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="btn" onClick={this.loginClicked}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
export default LoginComponent;
