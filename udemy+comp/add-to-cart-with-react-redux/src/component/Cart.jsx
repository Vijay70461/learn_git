import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const data = useSelector((state) => state.addToCartReducer);
  console.log(data);
  return (
    <>
      <div className="cart-div">
        <div className="item">
          <h1>This is a Cart</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum
            omnis dolore magnam, architecto soluta. Architecto, repellendus
            error illum odio harum aspernatur ipsam doloribus numquam dolore
            recusandae. Pariatur, consequatur vitae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum
            omnis dolore magnam, architecto soluta. Architecto, repellendus
            error illum odio harum aspernatur ipsam doloribus numquam dolore
            recusandae. Pariatur, consequatur vitae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum
            omnis dolore magnam, architecto soluta. Architecto, repellendus
            error illum odio harum aspernatur ipsam doloribus numquam dolore
            recusandae. Pariatur, consequatur vitae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum
            omnis dolore magnam, architecto soluta. Architecto, repellendus
            error illum odio harum aspernatur ipsam doloribus numquam dolore
            recusandae. Pariatur, consequatur vitae!
          </p>
        </div>
      </div>
    </>
  );
};

export default Cart;
