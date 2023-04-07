import React from "react";

const Product = (props) => {
  return (
    <>
      <div className="card">
        <img
          className="product--image"
          src="./Image/shoe1.jpg"
          alt="Product Image"
        />
        <h2>Sport Shoes</h2>
        <p className="price">2999</p>
        <p>Product description</p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    </>
  );
};

export default Product;
