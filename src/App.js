import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      value: "",
    };
    this.OnWriteHandle = this.OnWriteHandle.bind(this);
  }
  OnWriteHandle(event) {
    this.setState({
      contador: event.target.value.length,
      value: event.target.value,
    });
  }
  render() {
    return (
      <div className="container">
        <textarea
          rows="3"
          onChange={this.OnWriteHandle}
          value={this.state.value}
        ></textarea>
        <div className="counter">{this.state.contador}</div>
      </div>
    );
  }
}
export default App;
