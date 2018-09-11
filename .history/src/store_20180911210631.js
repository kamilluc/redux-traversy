import { createStore, applyMiddleware } from "redux";
import thunk from "thunk";
import rootReducer from "./reducers"; //chodzi o index.js i jesli tak jest nie trzeba tego pisac

const initState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(...middleware)
);

export default store;
