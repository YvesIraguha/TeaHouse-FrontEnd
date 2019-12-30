import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { submitWork } from "./reducers/submitWork";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  submitWork,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
