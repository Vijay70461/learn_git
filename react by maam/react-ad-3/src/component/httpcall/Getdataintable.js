import axios from "axios";
import React, { Component } from "react";

class Getdataintable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        console.log(response);
        this.setState({ post: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { post } = this.state;
    return (
      <div>
        {post.length
          ? post.map((post) => (
              <table key={post.id}>
                <tr>
                  <td>{post.albumId}</td>
                  <td>
                    <img src={post.url} alt="" height={200} width={200} />
                  </td>
                  <td>{post.title}</td>
                </tr>
              </table>
            ))
          : null}
      </div>
    );
  }
}

export default Getdataintable;
