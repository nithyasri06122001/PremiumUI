import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <div className="d-flex">
    <div className="background-container">
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
      <div className="content">
       <div className="avatar">
            <a href="https://atom.starhealth.in/login">
              <img
                src="https://play-lh.googleusercontent.com/aBHF38bONKHsIkqBp8oQJ0JDh71JZ3mG4mRRHZ_sr5TY8_d2sJejvWFqmBOqfUZJ3AY"
                alt="star health"
              ></img>
            </a>
          </div>
      </div>
      </div>
  );
}

export default Landing;
