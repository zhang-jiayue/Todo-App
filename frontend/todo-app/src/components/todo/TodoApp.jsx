import React, { Component } from 'react';
import withNavigation from './WithNavigation';
import withParams from './WithParams';
import AuthenticationService from './AuthenticationService.js';
import { Routes, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
class TodoApp extends Component {
  render() {
    const LoginComponentWithNavigation = withNavigation(LoginComponent);
    const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
    const WelcomeComponentWithParams = withParams(WelcomeComponent);
    return (
      <div className="TodoApp">
        <Router>
          <HeaderComponentWithNavigation />
          <Routes>
            <Route path="/" element={<LoginComponentWithNavigation />} />
            <Route path="/login" element={<LoginComponentWithNavigation />} />
            <Route
              path="/welcome/:name"
              element={
                <AuthenticatedRoute>
                  <WelcomeComponentWithParams />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/todos"
              element={
                <AuthenticatedRoute>
                  <ListTodosComponent />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <AuthenticatedRoute>
                  <LogoutComponent />
                </AuthenticatedRoute>
              }
            />
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}
class HeaderComponent extends Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    console.log(isUserLoggedIn);
    return (
      <header>
        <nav className="navbar  navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="https://zhang-jiayue.github.io" className="navbar-brand">
              My Projects
            </a>
          </div>
          <ul className="navbar-nav">
            <li>
              {isUserLoggedIn && (
                <Link className="nav-link" to="/welcome/jiayue">
                  Home
                </Link>
              )}
            </li>
            <li>
              {isUserLoggedIn && (
                <Link className="nav-link" to="/todos">
                  Todos
                </Link>
              )}
            </li>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li>
              {!isUserLoggedIn && (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
            </li>
            <li>
              {isUserLoggedIn && (
                <Link
                  className="nav-link"
                  to="/logout"
                  onClick={AuthenticationService.logout()}
                >
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

class LogoutComponent extends Component {
  render() {
    return (
      <div>
        <h1>You are logged out</h1>
        <div className="container">Thank you for using our application</div>
      </div>
    );
  }
}
class FooterComponent extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="text-muted">All Rights Reseved @Zhang-jiayue</span>
      </footer>
    );
  }
}
class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: 'Learn React',
          done: false,
          targetDate: new Date(),
        },
        {
          id: 2,
          description: 'Learn Typescript',
          done: false,
          targetDate: new Date(),
        },
        {
          id: 3,
          description: 'Build a portfolio website',
          done: false,
          targetDate: new Date(),
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>List Todos</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                {/* <th>id</th> */}
                <th>description</th>
                <th>Is Completed?</th>
                <th>Target Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  {/* <td>{todo.id}</td> */}
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
class WelcomeComponent extends Component {
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.params.name}. You can manage your todos{' '}
          <Link to="/todos">here</Link>.
        </div>
      </>

      //   <div>
      //     Welcome {this.props.params.name}. You can manage your todos
      //     <Link to="/todos">here</Link>.
      //   </div>
    );
  }
}

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

  loginClicked(event) {
    if (this.state.username === 'jiayue' && this.state.password === 'dummy') {
      AuthenticationService.registerSuccessfulLogin(
        this.state.username,
        this.state.password
      );
      this.props.navigate(`/welcome/${this.state.username}`);
      //   this.setState({
      //     showSuccessMessage: true,
      //     hasLoginFailed: false,
      //   });
    } else {
      this.setState({
        showSuccessMessage: false,
        hasLoginFailed: true,
      });
    }
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
function ErrorComponent() {
  return <div>An Error Occurred.</div>;
}

// function ShowInvalidCredentials(props) {
//   if (props.hasLoginFailed) {
//     return <div>Invalid Credentials</div>;
//   } else {
//     return null;
//   }
// }
// function ShowLoginSuccessMessage(props) {
//   if (props.showSuccessMessage) {
//     return <div>Login Successful</div>;
//   } else {
//     return null;
//   }
// }

export default TodoApp;
