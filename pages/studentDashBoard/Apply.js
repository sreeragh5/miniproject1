import React, { useEffect, useState } from 'react'
import SDashBoard from './SDashBoard'
import axios from "axios"
import "./Apply.css"
export default function Apply() {
  const[subject,setsubject]=useState([])
  useEffect(()=>{
      fetchTasks();},
      )
      let fetchTasks =async () =>{
        let result = await axios.get(("http://localhost:5000/Exam_Details")) 
          setsubject(result.data)
          console.log(subject)
      }
    
    return (
        <div className='student_apply_container' >
           
            <SDashBoard />
            </div>
              )
   }
