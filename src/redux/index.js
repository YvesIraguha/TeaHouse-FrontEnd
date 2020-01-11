import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { submitWork } from "./reducers/submitWork";
import { loginReducer } from "./reducers/loginReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStoryPoemReducer } from "./reducers/createStoryOrPoemReducer";
import { allPiecesReducer } from "./reducers/allPiecesReducer";
const reducers = combineReducers({
  submitWork,
  login: loginReducer,
  createStoryPoem: createStoryPoemReducer,
  allPieces: allPiecesReducer
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
