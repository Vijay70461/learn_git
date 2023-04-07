import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      comment: "",
      topic: "Vue",
      check: "",
      gender: "",
    };
  }

  namehandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  commenthandler = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };
  topichandler = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  checkhandler = (event) => {
    this.setState({
      check: event.target.value,
    });
  };
  radiohandler = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };
  clickhandler() {
    0;
    alert(
      `${this.state.name} - ${this.state.comment} - ${this.state.topic} - ${this.state.check} - ${this.state.gender}`
    );
  }

  submithandler = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submithandler}>
          Enter Name :-
          <input
            type="text"
            defaultValue={this.state.name}
            onChange={this.namehandler}
          />
          <br />
          Comment :-
          <input
            type="text"
            value={this.state.comment}
            onChange={this.commenthandler}
          />
          <br />
          Selent Topic :-
          <select value={this.state.topic} onChange={this.topichandler}>
            <option value="React">React</option>
            <option value="Anguler">Anguler</option>
            <option value="Vue">Vue</option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            value="frontend"
            onChange={this.checkhandler}
          />
          Frontend <br />
          <input type="checkbox" value="backend" onChange={this.checkhandler} />
          Backend <br />
          <input
            type="checkbox"
            value="fullstack"
            onChange={this.checkhandler}
          />
          Fullstack <br />
          <br />
          <input
            type="radio"
            value="male"
            name="gender"
            onChange={this.radiohandler}
          />
          Male <br />
          <input
            type="radio"
            value="female"
            name="gender"
            onChange={this.radiohandler}
          />
          Female <br />
          <br />
          <button type="submit" onClick={this.clickhandler.bind(this)}>
            Click me
          </button>
        </form>
        <br />
      </div>
    );
  }
}

export default Form;
