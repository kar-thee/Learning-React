import React, { Component } from 'react';
import './counter.css';

export default class Counter extends Component {
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  reset = () => {
    this.setState({
      count: 0
    });
  };
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p id="count">
          <strong>{this.state.count} </strong>
        </p>

        <div id="buttons">
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.reset}>0</button>
        </div>
      </div>
    );
  }
}
