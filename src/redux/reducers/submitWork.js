import {
  SUBMISSIONS_ERROR,
  SUBMISSIONS_REQUEST,
  SUBMISSIONS_SUCCESS
} from "../actionsConstants";

const initialState = {
  apiInProgress: 0
};

const submitWork = (state = initialState, action) => {
  switch (action.type) {
    case SUBMISSIONS_ERROR:
      return {
        ...state,
        submissionResponse: {
          ...action.payload
        },
        apiInProgress: state.apiInProgress - 1
      };
    case SUBMISSIONS_REQUEST:
      return {
        ...state,
        apiInProgress: state.apiInProgress + 1
      };

    case SUBMISSIONS_SUCCESS:
      return {
        ...state,
        apiInProgress: state.apiInProgress - 1,
        submissionResponse: {
          ...action.payload
        }
      };
    default:
      return state;
  }
};

export default submitWork;
