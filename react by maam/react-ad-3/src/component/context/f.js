import React, { Component } from "react";

class F extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(userName) => {
            return <div>Hello {userName}</div>;
          }}
        </UserConsumer>
      </div>
    );
  }
}

export default F;
