import React, { useState } from "react";
import { connect } from "react-redux";
import { resetPasswordHandler } from "../redux/actionsCreators/resetPasswordHandler";

import Input from "../Common/Input";
import Button from "../Common/Button";
import { validatePassword } from "../utils/validations";
import { renderResponseOrError } from "../utils/renderToast";

const ResetPassword = props => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const handleInputChange = (name, value) => {
    setPassword(value);
  };

  const {
    sendNewPassword,
    history,
    match: {
      params: { token }
    },
    resetPassword: { apiInProgress, resetPasswordResponse }
  } = props;
  const sendChangePassword = () => {
    const { error } = validatePassword(password);
    if (error) {
      return setError(error);
    }
    sendNewPassword(password, token, history);
  };

  if (resetPasswordResponse) {
    renderResponseOrError(resetPasswordResponse);
  }
  return (
    <div className="reset-password__container">
      <Input
        title="Type your new password"
        name="password"
        error={error}
        onChangeHandler={handleInputChange}
      />
      {/* <Input
        title="Confirm your new password"
        name="password"
        error={errors.password}
        onChangeHandler={handleInputChange}
      /> */}
      <Button
        title="Send"
        onClick={sendChangePassword}
        disabled={apiInProgress}
        className="reset-password__button"
      />
    </div>
  );
};

const mapStateToProps = ({ resetPassword }) => ({ resetPassword });
const mapDispatchToProps = dispatch => ({
  sendNewPassword: (newPassword, token, history) =>
    dispatch(resetPasswordHandler(newPassword, token, history))
});
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
