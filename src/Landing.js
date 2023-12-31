import React from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  const handleChange = () => {
    setTimeout(()=>{
      navigate("/quote");
    },500)
  };
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
        <div className="card text-wrap gap-5">
          <div>

          <div className="sm-avatar">
            <a href="https://atom.starhealth.in/login">
              <img
                src="https://play-lh.googleusercontent.com/aBHF38bONKHsIkqBp8oQJ0JDh71JZ3mG4mRRHZ_sr5TY8_d2sJejvWFqmBOqfUZJ3AY"
                alt="star health"
              ></img>
            </a>
          </div>
          </div>
              <div>
                <h4 className="card-title">Star Health Insurance</h4>
              </div>
              <div className="">
                <p>
                    Get Your Premium
                </p>
              </div>
              <div>
                <button onClick={handleChange}>
                    Get Your Quote
                </button>
              </div>
        </div>
     
      </div>
      </div>
  );
}

export default Landing;
