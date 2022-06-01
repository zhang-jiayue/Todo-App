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
    if (user === null) return false;
    return true;
  }
}
export default new AuthenticationService();
