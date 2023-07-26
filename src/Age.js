import React from "react";

function Age({ errorClass, errorMessage, change, validate, formData ,label,name}) {
  return (
    <div className="col-md-6 d-flex mb-3 animation-1">
      <label className="text-nowrap col-3 text-center p-2 me-2 text-white border rounded w-25 background_label">
        {label}
      </label>

      <input
        className={`form-control bg-white border border-${errorClass} rounded w-60`}
        type="number"
        name={name}
        value={formData}
        onChange={change}
        placeholder={`Enter ${name}`}
        onBlur={validate}
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
