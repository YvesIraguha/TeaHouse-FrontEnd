import axios from "../../utils/axios";
import {
  ALL_PIECES_REQUEST,
  ALL_PIECES_SUCCESS,
  ALL_PIECES_ERROR
} from "../actionsConstants";

export const allPiecesHandler = (page, genre, history) => async dispatch => {
  try {
    dispatch({ type: ALL_PIECES_REQUEST });
    const result = await axios.get(
      `/individual-pieces?page=${page}&type=${genre}`
    );
    dispatch({ type: ALL_PIECES_SUCCESS, payload: result.data });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: ALL_PIECES_ERROR,
        payload: { error: error.response.data.error }
      });
      history.push("/not-found");
    } else {
      dispatch({
        type: ALL_PIECES_ERROR,
        payload: { error: error.message }
      });
      history.push("/not-found");
    }
  }
};
