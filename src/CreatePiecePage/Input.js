import React from "react";

const Input = ({ value, errors, placeholder, name, onChange }) => {
  return (
    <div className="create_piece_input">
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      <span className="error">{errors[name]}</span>
    </div>
  );
};

export default Input;
