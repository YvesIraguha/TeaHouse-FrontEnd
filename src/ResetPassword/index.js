import React, { useState } from "react";
import { connect } from "react-redux";
import { resetPasswordHandler } from "../redux/actionsCreators/resetPasswordHandler";

import Input from "../Common/Input";
import Button from "../Common/Button";
import { validatePassword } from "../utils/validations";

const ResetPassword = props => {
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const handleInputChange = (name, value) => {
    setPassword(value);
  };

  const sendChangePassword = () => {
    const { sendNewPassword } = props;
    const error = validatePassword(password);
    if (error) {
      return setErrors({ ...error });
    }
    sendNewPassword(password);
  };

  return (
    <div>
      <Input
        title="Type your new password"
        name="password"
        error={errors.password}
        onChangeHandler={handleInputChange}
      />
      <Input
        title="Confirm your new password"
        name="password"
        error={errors.password}
        onChangeHandler={handleInputChange}
      />
      <Button title="Send" onClick={sendChangePassword} disabled={false} />
    </div>
  );
};

const mapStateToProps = ({ resetPassword }) => ({ resetPassword });
const mapDispatchToProps = dispatch => ({
  sendNewPassword: (newPassword, token) =>
    dispatch(resetPasswordHandler(newPassword, token))
});
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
