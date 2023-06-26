import React from "react";

const Select = ({ labelName, formData, change, optionList, value, name }) => {
  console.log(formData);
  return (
    <div className="col-md-6 d-flex  mb-3 animation-1">
      <label className="text-nowrap col-3 text-center p-2 me-2 text-white border rounded w-25 background_label">
        {labelName}
      </label>
      <select
        className="form-select w-60"
        name={name}
        value={value}
        onChange={change}
      >
        <option value="" selected disabled hidden>
          {`Select ${labelName}`}
        </option>

        {labelName === "Product" && optionList
          ? Object.keys(optionList).map((key) => {
              return <option value={key}>{optionList[key]}</option>;
            })
          : optionList.map((option) => {
              return <option value={option}>{option}</option>;
            })}
      </select>
    </div>
  );
};

export default Select;
