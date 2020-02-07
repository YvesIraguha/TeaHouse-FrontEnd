import {
  REQUEST_RESET_PASSWORD_ERROR,
  REQUEST_RESET_PASSWORD_REQUEST,
  REQUEST_RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_REQUEST
} from "../actionsConstants";
const initialState = { apiInProgress: 0 };

const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        resetPasswordResponse: {
          ...action.payload
        },
        apiInProgress: state.apiInProgress - 1
      };
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        apiInProgress: state.apiInProgress + 1
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordResponse: {
          ...action.payload
        },
        apiInProgress: state.apiInProgress - 1
      };
    case REQUEST_RESET_PASSWORD_ERROR:
      return {
        ...state,
        requestResetPasswordResponse: {
          ...action.payload
        },
        apiInProgress: state.apiInProgress - 1
      };
    case REQUEST_RESET_PASSWORD_REQUEST:
      return {
        ...state,
        apiInProgress: state.apiInProgress + 1
      };

    case REQUEST_RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        requestResetPasswordResponse: {
          ...action.payload
        },
        apiInProgress: state.apiInProgress - 1
      };
    default:
      return state;
  }
};

export default resetPasswordReducer;
