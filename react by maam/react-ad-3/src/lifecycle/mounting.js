import React, { Component } from "react";

class Mounting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "Vijay",
    };
  }
  getDerivedStateFromProps() {
    console.log("getderived");
  }
  componentDidMount() {
    console.log("componentdidmount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did UPDATE!");
  }
  clickhandler() {
    this.setState({
      first: "Narola",
    });
  }

  render() {
    return (
      <div>
        {this.state.first}
        <button onClick={this.clickhandler.bind(this)}>click</button>
      </div>
    );
  }
}

export default Mounting;
