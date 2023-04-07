import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Product from "./Product";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handeleClick = () => {
    setIsOpen(!isOpen);
  };
  const count = useSelector((state) => state.countReducer);
  return (
    <>
      <div>
        <div className="main-div">
          <h1>Logo</h1>
          <div className="cart-icon" onClick={handeleClick}>
            <AiOutlineShoppingCart />
          </div>
          <div className="cart-icon-count">{count}</div>
        </div>
        {isOpen && (
          <div>
            <Cart />
          </div>
        )}
        <div>
          <Product />
        </div>
      </div>
    </>
  );
};

export default Main;
