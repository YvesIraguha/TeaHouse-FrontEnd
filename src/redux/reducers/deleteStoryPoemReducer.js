import {
  DELETE_PIECE_SUCCESS,
  DELETE_PIECE_ERROR,
  DELETE_PIECE_REQUEST
} from "../actionsConstants";
const initialState = { apiInProgress: 0 };

export const deleteStoryPoemReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PIECE_ERROR:
      return {
        ...state,
        deletePieceResponse: {
          ...action.payload
        },
        apiInProgress: state.apiInProgress - 1
      };
    case DELETE_PIECE_REQUEST:
      return {
        ...state,
        apiInProgress: state.apiInProgress + 1
      };

    case DELETE_PIECE_SUCCESS:
      return {
        ...state,
        deletePieceResponse: {
          ...action.payload
        },
        apiInProgress: state.apiInProgress - 1
      };
    default:
      return state;
  }
};

export default deleteStoryPoemReducer;
