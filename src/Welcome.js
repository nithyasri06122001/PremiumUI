import React from 'react'
import './Welcome.css'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
    const navigate=useNavigate();

  const handleChange=()=>{
    navigate('/quote')
  }
  return (
    <div className='background'>
        <div className='welcome'>
        <h1>Welcome</h1>
        <button onClick={handleChange} className='btn-1'>GET QUOTE</button>
        </div>
     </div>
        
  )
}

export default Welcome