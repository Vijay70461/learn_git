import { legacy_createStore } from "redux";
import { rootReducers } from "./reducers/index";

export const store = legacy_createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
