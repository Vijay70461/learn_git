import { ADD_PRODUCTS, ADD_TO_CART } from "./actionTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const addProducts = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};
