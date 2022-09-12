import React from 'react'
import Adashboard from './Adashboard'
import AddExam from './AddExam'
import "./Exam.css"
import { useState } from 'react'
import AddExamTable from './AddExamTable'
export default function () {
    let [show,setshow]=useState(false)
    const togglePopup = () => {
        setshow(!show);
      }
  return (
    <div>
        <Adashboard />
        <h1 style={{marginTop:"-750px"}}className='Exam-List'>Exam List</h1>
        <button  type="button" style={{height:"40px"}}  onClick={()=>setshow(true)} className="btn btn-success Add-Exam">Add Exam</button>
        { show &&
  
             <AddExam  handleClose={togglePopup} />
           }
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <AddExamTable />
          

    </div>
  )
}
