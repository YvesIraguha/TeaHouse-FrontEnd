import axios from "../../utils/axios";
import {
  REQUEST_RESET_PASSWORD_ERROR,
  REQUEST_RESET_PASSWORD_REQUEST,
  REQUEST_RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_REQUEST
} from "../actionsConstants";

export const requestResetPasswordHandler = email => async dispatch => {
  try {
    dispatch({ type: REQUEST_RESET_PASSWORD_REQUEST });
    const result = await axios.post("/users/reset-password", {
      email
    });
    dispatch({ type: REQUEST_RESET_PASSWORD_SUCCESS, payload: result.data });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: REQUEST_RESET_PASSWORD_ERROR,
        payload: { error: error.response.data.error }
      });
    } else {
      dispatch({
        type: REQUEST_RESET_PASSWORD_ERROR,
        payload: { error: error.message }
      });
    }
  }
};

export const resetPasswordHandler = (newPassword, token) => async dispatch => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });
    const result = await axios.put(`users/reset-password/${token}`, {
      password: newPassword
    });
    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: result.data });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: RESET_PASSWORD_ERROR,
        payload: { error: error.response.data.error }
      });
    } else {
      dispatch({
        type: RESET_PASSWORD_ERROR,
        payload: { error: error.message }
      });
    }
  }
};
