import Link from 'next/link';
import React from 'react'
import { FaHandsHoldingChild } from "react-icons/fa6";


const HomePage = () => {
  return (
    <div className='home-page'>
      <h3 className='logo'><FaHandsHoldingChild/> Care Connect</h3>
      <div className='home-container'>
        

        <div className='home-content'>
            <p className='para'>Healthy choice with Care Connect</p>
            <h3 className='heading'>Advancing Healthcare through new technlogy</h3>
            <p className='para'>welcomes you, to our care connect app</p>
            <Link href={"/my-account/dashboard"}>
            <button>My Account</button>
            </Link>
        </div>


    </div>
    </div>
  
  )
}

export default HomePage