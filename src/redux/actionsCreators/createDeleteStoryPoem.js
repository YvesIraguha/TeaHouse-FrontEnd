import axios from "../../utils/axios";
import {
  CREATION_REQUEST,
  CREATION_SUCCESS,
  CREATION_ERROR,
  DELETE_PIECE_ERROR,
  DELETE_PIECE_REQUEST,
  DELETE_PIECE_SUCCESS
} from "../actionsConstants";
import handleErrors from "../helpers/errorHandlers";
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
    history.push(`/individual-pieces/${response.data.individualPiece.id}`);
  } catch (error) {
    handleErrors(CREATION_ERROR, error, history, dispatch);
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
    handleErrors(DELETE_PIECE_ERROR, error, history, dispatch);
  }
};
