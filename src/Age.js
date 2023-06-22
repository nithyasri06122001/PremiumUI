import React from "react";

function Age({ errorClass, errorMessage, change, validateAge, formData }) {
  return (
    <div className="d-flex position-relative mb-4 animation-1">
      <label className="text-nowrap col-lg-5 text-center p-2 background_label text-white border  rounded w-25">
        Age
      </label>

      <input
        className={`w-50 border border-${errorClass} rounded`}
        type="number"
        name="age"
        value={formData.age}
        onChange={change}
        placeholder="Enter Age"
        onBlur={validateAge}
      />
      {errorClass === "danger" && (
        <p
          className={`position-absolute text-nowrap top-100 text-${errorClass}`}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export default Age;
