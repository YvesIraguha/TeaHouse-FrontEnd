import { combineReducers } from "redux";

import submitWork from "./submitWork";
import login from "./loginReducer";

import createStoryPoem from "./createStoryOrPoemReducer";
import allPieces from "./allPiecesReducer";
import individualPiece from "./individualPieceReducer";
import deletedPiece from "./deleteStoryPoemReducer";
import editedPiece from "./editPieceReducer";
import createCollection from "./createCollectionReducer";
import allCollections from "./allCollectionsReducer";

import resetPassword from "./resetPasswordReducer";

export default combineReducers({
  submitWork,
  login,
  createStoryPoem,
  allPieces,
  individualPiece,
  deletedPiece,
  editedPiece,
  createCollection,
  allCollections,
  resetPassword
});
