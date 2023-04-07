import React, { useState } from "react";
import Product from "./Product";
import ProductForm from "./ProductForm";
import Total from "./Total";

const ProductList = () => {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([
    { id: 1, name: "Android", price: 20000, url: "./image/android.png" },
    { id: 2, name: "Apple", price: 80000, url: "./image/iphone.png" },
    { id: 3, name: "Nokia", price: 30000, url: "./image/nokia.png" },
  ]);

  const show = (name) => {
    alert("You select " + name);
  };

  const calculateTotal = (price) => {
    setTotal(total + parseInt(price));
  };

  const minusTotal = (price, id) => {
    const newId = products.filter((a) => {
      return id !== a.id
        ? total === 0
          ? setTotal(0)
          : setTotal(total - parseInt(a.price))
        : setTotal(total);
    });
    setTotal(newId);

    console.log(id);
  };

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <>
      <ProductForm index={products.length + 1} onAddProduct={addProduct} />
      {products.map((post) => (
        <Product
          id={post.id}
          key={post.id}
          url={post.url}
          name={post.name}
          price={post.price}
          onShow={show}
          onTotal={calculateTotal}
          onMinus={minusTotal}
        />
      ))}
      <Total totalCash={total} />
    </>
  );
};

export default ProductList;
