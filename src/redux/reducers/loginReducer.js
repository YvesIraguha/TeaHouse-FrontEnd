import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST } from "../actionsConstants";
const initialState = { apiInProgress: 0 };

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        submissionResponse: {
          ...action.payload
        },
        apiInProgress: state.apiInProgress - 1
      };
    case LOGIN_REQUEST:
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
