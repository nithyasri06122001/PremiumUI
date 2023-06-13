import React from "react";

function Age({ errorClass, errorMessage, change, validateAge, formData }) {
  return (
    <div>
      <div className="d-flex col-md-5 position-relative">
        <label className="text-nowrap  col-lg-5 text-center p-2  text-white border  rounded w-30 background_label">
          Age
        </label>

        <input
          className={`w-100 border border-${errorClass} rounded`}
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
    </div>
  );
}

export default Age;
