import React from "react";
import { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a className="active" href="index.html">
                  Home
                </a>
              </li>
              <li>
                <a href="index.html">Shop</a>
              </li>
              <li>
                <a href="index.html">Blog</a>
              </li>
              <li>
                <a href="index.html">About</a>
              </li>
              <li>
                <a href="index.html">Contact</a>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={
                this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"
              }
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
