import axios from "../../utils/axios";
import {
  INDIVIDUAL_PIECE_ERROR,
  INDIVIDUAL_PIECE_REQUEST,
  INDIVIDUAL_PIECE_SUCCESS
} from "../actionsConstants";

export const individualPieceHandler = (pieceId, history) => async dispatch => {
  try {
    dispatch({ type: INDIVIDUAL_PIECE_REQUEST });
    const response = await axios.get(`/individual-pieces/${pieceId}`);
    dispatch({ type: INDIVIDUAL_PIECE_SUCCESS, payload: response.data });
    return response;
  } catch (error) {
    if (error.response) {
      dispatch({
        type: INDIVIDUAL_PIECE_ERROR,
        payload: { error: error.response.data.error }
      });
      history.replace("/not-found");
    } else {
      dispatch({
        type: INDIVIDUAL_PIECE_ERROR,
        payload: { error: error.message }
      });
    }
  }
};
