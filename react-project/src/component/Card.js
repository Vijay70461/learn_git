import React, { Component } from "react";
import axios from "axios";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        this.setState({ post: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { post } = this.state;
    return (
      <>
        {post.length
          ? post.map((post) => (
              <div className="card" key={post.id}>
                <img src={post.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.description.slice(0, 100)}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            ))
          : null}
      </>
    );
  }
}

export default Card;
