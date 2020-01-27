import axios from "../../utils/axios";
import {
  CREATION_REQUEST,
  CREATION_SUCCESS,
  CREATION_ERROR,
  DELETE_PIECE_ERROR,
  DELETE_PIECE_REQUEST,
  DELETE_PIECE_SUCCESS
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

export const deleteIndividualPiece = (pieceId, history) => async dispatch => {
  try {
    dispatch({ type: DELETE_PIECE_REQUEST });
    const token = localStorage.getItem("token");
    const response = await axios.delete(
      `${baseUrl}/individual-pieces/${pieceId}`,

      { headers: { Authorization: `Bearer ${token}` } }
    );
    dispatch({ type: DELETE_PIECE_SUCCESS, payload: response.data });
    window.location.reload();
  } catch (error) {
    if (error.response) {
      dispatch({
        type: DELETE_PIECE_ERROR,
        payload: { error: error.response.data.error }
      });
      history.replace("/not-found");
    } else {
      dispatch({
        type: DELETE_PIECE_ERROR,
        payload: { error: error.message }
      });
    }
  }
};
