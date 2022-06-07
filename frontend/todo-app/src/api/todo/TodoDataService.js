// import axios from 'axios';
// class TodoDataService {
//   retrieveAllTodos(name) {
//     return axios.get(`http://localhost:8080/users/${name}/todos`);
//   }
//   deleteTodo(name, id) {
//     return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
//   }

//   retrieveTodo(name, id) {
//     return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
//   }

//   updateTodo(name, todo) {
//     return axios.put(`http://localhost:8080/users/${name}/todos/`, todo);
//   }

//   createTodo(name, todo) {
//     return axios.post(`http://localhost:8080/users/${name}/todos/`, todo);
//   }
// }
// export default new TodoDataService();
import axios from 'axios';
import { API_URL, JPA_API_URL } from '../../Constants';

class TodoDataService {
  retrieveAllTodos(name) {
    //console.log('executed service')
    return axios.get(`${JPA_API_URL}/users/${name}/todos`);
  }

  retrieveTodo(name, id) {
    //console.log('executed service')
    return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`);
  }

  deleteTodo(name, id) {
    //console.log('executed service')
    return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
  }

  updateTodo(name, id, todo) {
    //console.log('executed service')
    return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
  }

  createTodo(name, todo) {
    //console.log('executed service')
    return axios.post(`${JPA_API_URL}/users/${name}/todos/`, todo);
  }
}

export default new TodoDataService();
