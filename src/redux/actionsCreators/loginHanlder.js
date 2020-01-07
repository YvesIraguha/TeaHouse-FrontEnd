import axios from "../../utils/axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "../actions";

const setToken = token => localStorage.setItem("token", token);
export const loginHandler = (email, password, history) => async dispatch => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const response = await axios.post("/auth/login", { email, password });
    setToken(response.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    history.replace("/create");
  } catch (error) {
    if (error.response) {
      dispatch({
        type: LOGIN_ERROR,
        payload: { error: error.response.data.error }
      });
    } else {
      dispatch({
        type: LOGIN_ERROR,
        payload: { error: error.message }
      });
    }
  }
};
