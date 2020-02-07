import React, { useState } from "react";
import { connect } from "react-redux";
import { requestResetPasswordHandler } from "../redux/actionsCreators/resetPasswordHandler";
import Input from "../Common/Input";
import Button from "../Common/Button";
import { validateEmail } from "../utils/validations";

const RequestResetPassword = props => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const handleInputChange = (name, value) => {
    setEmail(value);
  };

  const sendChangePasswordRequest = () => {
    const { resetPasswordRequest } = props;
    const error = validateEmail(email);
    if (error) {
      return setErrors({ ...error });
    }
    resetPasswordRequest(email);
  };

  return (
    <div>
      <Input
        title="Type your email"
        name="email"
        error={errors.email}
        onChangeHandler={handleInputChange}
      />

      <Button
        title="Send"
        onClick={sendChangePasswordRequest}
        disabled={false}
      />
    </div>
  );
};

const mapStateToProps = ({ resetPassword }) => ({ resetPassword });
const mapDispatchToProps = dispatch => ({
  resetPasswordRequest: email => dispatch(requestResetPasswordHandler(email))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestResetPassword);
