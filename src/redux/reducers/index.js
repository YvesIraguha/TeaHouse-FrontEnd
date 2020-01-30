import { combineReducers } from "redux";

import { submitWork } from "./submitWork";
import { loginReducer } from "./loginReducer";

import { createStoryPoemReducer } from "./createStoryOrPoemReducer";
import { allPiecesReducer } from "./allPiecesReducer";
import { individualPieceReducer } from "./individualPieceReducer";
import { deleteStoryPoemReducer } from "./deleteStoryPoemReducer";
import { editPieceReducer } from "./editPieceReducer";
import { createCollectionReducer } from "./createCollectionReducer";

export default combineReducers({
  submitWork,
  login: loginReducer,
  createStoryPoem: createStoryPoemReducer,
  allPieces: allPiecesReducer,
  individualPiece: individualPieceReducer,
  deletedPiece: deleteStoryPoemReducer,
  editedPiece: editPieceReducer,
  createCollection: createCollectionReducer
});
