import { ADD_TO_CART } from "../actions/types";

export const cartInitialData = [];

const addToCartReducer = (state = cartInitialData, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.payload];
    default:
      return state;
  }
};

export default addToCartReducer;
