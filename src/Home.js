import React, { useEffect, useState } from "react";
import WomenCare from "./womenCare";
import Select from "./Select";
import Age from "./Age";
import CheckBox from "./CheckBox";
import Button from "./Button";
const initialFormData = {
  productCode: "",
  productName: "",
  policyType: "Individual",
  adultCount: "1",
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

const productList = { 1: "Women Care", 2: "Star Comprehensive" };
const policyTypeList = ["Individual", "Floater"];
const adultCountList = [1, 2];
const childCountList1 = [1, 2, 3];
const childCountList2 = [0, 1, 2, 3];
const sumInsuredListProduct1 = [
  500000, 1000000, 1500000, 2000000, 2500000, 5000000, 10000000,
];
const sumInsuredListProduct2 = [
  500000, 7500000, 1000000, 1500000, 2000000, 2500000, 5000000, 10000000,
];
const paymentPlanList = [
  "Full Payment",
  "Half-Yearly EMI Plan",
  "Quarterly EMI Plan",
];

function Home() {
  const [premium, setPremium] = useState(null);
  const [formData, setFormData] = useState(initialFormData);
  const [errorClass, setErrorClass] = useState("secondary-light");
  const [errorMessage, setErrorMessage] = useState(null);
  const [sumInsuredList, setSumInsuredList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isOptionalChecked, setIsOptionalChecked] = useState(false);
  const [optionalSumInsuredList, setoptionalSumInsuredList] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setPremium(null);
    setFormData({
      ...formData,
      age: "",
      sumInsured: "",
      childCount: "",
      policyType: "Individual",
    });
    setErrorClass("secondary-light");
    setErrorMessage(null);
    switch (formData.productCode) {
      case "1":
        setSumInsuredList(sumInsuredListProduct1);
        break;
      case "2":
        setSumInsuredList(sumInsuredListProduct2);
        break;
      default:
        setSumInsuredList([]);
    }
  }, [formData.productCode]);

  const validateAge = (e) => {
    if (e.target.value === "") {
      setErrorClass("danger");
      setErrorMessage("Age is mandatory");
    } else if (
      (formData.productCode === "1" || formData.productCode === "4") &&
      (formData.age < 18 || formData.age > 100)
    ) {
      setErrorMessage("Age must be in between 18 to 100");
      setErrorClass("danger");
    } else if (
      (formData.productCode === "2" || formData.productCode === "5") &&
      (formData.age < 1 || formData.age > 100)
    ) {
      setErrorMessage("Invalid age");
      setErrorClass("danger");
    } else if (
      formData.productCode === "3" &&
      (formData.age < 60 || formData.age > 75)
    ) {
      setErrorMessage("Age must be in between 60 to 75");
      setErrorClass("danger");
    } else {
      setErrorClass("secondary-light");
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8081/premium", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setPremium(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  const handleOptionalCheck = () => {
    setIsOptionalChecked(!isOptionalChecked);
  };
  useEffect(() => {
    if (isOptionalChecked) {
      setFormData({ ...formData, optionalCover: "Yes" });
    } else if (!isOptionalChecked) {
      setFormData({ ...formData, optionalCover: "No", optionalSumInsured: "" });
    }
  }, [isOptionalChecked]);

  useEffect(() => {
    if (isChecked) {
      setFormData({ ...formData, starExtraProtect: "Yes" });
    } else if (!isChecked) {
      setFormData({ ...formData, starExtraProtect: "No" });
    }
  }, [isChecked]);

  useEffect(() => {
    let optionalSum = sumInsuredListProduct1.filter((item) => {
      return item <= formData.sumInsured && item < 5000000;
    });
    setoptionalSumInsuredList(optionalSum);
  }, [formData.sumInsured, isOptionalChecked]);

  return (
    <div className="shadow  bg-light bg-gradient m-md-5 border rounded d-block ">
      <div className="row m-3">
        <p className="col-md">Quick Quote</p>
        <Select
          labelName="Product"
          formData={formData}
          change={handleChange}
          optionList={productList}
          name="productCode"
          value={formData.productCode}
        />
        <form onSubmit={handleSubmit}>
          <Select
            labelName="Policy Type"
            formData={formData}
            change={handleChange}
            optionList={policyTypeList}
            name="policyType"
            value={formData.policyType}
          />
          {formData.policyType === "Floater" && (
            <Select
              labelName="No Of Adults"
              formData={formData}
              change={handleChange}
              name="adultCount"
              value={formData.adultCount}
              optionList={adultCountList}
            />
          )}
          {formData.policyType === "Floater" &&
            (formData.adultCount === "1" ? (
              <Select
                labelName="No Of Child"
                formData={formData}
                change={handleChange}
                name="childCount"
                value={formData.childCount}
                optionList={childCountList1}
              />
            ) : (
              <Select
                labelName="No Of Child"
                formData={formData}
                change={handleChange}
                name="childCount"
                value={formData.childCount}
                optionList={childCountList2}
              />
            ))}

          <Age
            errorClass={errorClass}
            errorMessage={errorMessage}
            formData={formData}
            validateAge={validateAge}
            change={handleChange}
          />
          <Select
            labelName="sum Insured"
            formData={formData}
            change={handleChange}
            name="sumInsured"
            value={formData.sumInsured}
            optionList={sumInsuredList}
          />
          {formData.productCode === "1" && (
            <div className="col-md-12">
              <div className="d-flex gap-2">
                <CheckBox
                  isOptionalChecked={isOptionalChecked}
                  handleOptionalCheck={handleOptionalCheck}
                />
                <p className="mt-3">
                  Do you want optional cover? - Lump sum on diagnosis of cancer
                </p>
              </div>
            </div>
          )}
          {formData.productCode === "1" && isOptionalChecked && (
            <Select
              labelName="Lumpsum Cover"
              formData={formData}
              change={handleChange}
              name="optionalSumInsured"
              value={formData.optionalSumInsured}
              optionList={optionalSumInsuredList}
            />
          )}

          <Select
            labelName="Payment Method"
            formData={formData}
            change={handleChange}
            name="paymentPlan"
            value={formData.paymentPlan}
            optionList={paymentPlanList}
          />
          <Button type="submit" />
        </form>
        <div className="d-flex w-80 text-center justify-content-around">
          {premium
            ? Object.keys(premium).map((key) => {
                return (
                  <div className="mt-5" key={key}>
                    {formData.productCode === "4" ? (
                      <p className="text-secondary">Premium</p>
                    ) : (
                      <p className="text-secondary">{key} YEAR</p>
                    )}

                    <p className="border border-3 border-primary rounded p-2 text-center">
                      ₹ {premium[key]}
                    </p>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Home;
