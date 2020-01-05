import { LOGIN_SUCCESS, API_CALL_ERROR, API_CALL_IN_ACTION } from "../actions";
const initialState = { apiInProgress: 0 };

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
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

    case LOGIN_SUCCESS:
      return {
        ...state,
        submissionResponse: {
          ...action.payload
        },
        apiInProgress: state.apiInProgress - 1
      };
    default:
      return state;
  }
};

export default loginReducer;
