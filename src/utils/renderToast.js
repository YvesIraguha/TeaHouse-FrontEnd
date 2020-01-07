import { toast } from "react-toastify";
export const renderResponseOrError = submissionResponse => {
  const renderSuccess = message => {
    toast.success(message);
  };
  const renderError = error => {
    toast.error(error);
  };
  if (submissionResponse.error) {
    return renderError(submissionResponse.error);
  } else if (submissionResponse.message) {
    return renderSuccess(submissionResponse.message);
  }
};
