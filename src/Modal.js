import React, { useEffect, useState } from 'react'
import { css } from "@emotion/react";
import {HashLoader } from "react-spinners";

const override = css`
display: block;
margin: 0 auto;
color:red;
`;

function Modal({premium,formData,modalHandle}) {
  const [isLoading,setIsLoading]=useState(true)

  const handle=()=>{
modalHandle();
  }
  useEffect(()=>{
    setInterval(() => {
      setIsLoading(false) 
    },1000)
  },[])

  return (

    <div className="premiumModal-container">
      {isLoading?
<div className="loader">
<HashLoader css={override} size={50} />
</div>:

    <div className="premiumModal">
      
       <h2>Premium</h2>
       <div className='premiums'>

    {premium ?  Object.keys(premium).map((key) => {
      return (
    <div className="mt-3 d-flex align-items-center justify-content-center row" key={key}>
      {formData.productCode === "4" ? (
        <p className="text-secondary">Premium</p>
        ) : (
          <p className="text-secondary">{key} YEAR</p>
          )}

      <p className="border_color premium">₹ {premium[key]}</p>
    </div>
  );
}):null}
</div>
    <footer>
<button className='btn btn-secondary'  onClick={handle} >Close</button>
    </footer>
    </div>}
    </div>
  )
}

export default Modal