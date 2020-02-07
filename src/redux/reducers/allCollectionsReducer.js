import {
  ALL_COLLECTIONS_REQUEST,
  ALL_COLLECTIONS_ERROR,
  ALL_COLLECTIONS_SUCCESS
} from "../actionsConstants";

const initialState = { apiInProgress: 0 };

const allCollectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_COLLECTIONS_REQUEST:
      return {
        ...state,
        apiInProgress: state.apiInProgress + 1
      };
    case ALL_COLLECTIONS_SUCCESS:
      return {
        ...state,
        apiInProgress: state.apiInProgress - 1,
        allCollectionsResponse: {
          ...action.payload
        }
      };

    case ALL_COLLECTIONS_ERROR:
      return {
        ...state,
        apiInProgress: state.apiInProgress - 1,
        allCollectionsResponse: {
          ...action.payload
        }
      };
    default:
      return state;
  }
};

export default allCollectionsReducer;
