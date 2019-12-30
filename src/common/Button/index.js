import React from "react";
import "./index.css";
const Button = ({ title, onClick, disabled }) => {
  return (
    <button className="btn" onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
