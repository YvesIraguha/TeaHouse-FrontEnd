import React from "react";
import "./index.css";
const Button = ({ title, onClick, disabled, className }) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
