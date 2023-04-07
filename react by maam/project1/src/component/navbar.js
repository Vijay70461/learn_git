import React, { Component } from "react";
import "./navbar.css";

function Login(props) {
  return (
    <div className="header">
      <div className="nbar">
        <ul>
          <li>Menu</li>
          <li>Details</li>
          <li>Account</li>
          <li>Order</li>
        </ul>
      </div>
    </div>
  );
}
function Logout(props) {
  return (
    <div className="header">
      <div className="nbar">
        <ul>
          <li>Menu</li>
          <li>Details</li>
        </ul>
      </div>
    </div>
  );
}

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedin: false,
    };
  }
  render() {
    let Message;
    if (this.state.loggedin) {
      Message = <Login />;
    } else {
      Message = <Logout />;
    }
    return Message;
  }
}

export default Navbar;
