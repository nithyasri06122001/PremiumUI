import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

const productList = {
  1: "Women Care",
  2: "Star Comprehensive",
  3: "Senior Citizen's Red Carpet",
  4: "Star Micro Rural and Farmers Care",
  5: "Star Hospital Cash",
};
const policyTypeList = ["Individual", "Floater"];
const adultCountList = [1, 2];
const childCountList1 = [1, 2, 3];
const childCountList2 = [0, 1, 2, 3];
const sumInsuredListProduct1 = [
  500000, 1000000, 1500000, 2000000, 2500000, 5000000, 10000000,
];
const sumInsuredListProduct2 = [
  500000, 750000, 1000000, 1500000, 2000000, 2500000, 5000000, 7500000,
  10000000,
];
const sumInsuredListProduct3 = [100000, 200000, 300000, 400000, 500000, 750000];

const sumInsuredListProduct3F = [1000000, 1500000, 2000000, 2500000];
const sumInsuredListProduct5 = [1000, 2000, 3000];

const paymentPlanList = [
  "Full Payment",
  "Half-Yearly EMI Plan",
  "Quarterly EMI Plan",
];

const policyPlanList = ["Basic Plan", "Enhanced Plan"];

const hospitalPolicyDaysBasic = [30, 60, 90, 120, 180];
const hospitalPolicyDaysEnhanced = [90, 120, 180];

