import axios from "../../utils/axios";
import {
  ALL_COLLECTIONS_REQUEST,
  ALL_COLLECTIONS_SUCCESS,
  ALL_COLLECTIONS_ERROR
} from "../actionsConstants";

export const allCollectionsHandler = (
  page,
  genre,
  history
) => async dispatch => {
  try {
    dispatch({ type: ALL_COLLECTIONS_REQUEST });
    const result = await axios.get(`/collections?page=${page}&type=${genre}`);
    dispatch({ type: ALL_COLLECTIONS_SUCCESS, payload: result.data });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: ALL_COLLECTIONS_ERROR,
        payload: { error: error.response.data.error }
      });
      history.push("/not-found");
    } else {
      dispatch({
        type: ALL_COLLECTIONS_ERROR,
        payload: { error: error.message }
      });
      history.push("/not-found");
    }
  }
};
