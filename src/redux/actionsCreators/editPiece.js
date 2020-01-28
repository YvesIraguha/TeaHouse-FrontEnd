import axios from "../../utils/axios";
import {
  EDIT_PIECE_REQUEST,
  EDIT_PIECE_SUCCESS,
  EDIT_PIECE_ERROR
} from "../actionsConstants";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const editPieceActionHandler = (
  pieceId,
  content,
  title,
  type,
  author,
  history
) => async dispatch => {
  try {
    const token = localStorage.getItem("token");
    dispatch({ type: EDIT_PIECE_REQUEST });
    const response = await axios.put(
      `${baseUrl}/individual-pieces/${pieceId}`,
      {
        body: content,
        title,
        author,
        type
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    dispatch({ type: EDIT_PIECE_SUCCESS, payload: response.data });
    history.replace(`/individual-pieces/${pieceId}`);
  } catch (error) {
    if (error.response) {
      dispatch({
        type: EDIT_PIECE_ERROR,
        payload: { error: error.response.data.error }
      });
    } else {
      dispatch({
        type: EDIT_PIECE_ERROR,
        payload: { error: error.message }
      });
    }
  }
};
