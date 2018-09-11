import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
//chodzi o index.js i jesli tak jest nie trzeba tego pisac

const initState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
