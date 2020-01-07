import axios from "../../utils/axios";
import {
  ON_INPUT_CHANGE,
  INPUT_ERROR,
  SUBMISSIONS_REQUEST,
  SUBMISSIONS_ERROR,
  SUBMISSIONS_SUCCESS,
  CLEAR_SUBMISSIONS_RESPONSE
} from "../actions";

export const inputChangeHandler = (name, value) => ({
  type: ON_INPUT_CHANGE,
  payload: { [name]: value }
});

export const inputErrorHandler = (name, error) => ({
  type: INPUT_ERROR,
  payload: { [name]: error }
});

export const clearSubmissionResponse = () => ({
  type: CLEAR_SUBMISSIONS_RESPONSE
});

export const sendWork = submissionWork => async dispatch => {
  try {
    dispatch({ type: SUBMISSIONS_REQUEST });
    const file = submissionWork.file;
    const data = new FormData();
    data.append("file", file, file.name);
    data.append("fullName", submissionWork.fullName);
    data.append("email", submissionWork.email);
    data.append("type", submissionWork.type);
    const result = await axios.post("/users/submission", data);
    dispatch({
      type: SUBMISSIONS_SUCCESS,
      payload: { message: result.data.message }
    });
  } catch (error) {
    dispatch({ type: SUBMISSIONS_ERROR, payload: { error: error.message } });
  }
};
