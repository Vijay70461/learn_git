import React, { Component } from "react";

function Even(props) {
  const news = [10, 15, 20, 25, 30, 35, 40];
  return (
    <div style={{ color: "green" }}>
      {news.map((nam) => nam % 2 == 0 && <li> {nam * nam}</li>)}
    </div>
  );
}

function Odd(props) {
  const news = [10, 15, 20, 25, 30, 35, 40];
  return (
    <div style={{ color: "red" }}>
      {news.map((nam) => nam % 2 == 1 && <li> {nam * nam} </li>)}
    </div>
  );
}

class All extends Component {
  constructor(props) {
    super(props);

    this.state = {
      no: false
    };
    this.onbtn = this.onbtn.bind(this);
  }
  onbtn() {
    this.setState({
      no: this.state.no ? <Even /> : <Odd />,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.no}</h1>
        <button onClick={this.onbtn}>Click</button>
      </div>
    );
  }
}

export default All;
