import React, { Component } from "react";
import axios from "axios";

class Postdata extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }
  submithandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/photos", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  changehandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { userId, title, body } = this.state;

    return (
      <>
        <form onSubmit={this.submithandler}>
          userId:-
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={this.changehandler}
          />
          <br />
          title:-
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.changehandler}
          />
          <br />
          body:-
          <input
            type="text"
            name="body"
            value={body}
            onChange={this.changehandler}
          />
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>
      </>
    );
  }
}

export default Postdata;
