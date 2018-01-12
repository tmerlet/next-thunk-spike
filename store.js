import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import reducers from "./redux/reducers";

const exampleInitialState = {
  productDetails: {
    debug: "Initial state"
  }
};

export const store = (initialState = exampleInitialState) => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
};
