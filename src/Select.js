import React from "react";

const Select = ({ labelName, formData, change, optionList, value, name }) => {
  console.log(formData);
  return (
    <div className=" d-flex mb-3 ">
      <label className="text-nowrap col-md-3 text-center p-2 bg-primary text-white border border-info rounded w-25">
        {labelName}
      </label>
      <select
        className="form-select w-50"
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
