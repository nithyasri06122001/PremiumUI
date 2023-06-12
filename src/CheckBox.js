import React from "react";

const CheckBox = ({ checked, handle }) => {
  return <input type="checkbox" checked={checked} onChange={handle} />;
};

export default CheckBox;
