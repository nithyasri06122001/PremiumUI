import React, { useEffect, useState } from "react";
import WomenCare from "./womenCare";
import Select from "./Select";
import Age from "./Age";
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

const productList = { 1: "Women Care", 2: "Star Comprehensive" };
const policyTypeList = ["Individual", "Floater"];

function Home() {
  const [premium, setPremium] = useState(null);
  const [formData, setFormData] = useState(initialFormData);
  const [errorClass, setErrorClass] = useState("secondary-light");
  const [errorMessage, setErrorMessage] = useState(null);

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
    await fetch("http://139.59.95.35:8081/premium", {
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
  return (
    <div className="shadow  bg-light bg-gradient m-md-5 border rounded d-block ">
      <div className="row m-3">
        <p className="col-md">Quick Quote</p>
        <Select
          labelName="product"
          formData={formData}
          change={handleChange}
          optionList={productList}
        />

        <Age
          errorClass={errorClass}
          errorMessage={errorMessage}
          formData={formData}
          validateAge={validateAge}
          change={handleChange}
        />
      </div>
    </div>
  );
}

export default Home;
