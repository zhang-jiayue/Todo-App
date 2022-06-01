import React, { Component } from 'react';
import './Counter.css';
import PropTypes from 'prop-types';
// Use a capital letter as the start of a custom component
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment(by) {
    // update state - counter++
    this.setState((prevState) => {
      return { counter: prevState.counter + by }; // + this.props.by, // merge with the current state
    }); // passing an object to setState()
  }
  decrement(by) {
    // update state - counter++
    this.setState((prevState) => {
      return { counter: prevState.counter - by }; // + this.props.by, // merge with the current state
    }); // passing an object to setState()
  }
  reset() {
    this.setState({ counter: 0 });
  }
  render() {
    return (
      <div className="counter">
        <CounterButton
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <span
          className="count"
          style={{ fontSize: '50px', FontFace: 'fantasy' }}
        >
          {this.state.counter}
        </span>
        <div>
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
class CounterButton extends Component {
  // Define the initial state in a constructor
  //state => counter 0
  constructor() {
    super();
    // this.state = {
    //   counter: 0,
    // };
    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }
  render() {
    return (
      <div className="Counter">
        <button onClick={() => this.props.incrementMethod(this.props.by)}>
          +{this.props.by}
        </button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>
          -{this.props.by}
        </button>
        {/*<span
          className="count"
          style={{ fontSize: '50px', FontFace: 'fantasy' }}
        >
          {this.state.counter}
        </span>*/}
      </div>
    );
  }
  increment() {
    // update state - counter++
    this.setState({
      counter: this.state.counter + this.props.by, // merge with the current state
    }); // passing an object to setState()
    this.props.incrementMethod(this.props.by);
  }
  decrement() {
    // update state - counter++
    this.setState({
      counter: this.state.counter - this.props.by, // merge with the current state
    }); // passing an object to setState()
    this.props.decrementMethod(this.props.by);
  }
}
CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propTypes = {
  by: PropTypes.number,
};
export default Counter;
