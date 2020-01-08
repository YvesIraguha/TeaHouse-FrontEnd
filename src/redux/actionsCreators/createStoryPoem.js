import axios from "../../utils/axios";
import {
  CREATION_REQUEST,
  CREATION_SUCCESS,
  CREATION_ERROR
} from "../actionsConstants";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const createStoryPoemHandler = (
  content,
  title,
  type,
  author,
  history
) => async dispatch => {
  try {
    const token = localStorage.getItem("token");
    dispatch({ type: CREATION_REQUEST });
    const response = await axios.post(
      `${baseUrl}/individual-pieces`,
      {
        body: content,
        title,
        author,
        type
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    dispatch({ type: CREATION_SUCCESS, payload: response.data });
    history.replace("/");
  } catch (error) {
    if (error.response) {
      dispatch({
        type: CREATION_ERROR,
        payload: { error: error.response.data.error }
      });
    } else {
      dispatch({
        type: CREATION_ERROR,
        payload: { error: error.message }
      });
    }
  }
};
