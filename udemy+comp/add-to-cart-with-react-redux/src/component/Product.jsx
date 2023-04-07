import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/actions";

const Product = () => {
  const [product, setProduct] = useState([]);

  const posts = async () => {
    try {
      const result = await axios.get("https://fakestoreapi.com/products");
      setProduct(result.data);
    } catch (error) {
      alert("Somthing goes wrong");
    }
  };

  useEffect(() => {
    posts();
  }, []);

  const dispatch = useDispatch();

  return (
    <>
      <div className="card-all">
        {product.map((e) => {
          return (
            <div className="card" key={e.id}>
              <img
                src={e.image}
                className="card-img-top"
                alt="Image not Found"
              />
              <div className="card-body">
                <h3 className="card-title">{e.title.slice(0, 20)}</h3>
                <h4>${e.price}</h4>
                <p className="card-text">{e.description.slice(0, 90)}</p>

                <button
                  className="addToCart"
                  onClick={() => dispatch(addToCart(e.id))}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
