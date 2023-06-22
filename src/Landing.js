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
      <div>
       <p>hi</p>
      </div>
      </div>
  );
}

export default Landing;
