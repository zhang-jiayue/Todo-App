class AuthenticationService {
  // for Helper servises, we export an instance of the class - an object
  registerSuccessfulLogin(username, password) {
    // console.log('login successful');
    sessionStorage.setItem('authenticatedUser', username);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    if (user === null) {
      return false;
    }
    return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem('authenticatedUser');
    if (user === null) {
      return '';
    }
    return user;
  }
}
export default new AuthenticationService();
