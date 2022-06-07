// import axios from 'axios';

// class AuthenticationService {
//   // for Helper servises, we export an instance of the class - an object
//   executBasicAuthenticationService(username, password) {
//     let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password); // base 64 encoding
//     return axios.get(`http://localhost:8080/basicauth`, {
//       headers: { authorization: this.createBasicAuthToken(username, password) },
//     });
//   }
//   createBasicAuthToken(username, password) {
//     return 'Basic ' + window.btoa(username + ':' + password); // base 64 encoding
//   }
//   registerSuccessfulLogin(username, password) {
//     console.log('login successful');
//     sessionStorage.setItem('authenticatedUser', username);
//     this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
//   }

//   logout() {
//     sessionStorage.removeItem('authenticatedUser');
//   }

//   isUserLoggedIn() {
//     let user = sessionStorage.getItem('authenticatedUser');
//     if (user === null) {
//       return false;
//     }
//     return true;
//   }

//   getLoggedInUserName() {
//     let user = sessionStorage.getItem('authenticatedUser');
//     if (user === null) {
//       return '';
//     }
//     return user;
//   }

//   setupAxiosInterceptors(basicAuthHeader) {
//     axios.interceptors.request.use((config) => {
//       if (this.isUserLoggedIn()) {
//         config.headers.authorization = basicAuthHeader;
//       }
//       return config;
//     });
//   }
// }
// export default new AuthenticationService();
import axios from 'axios';
import { API_URL } from '../../Constants';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

class AuthenticationService {
  executeBasicAuthenticationService(username, password) {
    return axios.get(`${API_URL}/authenticate`, {
      headers: { authorization: this.createBasicAuthToken(username, password) },
    });
  }

  executeJwtAuthenticationService(username, password) {
    return axios.post(`${API_URL}/authenticate`, {
      username,
      password,
    });
  }

  createBasicAuthToken(username, password) {
    return 'Basic ' + window.btoa(username + ':' + password);
  }

  registerSuccessfulLogin(username, password) {
    //let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)
    //console.log('registerSuccessfulLogin')
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }

  registerSuccessfulLoginForJwt(username, token) {
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    this.setupAxiosInterceptors(this.createJWTToken(token));
  }

  createJWTToken(token) {
    return 'Bearer ' + token;
  }

  logout() {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return false;
    return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return '';
    return user;
  }

  setupAxiosInterceptors(token) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = token;
      }
      return config;
    });
  }
}

export default new AuthenticationService();
