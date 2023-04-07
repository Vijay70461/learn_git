import React, { Component } from "react";
import axios from "axios";

class Getdata extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
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
              <ul key={post.id}>
                {post.title}
                <li>{post.body}</li>
              </ul>
            ))
          : null}
      </div>
    );
  }
}

export default Getdata;
