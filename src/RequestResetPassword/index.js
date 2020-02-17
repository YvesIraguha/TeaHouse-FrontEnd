import React, { useState } from "react";
import { connect } from "react-redux";
import { requestResetPasswordHandler } from "../redux/actionsCreators/resetPasswordHandler";
import Input from "../Common/Input";
import Button from "../Common/Button";
import { validateEmail } from "../utils/validations";
import { renderResponseOrError } from "../utils/renderToast";
import "./index.css";

const RequestResetPassword = props => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleInputChange = (name, value) => {
    setEmail(value);
  };

  const sendChangePasswordRequest = () => {
    const { resetPasswordRequest, history } = props;
    const { error } = validateEmail(email);

    if (error) {
      return setError(error);
    }
    resetPasswordRequest(email, history);
  };
  const {
    resetPassword: { apiInProgress, requestResetPasswordResponse }
  } = props;
  if (requestResetPasswordResponse) {
    renderResponseOrError(requestResetPasswordResponse);
  }
  return (
    <div className="reset-password__container">
      <div>
        <Input
          title="Type your email"
          name="email"
          error={error}
          onChangeHandler={handleInputChange}
        />

        <Button
          title="Send"
          onClick={sendChangePasswordRequest}
          disabled={apiInProgress}
          className="reset-password__button"
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ resetPassword }) => ({ resetPassword });
const mapDispatchToProps = dispatch => ({
  resetPasswordRequest: (email, history) =>
    dispatch(requestResetPasswordHandler(email, history))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestResetPassword);
