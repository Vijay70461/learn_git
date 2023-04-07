import React, { useState } from "react";

const ProductForm = ({ onAddProduct, index }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const createProduct = (event) => {
    event.preventDefault();
    const product = { id: index, name, price };
    onAddProduct(product);
    setName("");
    setPrice("");
    // alert(`Name ${name} & Price ${price}`);
  };
  return (
    <>
      <form>
        <label>Product Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Product Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        <button onClick={createProduct}>Create</button>
        <hr />
      </form>
    </>
  );
};

export default ProductForm;
