import React, { useState } from "react";

const Product = ({ id, name, price, onShow, onTotal, onMinus, url }) => {
  const [count, setCount] = useState(0);
  const [ptotal, setPtotal] = useState(0);
  const buy = () => {
    setCount(count + 1);
    onTotal(price);
    setPtotal(count * price);
  };

  const unselect = (id) => {
    count === 0 ? setCount(0) : setCount(count - 1);
    onMinus(price, id);
    ptotal === 0 ? setPtotal(0) : setPtotal(ptotal - price);
  };
  return (
    <>
      <h3>{name}</h3>
      <img src={url} alt="image not founds" width={120} height={150} />
      <p>{price}</p>
      <button onClick={buy}>Buy</button>
      <button onClick={() => onShow(name)}>Show</button>
      <br />
      <button onClick={() => unselect(id)}>Un Select</button>
      <h3>Quantity : {count} </h3>
      <h1>Total : {ptotal}</h1>
      <hr />
    </>
  );
};

export default Product;
