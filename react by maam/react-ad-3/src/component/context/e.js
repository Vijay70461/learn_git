import React, { Component } from "react";
import F from "./f";
import { UserContext } from "./userContext";

class E extends Component {
  render() {
    return (
      <div>
        E context {this.context}
        <F />
      </div>
    );
  }
}
E.contextType = UserContext;

export default E;
