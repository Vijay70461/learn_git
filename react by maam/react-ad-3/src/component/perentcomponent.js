import React, { Component } from "react";

export class Perentcomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "promise",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "promise",
      });
    }, 2000);
  }

  render() {
    console.log("perentcomponent");
    return (
      <div>
        perentcomponent
        <PureComponent />
        <Component />
      </div>
    );
  }
}

export default Perentcomponent;
