import { combineReducers } from "redux";
import addToCartReducer from "./cartReducer";
import countReducer from "./countReducer";

export const rootReducers = combineReducers({
  addToCartReducer,
  countReducer,
});
