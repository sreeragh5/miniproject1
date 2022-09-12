import  React from 'react'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import "./LoginD.css"
import { useNavigate,Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
export default function LoginD() {
let navigate=useNavigate()
let [password,setpassword]= useState("")
let [email,setemail]= useState("")
let formsubmit = (e) =>{
  e.preventDefault();
}
  return (
    <div className='login'>
        <h2 className='heading'>Agent Login</h2>
        <p  className='paragraph'>
            Hey! Enter your details to sign in
        </p>
        <form onSubmit={formsubmit}>
     <TextField type="email" className='email' label="Email" onChange={(e)=> setemail=(e.target.value) }/>
     <TextField type="password" id="password" className='password' label="password" onChange={(e)=> setpassword=(e.target.value) } />

     <p className='paragraph2'> Having a trouble?</p>
    <Link to ="/dashboard/admin">
     <button type='submit' className='signin'> Sign in</button>
     </Link>
     </form>

    </div>
  )
}

