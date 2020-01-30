import {
  CREATE_COLLECTION_ERROR,
  CREATE_COLLECTION_REQUEST,
  CREATE_COLLECTION_SUCCESS
} from "../actionsConstants";

const initialState = {
  apiInProgress: 0
};

export const createCollectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COLLECTION_ERROR:
      return {
        ...state,
        createCollectionResponse: {
          ...action.payload
        },
        apiInProgress: state.apiInProgress - 1
      };
    case CREATE_COLLECTION_REQUEST:
      return {
        ...state,
        apiInProgress: state.apiInProgress + 1
      };

    case CREATE_COLLECTION_SUCCESS:
      return {
        ...state,
        apiInProgress: state.apiInProgress - 1,
        createCollectionResponse: {
          ...action.payload
        }
      };
    default:
      return state;
  }
};
