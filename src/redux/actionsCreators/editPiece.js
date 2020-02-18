import axios from "../../utils/axios";
import {
  EDIT_PIECE_REQUEST,
  EDIT_PIECE_SUCCESS,
  EDIT_PIECE_ERROR
} from "../actionsConstants";
import handleErrors from "../helpers/errorHandlers";
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
    handleErrors(EDIT_PIECE_ERROR, error, history, dispatch);
  }
};
