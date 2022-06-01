import React, { Component } from 'react';
import './App.css';
// import FirstComponent from './components/learning-examples/FirstComponent';
// import FunctionComponent from './components/learning-examples/SecondComponent';
// import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        <TodoApp />
      </div>
    );
  }
}
// class LearningComponent extends Component {
//   render() {
//     return (
//       <div className="App">
//         <FirstComponent />
//         <FunctionComponent />
//       </div>
//     );
//   }
// }

export default App;
