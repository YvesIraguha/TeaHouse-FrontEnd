import axios from "../../utils/axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "../actionsConstants";
import handleErrors from "../helpers/errorHandlers";

const setToken = token => localStorage.setItem("token", token);
export const loginHandler = (email, password, history) => async dispatch => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const response = await axios.post("/auth/login", { email, password });
    setToken(response.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    history.replace("/admin");
  } catch (error) {
    handleErrors(LOGIN_ERROR, error, history, dispatch);
  }
};
