import React, { useState } from "react";
const initialFormData = {
  productCode: "",
  productName: "",
  policyType: "Individual",
  adultCount: 1,
  childCount: "",
  starExtraProtect: "No",
  sumInsured: "",
  paymentPlan: "Full Payment",
  age: "",
  optionalCover: "No",
  optionalSumInsured: "",
  policyPlan: "",
  policyDays: "",
};

function Home() {
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="shadow  bg-light bg-gradient m-md-5 border rounded d-block ">
      <div className="row m-3">
        <p className="col-md">Quick Quote</p>
        <div className="col-lg d-flex">
          <label className="text-nowrap col-md-3 text-center p-2 bg-primary text-white border border-info rounded">
            Product
          </label>
          <select
            className="form-select "
            name="productCode"
            value={formData.productCode}
            onChange={handleChange}
          >
            <option value="" selected disabled hidden>
              Select Product
            </option>
            <option type="number" value="1">
              Women Care
            </option>
            <option type="number" value="2">
              Star Comprehensive
            </option>
            <option type="number" value="3">
              Senior Citizen Red Carpet
            </option>
            <option type="number" value="4">
              Star Micro Rural and Farmers Care
            </option>
            <option type="number" value="5">
              Star Hospital Cash
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Home;
