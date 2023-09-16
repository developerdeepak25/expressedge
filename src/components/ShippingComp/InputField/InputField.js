import React, { useState } from "react";
import "./InputField.scss";

const InputField = ({ id, placeHolder, name, required }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasContent, setHasContent] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e) => setHasContent(e.target.value !== "");

  const labelStyle = {
    transform:
      isFocused || hasContent ? "translateY(-1.5rem)" : "translateY(1.2rem)",
    fontSize: isFocused || hasContent ? "1.4rem" : "1.8rem",
  };

  return (
    <div className="input-field-wrapper">
      <input
        type="text"
        name={name}
        id={id}
        className="input-field"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <label htmlFor={id} className="input-label" style={labelStyle}>
        {placeHolder}
        {required ? <div className="required">*</div> : ""}
      </label>
    </div>
  );
};

export default InputField;
