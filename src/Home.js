import React from "react";

function Home() {
  return (
    <div>
      <div className="col-lg d-flex">
        <label className="text-nowrap col-md-3 text-center p-2 bg-primary text-white border border-info rounded">
          Product
        </label>
        <select className="form-select " name="productCode">
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
  );
}

export default Home;