function Home() {
  const [premium, setPremium] = useState(null);
  const [formData, setFormData] = useState(initialFormData);
  const [errorClass, setErrorClass] = useState("secondary-light");
  const [errorMessage, setErrorMessage] = useState(null);
  const [sumInsuredList, setSumInsuredList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isOptionalChecked, setIsOptionalChecked] = useState(false);
  const [optionalSumInsuredList, setoptionalSumInsuredList] = useState([]);
  const [adultLabel, setAdultLabel] = useState("No of Adult");
  const [childCount, setChildCount] = useState([]);
  const [policyDaysList, setPolicyDaysList] = useState([]);

  useEffect(() => {
    if (formData.productCode === "4" && formData.adultCount === "1") {
      setChildCount([1, 2]);
    } else if (formData.productCode === "4" && formData.adultCount === "2") {
      setChildCount([0, 1, 2]);
    } else if (formData.adultCount === "1") {
      setChildCount(childCountList1);
    } else if (formData.adultCount === "2") {
      setChildCount(childCountList2);
    }
  }, [formData.adultCount]);

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
      case "3":
        if (formData.policyType === "Floater") {
          setSumInsuredList(sumInsuredListProduct3F);
          break;
        } else {
          setSumInsuredList(sumInsuredListProduct3);
          break;
        }
      case "4":
        if (formData.policyType === "Floater") {
          setSumInsuredList([200000]);
          break;
        } else {
          setSumInsuredList([100000]);
          break;
        }
      case "5":
        setSumInsuredList(sumInsuredListProduct5);
        break;

      default:
        setSumInsuredList([]);
    }
    if (formData.productCode === "3") {
      setAdultLabel("No of Senior Citizens");
    }
    if (formData.productCode !== "3") {
      setAdultLabel("No of Adult");
    }
  }, [formData.productCode, formData.policyType]);

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

    if (formData.productCode === "") {
      return toast.error("Select any product");
    }
    if (formData.age === "") {
      return toast.error("Enter age");
    }
    if (
      formData.policyType === "Floater" &&
      formData.childCount === "" &&
      formData.productCode != "3"
    ) {
      return toast.error("Select child count");
    }
    // if (
    //   formData.productCode === "3" &&
    //   formData.policyType === "Floater" &&
    //   formData.adultCount !== "2"
    // ) {
    //   return toast.error("Enter a valid No of senior count");
    // }

    if (formData.productCode === "5") {
      if (formData.policyPlan === "") {
        return toast.error("Select your plan type");
      }
      if (formData.policyDays === "") {
        return toast.error("Select policy days");
      }
    }

    if (!(formData.sumInsured > 0)) {
      return toast.error("Enter valid Sum Insured");
    }
    if (
      isOptionalChecked &&
      formData.optionalSumInsured === "" &&
      formData.productCode === "1"
    ) {
      return toast.error("Select Lumpsum cover");
    }
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

  useEffect(() => {
    if (formData.policyType === "Individual") {
      setFormData({
        ...formData,
        sumInsured: "",
        adultCount: "1",
        childCount: "",
      });
    }
    if (formData.policyType === "Floater") {
      setFormData({
        ...formData,
        sumInsured: "",
      });
    }
  }, [formData.policyType]);

  useEffect(() => {
    if (formData.productCode === "1") {
      setFormData({ ...formData, optionalSumInsured: "" });
    }

    if (formData.productCode === "3" && formData.policyType === "Floater") {
      setFormData({
        ...formData,
        adultCount: 2,
      });
    }
  }, [formData.sumInsured]);

  useEffect(() => {
    if (formData.policyPlan === "Basic Plan") {
      setPolicyDaysList(hospitalPolicyDaysBasic);
    } else {
      setPolicyDaysList(hospitalPolicyDaysEnhanced);
    }
  }, [formData.policyPlan]);

  return (
    <div className="shadow  bg-light bg-gradient m-md-5 border rounded d-block ">
      <div className="row m-3">
        <p className="col-md">Quick Quote</p>
        <Select
          labelName="Product"
          className="row m-3"
          formData={formData}
          change={handleChange}
          optionList={productList}
          name="productCode"
          value={formData.productCode}
        />
      </div>
      <form onSubmit={handleSubmit} className="row m-3 gap-4">
        <Select
          labelName="Policy Type"
          className="row m-3"
          formData={formData}
          change={handleChange}
          optionList={policyTypeList}
          name="policyType"
          value={formData.policyType}
        />
        {((formData.policyType === "Floater" && formData.productCode !== "3") ||
          (formData.productCode === "3" &&
            formData.policyType === "Individual")) && (
          <Select
            labelName={adultLabel}
            className="row m-3"
            formData={formData}
            change={handleChange}
            name="adultCount"
            value={formData.adultCount}
            optionList={adultCountList}
          />
        )}
        {formData.productCode === "3" && formData.policyType === "Floater" && (
          <Select
            labelName={adultLabel}
            formData={formData}
            className="row m-3"
            change={handleChange}
            name="adultCount"
            value={formData.adultCount}
            optionList={[2]}
          />
        )}

        {formData.policyType === "Floater" && formData.productCode !== "3" && (
          <Select
            labelName="No Of Child"
            className="row m-3"
            formData={formData}
            change={handleChange}
            name="childCount"
            value={formData.childCount}
            optionList={childCount}
          />
        )}

        <Age
          errorClass={errorClass}
          errorMessage={errorMessage}
          formData={formData}
          className="row m-3"
          validateAge={validateAge}
          change={handleChange}
        />
        {formData.productCode === "5" && (
          <Select
            labelName="Policy Plan"
            formData={formData}
            change={handleChange}
            className="row m-3"
            name="policyPlan"
            value={formData.PolicyPlan}
            optionList={policyPlanList}
          />
        )}
        {formData.productCode === "5" && (
          <Select
            labelName="Policy Days"
            formData={formData}
            change={handleChange}
            className="row m-3"
            name="policyDays"
            value={formData.policyDays}
            optionList={policyDaysList}
          />
        )}

        <Select
          labelName="Sum Insured"
          formData={formData}
          change={handleChange}
          name="sumInsured"
          className="row m-3"
          value={formData.sumInsured}
          optionList={sumInsuredList}
        />

        {formData.productCode === "1" && (
          <div className="col-md-12">
            <div className="d-flex gap-2">
              <CheckBox
                checked={isOptionalChecked}
                handle={handleOptionalCheck}
              />
              <p className="mt-3">
                Do you want optional cover? - Lump sum on diagnosis of cancer
              </p>
            </div>
          </div>
        )}
        {formData.productCode === "2" && formData.sumInsured >= 1000000 && (
          <div className="col-lg-12">
            <p>Do you want STAR EXTRA PROTECT ?</p>
            <div className="d-flex gap-2">
              <CheckBox checked={isChecked} handle={handleCheck} />
              <p className="mt-3">SECTION 1</p>
            </div>
            <p>1. Enhanced Room Rent</p>

            <p>2. Claim Guard (Consumables cover)</p>

            <p>3. Enhanced Limit for Modern Treatments</p>

            <p>4. Enhanced Limit for Ayush Treatment</p>

            <p>5. Home care treatment</p>

            <p>6. Bonus Guard</p>
          </div>
        )}
        {formData.productCode === "1" && isOptionalChecked && (
          <Select
            className="row m-3"
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
      <div className="d-flex w-80 text-center justify-content-around w-md-100">
        {premium
          ? Object.keys(premium).map((key) => {
              return (
                <div className="mt-3" key={key}>
                  {formData.productCode === "4" ? (
                    <p className="text-secondary">Premium</p>
                  ) : (
                    <p className="text-secondary">{key} YEAR</p>
                  )}

                  <p className="border_color">₹ {premium[key]}</p>
                </div>
              );
            })
          : null}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home;
