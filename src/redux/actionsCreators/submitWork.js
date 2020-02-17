import axios from "../../utils/axios";
import {
  SUBMISSIONS_REQUEST,
  SUBMISSIONS_ERROR,
  SUBMISSIONS_SUCCESS
} from "../actionsConstants";

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
    dispatch({
      type: SUBMISSIONS_ERROR,
      payload: { error: error.response.data.error }
    });
  }
};
