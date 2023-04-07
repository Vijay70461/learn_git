import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    handlePosts();
  }, []); 

  const handlePosts = async () => {
    try {
      const result = await axios.get(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      setdata(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {data.map((post) => {
        return (
          <div className="card" key={post.id}>
            <img src={post.image} className="card-img-top" alt="Not-Found" />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.description}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
