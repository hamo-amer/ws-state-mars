import { Button } from "react-bootstrap";
import React, { Component } from "react";
import Counter from "./components/Counter";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  render() {
    return (
      <div className='App'>
        <Button
          variant='primary'
          onClick={() => this.setState({ show: !this.state.show })}
        >
          show
        </Button>
        {this.state.show && <Counter />}
      </div>
    );
  }
}

export default App;
