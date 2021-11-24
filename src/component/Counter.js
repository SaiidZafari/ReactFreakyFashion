import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state - 1 });
  };

  render() {
    return (
      <div>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-outline-primary"
        >
          +
        </button>
        <span className="m-2">{this.formatCount()}</span>
        <button
          onClick={this.handleDecrement}
          className="btn btn-outline-primary"
        >
          -
        </button>
      </div>
    );
    }
    formatCount(){
    const { count } = this.state;
    return count <= 0 ? 0 : count;
}
}

export default Counter;