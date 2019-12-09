const initialState = {}

export const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIAL STATE":
      return {
        ...state, ...action.payload
      }
    default:
      return initialState
  }
}