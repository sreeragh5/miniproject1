import React from 'react'
import { useState } from 'react'
import Table from '../../componens/Table'
import Adashboard from './Adashboard'
import "./Subject.css"
import axios from 'axios'
export default function Subject() {
    let [show,setshow]=useState(false)
    let [text,setText]=useState("")
    let add_Subject = async ()=>{
        await axios.post("http://localhost:5000/add_Subject",{Subject:text})
        close_bar()
    }
    let close_bar = () =>{
        setshow(false)
    }
    
  return (
    <div>
        <Adashboard />
         <h1 style={{marginTop:"-770px",fontFamily:"PT sans"}}className='Subject-List'>Job List</h1>
         <div className='Tables-subject'>
         <Table />
         </div>
         <div className='adding'></div>
        <button style={{marginLeft:"250px"}}onClick={()=>setshow(true)}className="btn btn-success">Add Job</button>
        { show &&
        <div style={{marginTop:"15px ",width:"300px",marginLeft:"253px" }}className="Enter-Subject">
            <label className="form-label" >Enter position</label>
            <input type="text" className="form-control"  placeholder="Text" onChange={(e) => setText(e.target.value)} value={text} /> 
            <br></br>
            <br></br>
            <div className='add-cancel-button'>
            <button  type="button" onClick={(add_Subject)} class="btn btn-success">Add</button>
            <button type="button" class="btn btn-danger" onClick={()=>setshow(false)}>Close</button>
            </div>
          </div>
}
        
        

    </div>
  )
}

