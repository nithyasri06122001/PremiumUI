import React from "react";

const CheckBox = ({ isOptionalChecked, handleOptionalCheck }) => {
  return (
    <div className="">
      <input
        type="checkbox"
        checked={isOptionalChecked}
        onChange={handleOptionalCheck}
      />
    </div>
  );
};

export default CheckBox;
