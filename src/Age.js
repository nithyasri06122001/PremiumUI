import React from "react";

function Age({ errorClass, errorMessage, change, validateAge, formData }) {
  return (
    <div className="col-md-6 d-flex mb-3 animation-1">
      <label className="text-nowrap col-3 text-center p-2 me-2 text-white border rounded w-25 background_label">
        Age
      </label>

      <input
        className={`form-control bg-white border border-${errorClass} rounded w-60`}
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
