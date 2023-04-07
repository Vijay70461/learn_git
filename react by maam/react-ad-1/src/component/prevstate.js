import React, { Component } from "react";

class Prevstate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.click = this.click.bind(this);
  }
  click() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.click}>Click</button>
      </div>
    );
  }
}

export default Prevstate;
