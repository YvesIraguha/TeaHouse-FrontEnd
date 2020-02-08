import {
  CREATION_SUCCESS,
  CREATION_ERROR,
  CREATION_REQUEST
} from "../actionsConstants";
const initialState = { apiInProgress: 0 };

const createStoryPoemReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATION_ERROR:
      return {
        ...state,
        creationResponse: {
          ...action.payload
        },
        apiInProgress: state.apiInProgress - 1
      };
    case CREATION_REQUEST:
      return {
        ...state,
        apiInProgress: state.apiInProgress + 1
      };

    case CREATION_SUCCESS:
      return {
        ...state,
        creationResponse: {
          ...action.payload
        },
        apiInProgress: state.apiInProgress - 1
      };
    default:
      return state;
  }
};

export default createStoryPoemReducer;
