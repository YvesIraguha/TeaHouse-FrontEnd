import { combineReducers } from "redux";

import { submitWork } from "./submitWork";
import { loginReducer } from "./loginReducer";

import { createStoryPoemReducer } from "./createStoryOrPoemReducer";
import { allPiecesReducer } from "./allPiecesReducer";
import { individualPieceReducer } from "./individualPieceReducer";

export default combineReducers({
  submitWork,
  login: loginReducer,
  createStoryPoem: createStoryPoemReducer,
  allPieces: allPiecesReducer,
  individualPiece: individualPieceReducer
});