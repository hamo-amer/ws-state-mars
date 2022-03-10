import { Button, FormControl } from "react-bootstrap";
import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      timer: new Date(),
      name: "",
    };
    console.log("constructor");
  }
  // increment
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  // decrement
  decrement = () => {
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  };
  // component did mount
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ timer: new Date() });
    }, 1000);
  }
  // component did update
  componentDidUpdate() {
    console.log("component did update");
  }
  // componet will unmount
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    console.log("render");
    return (
      <div>
        <div className='counter'>
          <Button variant='success' onClick={this.increment}>
            +
          </Button>
          <p>{this.state.count}</p>
          <Button variant='danger' onClick={this.decrement}>
            -
          </Button>
        </div>
        <div className='input'>
          <FormControl
            type='text'
            placeholder='Enter your name'
            onChange={e => this.setState({ name: e.target.value })}
          />
          <p>{this.state.name}</p>
          <br />
          <p>{this.state.timer.toLocaleTimeString()}</p>
        </div>
      </div>
    );
  }
}

export default Counter;
