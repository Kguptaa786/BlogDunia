import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  //if we not use dev tool then we can remove compose or can keep
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
