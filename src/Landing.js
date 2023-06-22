import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <div className=" background d-flex">
    <div className="col-md-7  background-container">
    <div className="avatar">
            <a href="https://atom.starhealth.in/login">
              <img
                src="https://play-lh.googleusercontent.com/aBHF38bONKHsIkqBp8oQJ0JDh71JZ3mG4mRRHZ_sr5TY8_d2sJejvWFqmBOqfUZJ3AY"
                alt="star health"
              ></img>
            </a>
          </div>
      <div className="background-image">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="0"
          height="0"
        >
          <defs>
            <clipPath id="clipPath" clipPathUnits="objectBoundingBox">
              <path d="M0,1 0,1,0,0,1,0 C0.8,0,1,0.9,0.5,1"></path>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
      <div className="col col-md-5 content align-items-center d-flex justify-content-center">
        <div className="card gap-5">
              <div className="">
                <h4 className="text-uppercase fw-bold">Star Health Insurance</h4>
              </div>
              <div className="">
                <p>
                    Get Your Premium
                </p>
              </div>
              <div>
                <button className="">
                    Get Your Quote
                </button>
              </div>
        </div>
     
      </div>
      </div>
  );
}

export default Landing;
