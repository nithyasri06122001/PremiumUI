import React, { useState } from "react";
const sumInsuredListProduct1 = [
  500000, 1000000, 1500000, 2000000, 2500000, 5000000, 10000000,
];
function WomenCare({
  submit,
  change,
  formData,
  errorClass,
  errorMessage,
  validateAge,
}) {
  return (
    <div>
      <form onSubmit={submit}>
        <div className="ms-5 ps-md-3 d-flex flex-wrap flex-fill gap-4">
          <div className="d-flex col-lg-5">
            <label className="text-nowrap col-md-5 text-center p-md-2 bg-primary text-white border border-info rounded">
              Policy Type
            </label>
            <select
              className="form-select"
              name="policyType"
              value={formData.policyType}
              onChange={change}
            >
              <option type="text" value="Individual">
                Individual
              </option>
              <option type="text" value="Floater">
                Floater
              </option>
            </select>
          </div>
          <div className="d-flex col-md-5 position-relative">
            <label className="text-nowrap  col-lg-5 text-center p-2 bg-primary text-white border border-info rounded">
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
      </form>
    </div>
  );
}

export default WomenCare;
