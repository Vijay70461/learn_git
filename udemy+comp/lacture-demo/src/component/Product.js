import React, { useEffect, useState } from "react";

const Product = ({
  name,
  price,
  onShowProduct,
  onShowTotal,
  image,
  onTotalMinus,
}) => {
  const [quantity, setQuantity] = useState(0);
  const buy = () => {
    setQuantity(quantity + 1);
    onShowTotal(price);
  };

  const unselect = () => {
    quantity === 0 ? setQuantity(0) : setQuantity(quantity - 1);
    onTotalMinus(price);
  };

  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt="Image not found" width={120} height={150} />
      <h4>{price}</h4>
      <button onClick={buy}>Buy</button>
      <button onClick={() => onShowProduct(name)}>Show</button>
      <br />
      <button onClick={unselect}>UnSelect</button>

      <h3>Quantity :- {quantity}</h3>

      <hr />
    </div>
  );
};

const Total = ({ totalCash }) => {
  return <h3>Total :-{totalCash}</h3>;
};

const ProductForm = ({ index, onAddProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const createProduct = (event) => {
    event.preventDefault();
    const product = { id: index, name, price };
    onAddProduct(product);
    setName("");
    setPrice("");
  };
  return (
    <>
      <form>
        <label>Product Name :-</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Product Price :-</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        <button onClick={createProduct}>Create</button>
      </form>
      <hr />
    </>
  );
};

const ProductList = () => {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([
    { id: 1, name: "Android", price: 15000, url: "./image/android.png" },
    { id: 2, name: "Apple", price: 85000, url: "./image/iphone.png" },
    { id: 3, name: "Nokia", price: 20000, url: "./image/nokia.png" },
  ]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const showTotal = (price) => {
    setTotal(total + parseInt(price));
  };

  const totalminus = (price) => {
    total === 0 ? setTotal(0) : setTotal(total - parseInt(price));
  };
  const showProduct = (name) => {
    alert("You selected " + name);
  };
  return (
    <div>
      <ProductForm index={products.length + 1} onAddProduct={addProduct} />
      {products.map((p) => (
        <Product
          key={p.id}
          name={p.name}
          image={p.url}
          price={p.price}
          onShowProduct={showProduct}
          onShowTotal={showTotal}
          onTotalMinus={totalminus}
        />
      ))}
      <Total totalCash={total} />
    </div>
  );
};

export default ProductList;
