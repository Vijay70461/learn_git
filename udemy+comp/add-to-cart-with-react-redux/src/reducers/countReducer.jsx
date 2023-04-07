import { ADD_TO_CART } from "../actions/types";

export const countInitialData = 0;

const countReducer = (state = countInitialData, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state + 1;
    default:
      return state;
  }
};

export default countReducer;
