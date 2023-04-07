import React, { Component } from "react";
import axios from "axios";

export class Api1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mydata: [],
    };
  }
  componentDidMount() {}
  loaddata() {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      const posts = res.data;
      console.log(posts.data);
      this.setState({ mydata: posts.data });
    });
  }
  render() {
    return (
      <div>
        <button type="button" onClick={this.loaddata.bind(this)}>
          Get Data
        </button>
        <br />
        <table border="1">
          <tr>
            <td>Id</td>
            <td>Emailid</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Image</td>
          </tr>
          {this.state.mydata.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.email}</td>
              <td>{p.first_name}</td>
              <td>{p.last_name}</td>
              <td>
                <img src={p.avatar} alt={p.avatar}></img>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Api1;
