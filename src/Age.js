import React from "react";

function Age({ errorClass, errorMessage, change, validateAge, formData }) {
  return (
    <div>
      <div className="d-flex position-relative mb-4">
        <label className="text-nowrap col-lg-5 text-center p-2 bg-secondary text-white border border-info rounded w-25">
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
    </div>
  );
}

export default Age;
