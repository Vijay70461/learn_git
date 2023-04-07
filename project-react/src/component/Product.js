import axios from "axios";
import React, { useEffect, useState } from "react";
import "./product.css";

const Product = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setdata(result.data);
    } catch (error) {
      alert("Somthing wrong /404");
    }
  };
  return (
    <>
      <div className="ourcard container">
        {data.slice(0, 9).map((post) => {
          return (
            <div className="card card-1" key={post.id}>
              <img src={post.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
