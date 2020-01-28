import {
  EDIT_PIECE_SUCCESS,
  EDIT_PIECE_ERROR,
  EDIT_PIECE_REQUEST
} from "../actionsConstants";
const initialState = { apiInProgress: 0 };

export const editPieceReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PIECE_ERROR:
      return {
        ...state,
        editPieceResponse: {
          ...action.payload
        },
        apiInProgress: state.apiInProgress - 1
      };
    case EDIT_PIECE_REQUEST:
      return {
        ...state,
        apiInProgress: state.apiInProgress + 1
      };

    case EDIT_PIECE_SUCCESS:
      return {
        ...state,
        editPieceResponse: {
          ...action.payload
        },
        apiInProgress: state.apiInProgress - 1
      };
    default:
      return state;
  }
};

export default editPieceReducer;
