import React, { Component } from "react";
import './new.css'

export class New extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="#" data-text="Home">
              Home
            </a>
          </li>
          <li>
            <a href="#" data-text="About">
              About
            </a>
          </li>
          <li>
            <a href="#" data-text="Services">
              Services
            </a>
          </li>
          <li>
            <a href="#" data-text="Work">
              Work
            </a>
          </li>
          <li>
            <a href="#" data-text="Team">
              Team
            </a>
          </li>
          <li>
            <a href="#" data-text="Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default New;
