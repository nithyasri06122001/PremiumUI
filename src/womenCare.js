import React from "react";
const sumInsuredListProduct1 = [
  500000, 1000000, 1500000, 2000000, 2500000, 5000000, 10000000,
];
function WomenCare(props) {
  return (
    <div>
      <form onSubmit={props.submit}>
        <div className="ms-5 ps-md-3 d-flex flex-wrap flex-fill gap-4">
          <div className="d-flex col-lg-5">
            <label className="text-nowrap col-md-5 text-center p-md-2 bg-primary text-white border border-info rounded">
              Policy Type
            </label>
            <select
              className="form-select"
              name="policyType"
              value={props.formData.policyType}
              onChange={props.change}
            >
              <option type="text" value="Individual">
                Individual
              </option>
              <option type="text" value="Floater">
                Floater
              </option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default WomenCare;
