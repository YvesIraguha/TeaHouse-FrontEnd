import {
  INDIVIDUAL_PIECE_ERROR,
  INDIVIDUAL_PIECE_REQUEST,
  INDIVIDUAL_PIECE_SUCCESS
} from "../actionsConstants";
const initialState = { apiInProgress: 0 };

const individualPieceReducer = (state = initialState, action) => {
  switch (action.type) {
    case INDIVIDUAL_PIECE_REQUEST:
      return {
        ...state,
        apiInProgress: state.apiInProgress + 1
      };
    case INDIVIDUAL_PIECE_SUCCESS:
      return {
        ...state,
        apiInProgress: state.apiInProgress - 1,
        individualPieceResponse: {
          ...action.payload
        }
      };
    case INDIVIDUAL_PIECE_ERROR:
      return {
        ...state,
        apiInProgress: state.apiInProgress - 1,
        individualPieceResponse: {
          ...action.payload
        }
      };
    default:
      return state;
  }
};

export default individualPieceReducer;
