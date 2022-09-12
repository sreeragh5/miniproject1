import React, { useState,useEffect } from 'react'
import "./PopExamDetails.css"
import axios from 'axios'
export default function PopExamDetails(props) {
  const[subject,setsubject]=useState([])
  useEffect(()=>{
      fetchTasks();},[]
      )
  let fetchTasks =async () =>{
      let result = await axios.get((`http://localhost:5000/Exam_Details/${props.sub}`))
      console.log(result.data)
      setsubject(result.data)
  }
  return (
    <div >
        <div className="popup-box">
      <div className="box">
        
        <span className="close-icon" onClick={props.handleClose}>x</span>
    <table style={{width:"600px",marginLeft:"120px"}}className="table table-dark table-striped-columns">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Description</th>
            <th>Level</th>
            <th>No Of Questions</th>
            <th>Total Mark</th>
            <th>Cutoff</th>
          </tr>
        </thead>
        <tbody>
                  <tr>
                  <td>{subject.Subject}</td>
                  <td>{subject.Description}</td>
                  <td>{subject.Level}</td>
                  <td>{subject.Qns}</td>
                  <td>{subject.Max}</td>
                  <td>{subject.Cutoff}</td>
                  </tr>
                
                
        </tbody>
      </table>
      </div>
    </div>
      </div>

  )
}

