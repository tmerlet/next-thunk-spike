import { combineReducers } from "redux";
import { clockReducer } from "./ducks/clock/index";
import { productDetailsReducer } from "./ducks/productDetails/index";

// Our redux setup follows the ducks pattern https://github.com/erikras/ducks-modular-redux

const noopReducer = (state = {}) => state;

const combinedReducers = combineReducers({
  test: noopReducer,
  clock: clockReducer,
  productDetails: productDetailsReducer
});

const reducers = (state = {}, action) => {
  const updatedState = combinedReducers(state, action);
  return updatedState;
};

export default reducers;
