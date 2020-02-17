import axios from "../../utils/axios";
import {
  REQUEST_RESET_PASSWORD_ERROR,
  REQUEST_RESET_PASSWORD_REQUEST,
  REQUEST_RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_REQUEST
} from "../actionsConstants";
import handleErrors from "../helpers/errorHandlers";

export const requestResetPasswordHandler = (
  email,
  history
) => async dispatch => {
  try {
    dispatch({ type: REQUEST_RESET_PASSWORD_REQUEST });
    const result = await axios.post("/users/reset-password", {
      email
    });
    dispatch({ type: REQUEST_RESET_PASSWORD_SUCCESS, payload: result.data });
  } catch (error) {
    handleErrors(REQUEST_RESET_PASSWORD_ERROR, error, history, dispatch);
  }
};

export const resetPasswordHandler = (
  newPassword,
  token,
  history
) => async dispatch => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });
    const result = await axios.put(`users/reset-password/${token}`, {
      password: newPassword
    });
    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: result.data });
    history.replace("/login");
  } catch (error) {
    handleErrors(RESET_PASSWORD_ERROR, error, history, dispatch);
  }
};
