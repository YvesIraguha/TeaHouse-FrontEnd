import {
  ALL_PIECES_REQUEST,
  ALL_PIECES_ERROR,
  ALL_PIECES_SUCCESS
} from "../actionsConstants";

const initialState = { apiInProgress: 0 };

const allPiecesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PIECES_REQUEST:
      return {
        ...state,
        apiInProgress: state.apiInProgress + 1
      };
    case ALL_PIECES_SUCCESS:
      return {
        ...state,
        apiInProgress: state.apiInProgress - 1,
        allPiecesResponse: {
          ...action.payload
        }
      };

    case ALL_PIECES_ERROR:
      return {
        ...state,
        apiInProgress: state.apiInProgress - 1,
        allPiecesResponse: {
          ...action.payload
        }
      };
    default:
      return state;
  }
};

export default allPiecesReducer;
