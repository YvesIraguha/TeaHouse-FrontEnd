export default (actionType, error, history, dispatch) => {
  if (error.response) {
    dispatch({
      type: actionType,
      payload: { error: error.response.data.error }
    });
    history.push("/not-found");
  } else {
    dispatch({
      type: actionType,
      payload: { error: error.message }
    });
    history.push("/not-found");
  }
};
