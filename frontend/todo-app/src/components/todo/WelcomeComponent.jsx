import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService';
class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeMessage: '',
    };
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    this.handleError = this.handleError.bind(this);
  }
  retrieveWelcomeMessage() {
    HelloWorldService.executeHelloWorldPartVariableService(
      this.props.params.name
    )
      .then((response) => this.handleSuccessfulResponse(response))
      .catch((error) => this.handleError(error));
    // HelloWorldService.executeHelloWorldBeanService()
    //   .then((response) => this.handleSuccessfulResponse(response))
    //   .catch();
    // HelloWorldService.executeHelloWorldService()
    //   .then((response) => this.handleSuccessfulResponse(response))
    //   .catch();
  }
  handleError(error) {
    console.log(error.response);
    console.log(error.response.data.message);
  }
  handleSuccessfulResponse(response) {
    this.setState({ welcomeMessage: response.data.message });
  }
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.params.name}. You can manage your todos{' '}
          <Link to="/todos">here</Link>.
        </div>
        {/* <div className="container">
          Click here to get a customized welcome message.
          <button
            onClick={this.retrieveWelcomeMessage}
            className="btn btn-success"
          >
            Get Welcome Message
          </button>
        </div>
    <div className="container">{this.state.welcomeMessage}</div>*/}
      </>

      //*/   <div>
      //     Welcome {this.props.params.name}. You can manage your todos
      //     <Link to="/todos">here</Link>.
      //   </div> */}
    );
  }
}
export default WelcomeComponent;
