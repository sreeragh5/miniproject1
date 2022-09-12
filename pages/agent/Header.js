import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import { useEffect } from 'react'
export default function Header() {
    let click = () =>{
        console.log("clickkk")
    }
    
  return (
    <div className='header'>
        <h3 className='heading1'>Job Fare</h3>
        <div className='links1'>
        <Link to = "/dashboard">
          <h4 className='about1'>About Us</h4>
          </Link>
          <Link to = "/sign_up">
          <h4 className='sign1'>Sign Up</h4>
          </Link>
          <a href="https://youtu.be/EpX1_YJPGAY" rel="noreferrer">
          <button onClick={click}className="button1" >Request Demo</button>
        </a>
         
         
         </div>
    </div>
  )
}
