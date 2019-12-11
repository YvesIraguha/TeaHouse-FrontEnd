
import { INITIAL_ACTION, API_CALL_ERROR, API_CALL_IN_ACTION } from '../actions';


const initiateApiCall = () => ({ type: API_CALL_IN_ACTION })
const apiFailure = (error) => ({ type: API_CALL_ERROR, payload: { error } });


export const initialActionCreator = (url) => async dispatch => {
  try {
    dispatch(initiateApiCall())
    const data = await fetch(url);
    const response = await data.json();
    dispatch(({ type: INITIAL_ACTION, payload: { data: response } }))

  } catch (error) {
    dispatch(apiFailure(error.message))
  }
}
