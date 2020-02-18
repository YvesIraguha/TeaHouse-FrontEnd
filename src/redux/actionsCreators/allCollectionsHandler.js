import axios from "../../utils/axios";
import {
  ALL_COLLECTIONS_REQUEST,
  ALL_COLLECTIONS_SUCCESS,
  ALL_COLLECTIONS_ERROR
} from "../actionsConstants";
import handleErrors from "../helpers/errorHandlers";

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
    handleErrors(ALL_COLLECTIONS_ERROR, error, history, dispatch);
  }
};
