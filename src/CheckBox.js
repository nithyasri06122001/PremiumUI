import React from "react";

const CheckBox = ({ isOptionalChecked, handleOptionalCheck }) => {
  return (
    <input
      type="checkbox"
      checked={isOptionalChecked}
      onChange={handleOptionalCheck}
    />
  );
};

export default CheckBox;
