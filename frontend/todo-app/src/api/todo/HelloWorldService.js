import axios from 'axios';
class HelloWorldService {
  executeHelloWorldService() {
    return axios.get('http://localhost:8080/hello-world/');
  }

  executeHelloWorldBeanService() {
    return axios.get('http://localhost:8080/hello-world-bean');
  }
  executeHelloWorldPartVariableService(name) {
    // let username = 'in28minutes';
    // let password = 'dummy ';
    // let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password); // base 64 encoding
    return axios.get(
      `http://localhost:8080/hello-world/path-variable/${name}`
      //   {
      //     headers: {
      //       authorization: basicAuthHeader,
      //     },
      //   }
    );
  }
}
export default new HelloWorldService();
