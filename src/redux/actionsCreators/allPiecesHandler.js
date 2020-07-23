import axios from "../../utils/axios";
import {
  ALL_PIECES_REQUEST,
  ALL_PIECES_SUCCESS,
  ALL_PIECES_ERROR,
} from "../actionsConstants";
import handleErrors from "../helpers/errorHandlers";

export const allPiecesHandler = (page, genre, history) => async (dispatch) => {
  try {
    dispatch({ type: ALL_PIECES_REQUEST });
    const result = await axios.get(
      `/individual-pieces?page=${page}&type=${genre}`
    );
    dispatch({ type: ALL_PIECES_SUCCESS, payload: result.data });
  } catch (error) {
    handleErrors(ALL_PIECES_ERROR, error, history, dispatch);
  }
};
