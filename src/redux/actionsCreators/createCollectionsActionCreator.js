import axios from "../../utils/axios";
import {
  CREATE_COLLECTION_REQUEST,
  CREATE_COLLECTION_SUCCESS,
  CREATE_COLLECTION_ERROR
} from "../actionsConstants";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const createCollectionActionCreator = (
  newCollection,
  history
) => async dispatch => {
  try {
    dispatch({ type: CREATE_COLLECTION_REQUEST });
    const file = newCollection.file;
    const previewImage = newCollection.previewImage;
    const data = new FormData();
    data.append("file", file, file.name);
    data.append("previewImage", previewImage, previewImage.name);
    data.append("author", newCollection.author);
    data.append("title", newCollection.title);
    data.append("type", newCollection.type);
    const token = localStorage.getItem("token");
    const response = await axios.post(`${baseUrl}/collections`, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: CREATE_COLLECTION_SUCCESS, payload: response.data });
    history.replace(`/collections/${response.data.createdCollection.id}`);
  } catch (error) {
    if (error.response) {
      dispatch({
        type: CREATE_COLLECTION_ERROR,
        payload: { error: error.response.data.error }
      });
    } else {
      dispatch({
        type: CREATE_COLLECTION_ERROR,
        payload: { error: error.message }
      });
    }
  }
};
