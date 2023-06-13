import React from "react";

const Select = ({ labelName, formData, change, optionList, value, name }) => {
  console.log(formData);
  return (
    <div className="col-lg d-flex ">
      <label className="text-nowrap col-md-3 text-center p-2  text-white border  rounded w-30 background_label">
        {labelName}
      </label>
      <select
        className="form-select "
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
