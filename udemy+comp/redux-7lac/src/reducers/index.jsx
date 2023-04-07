import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";

const rootReducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

export default rootReducers;
