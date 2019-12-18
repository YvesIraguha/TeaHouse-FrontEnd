import {
  INITIAL_ACTION,
  API_CALL_ERROR,
  API_CALL_IN_ACTION,
  ON_INPUT_CHANGE,
  INPUT_ERROR,
  SUBMISSIONS_SUCCESS,
  CLEAR_SUBMISSIONS_RESPONSE
} from "../actions";

const initialState = {
  apiInProgress: 0,
  submissionWork: { fullName: "", email: "", file: null, type: "Short story" }
};

export const submitWork = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_ACTION:
      return {
        ...state,
        ...action.payload,
        apiInProgress: state.apiInProgress - 1
      };
    case API_CALL_ERROR:
      return {
        ...state,
        submissionResponse: {
          ...action.payload
        },
        apiInProgress: state.apiInProgress - 1
      };
    case API_CALL_IN_ACTION:
      return {
        ...state,
        apiInProgress: state.apiInProgress + 1
      };
    case ON_INPUT_CHANGE:
      return {
        ...state,
        submissionWork: { ...state.submissionWork, ...action.payload }
      };
    case INPUT_ERROR:
      return {
        ...state,
        inputError: {
          ...state.inputError,
          ...action.payload
        }
      };
    case SUBMISSIONS_SUCCESS:
      return {
        ...state,
        apiInProgress: state.apiInProgress - 1,
        submissionResponse: {
          ...action.payload
        }
      };
    case CLEAR_SUBMISSIONS_RESPONSE:
      return {
        ...state,
        apiInProgress: state.apiInProgress,
        submissionResponse: null
      };
    default:
      return initialState;
  }
};
