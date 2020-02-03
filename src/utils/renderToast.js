import { toast } from "react-toastify";
export const renderResponseOrError = response => {
  const renderSuccess = message => {
    toast.success(message);
  };
  const renderError = error => {
    toast.error(error);
  };
  if (response.error) {
    return renderError(response.error);
  } else if (response.message) {
    return renderSuccess(response.message);
  }
};
