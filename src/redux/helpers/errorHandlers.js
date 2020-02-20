export default (actionType, error, history, dispatch) => {
  if (error.response) {
    dispatch({
      type: actionType,
      payload: { error: error.response.data.error }
    });
    switch (error.response.status) {
      case 500:
        history.push({
          pathname: "/not-found",
          state: { error: "Internal server error", statusCode: 500 }
        });
        break;
      case 404:
        history.push({
          pathname: "/not-found",
          state: { error: "We can't seem to find that", statusCode: 404 }
        });
        break;
      case 403:
        history.push({
          pathname: "/not-found",
          state: { error: "Permission denied", statusCode: 403 }
        });
        break;
      case 401:
        history.push({
          pathname: "/not-found",
          state: { error: "Unauthenticated, please login", statusCode: 401 }
        });
        break;
      case 400:
        history.push({
          pathname: "/not-found",
          state: { error: "Invalid input", statusCode: 400 }
        });
        break;
      default:
        history.push({
          pathname: "/not-found",
          state: { error: "We can't seem to find that", statusCode: 404 }
        });
    }
  } else {
    dispatch({
      type: actionType,
      payload: { error: error.message }
    });
    history.push({
      pathname: "/not-found",
      state: { error: "We can't seem to find that", statusCode: 404 }
    });
  }
};
