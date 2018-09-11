import { createStore, applyMiddleware } from "redux";
import thunk from "thunk";

const initState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(...middleware)
);

export default store;
