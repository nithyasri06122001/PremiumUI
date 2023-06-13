import React from "react";

function Button({ type }) {
  return (
    <div className="m-3 text-center">
      <button
        className="btn btn-primary text-white pe-3 ps-3 background_label"
        type={type}
      >
        Get Quote
      </button>
    </div>
  );
}

export default Button;
