import React, { Component } from 'react';
import withNavigation from './WithNavigation';
import withParams from './WithParams';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
// import AuthenticationService from './AuthenticationService';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent';
import ListTodosComponent from './ListTodosComponent';
import HeaderComponent from './HeaderComponent';
import ErrorComponent from './ErrorComponent';
import FooterComponent from './FooterComponent';
import WelcomeComponent from './WelcomeComponent';
import LogoutComponent from './LogoutComponent';
import TodoComponent from './TodoComponent';
class TodoApp extends Component {
  render() {
    const LoginComponentWithNavigation = withNavigation(LoginComponent);

    const WelcomeComponentWithParams = withParams(WelcomeComponent);

    const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
    const ListTodosComponentWithNavigation = withNavigation(ListTodosComponent);

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
                // <AuthenticatedRoute>
                <WelcomeComponentWithParams />
                // </AuthenticatedRoute>
              }
            />
            <Route
              path="/todos/:id"
              element={
                // <AuthenticatedRoute>
                <TodoComponent />
                // </AuthenticatedRoute>
              }
            />

            <Route
              path="/todos"
              element={
                // <AuthenticatedRoute>
                <ListTodosComponentWithNavigation />
                // </AuthenticatedRoute>
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
