import axios from "../../utils/axios";
import { API_CALL_IN_ACTION, LOGIN_SUCCESS, API_CALL_ERROR } from "../actions";

const setToken = token => localStorage.setItem("token", token);
export const loginHandler = (email, password, history) => async dispatch => {
  try {
    dispatch({ type: API_CALL_IN_ACTION });
    const response = await axios.post("/auth/login", { email, password });
    setToken(response.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    history.replace("/");
  } catch (error) {
    if (error.response) {
      dispatch({
        type: API_CALL_ERROR,
        payload: { error: error.response.data.error }
      });
    } else {
      dispatch({
        type: API_CALL_ERROR,
        payload: { error: error.message }
      });
    }
  }
};
