import { INITIAL_ACTION, API_CALL_ERROR, API_CALL_IN_ACTION } from '../actions'

const initialState = { apiInProgress: 0 }

export const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_ACTION:
      return {
        ...state, ...action.payload,
        apiInProgress: state.apiInProgress - 1
      }
    case API_CALL_ERROR:
      return {
        ...state, ...action.payload,
        apiInProgress: state.apiInProgress - 1
      }
    case API_CALL_IN_ACTION:
      return {
        ...state,
        apiInProgress: state.apiInProgress + 1
      }
    default:
      return initialState
  }
}
