import React from "react";

const Select = ({ labelName, formData, change, optionList }) => {
  console.log(formData);
  return (
    <div className="col-lg d-flex">
      <label className="text-nowrap col-md-3 text-center p-2 bg-primary text-white border border-info rounded">
        {labelName}
      </label>
      <select
        className="form-select "
        name="productCode"
        value={formData.productCode}
        onChange={change}
      >
        <option value="" selected disabled hidden>
          {`Select ${labelName}`}
        </option>

        {labelName === "product" && optionList
          ? Object.keys(optionList).map((key) => {
              return <option value={key}>{optionList[key]}</option>;
            })
          : null}
      </select>
    </div>
  );
};

export default Select;
