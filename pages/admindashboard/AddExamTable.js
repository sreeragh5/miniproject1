import React, { useState,useEffect } from 'react'
import axios from 'axios'
import PopExamDetails from './PopExamDetails';
import PopAddQuestion from './PopAddQuestion';
import PopViewQuestion from './PopViewQuestion';
import "./AddExamTable.css"
export default function AddExamTable() {
    let [show,setshow]=useState(false)
    let [show1,setshow1]=useState(false)
    let [show2,setshow2]=useState(false)
    const togglePopup = () => {
        setshow(!show);
      }
      const togglePopup1 = () => {
        setshow1(!show1);
      }
      const togglePopup2 = () => {
        setshow2(!show2);
      }

    const[subject,setsubject]=useState([])
    useEffect(()=>{
        fetchTasks();},
        )
    let fetchTasks =async () =>{
      let result = await axios.get(("http://localhost:5000/Exam_Details")) 
        setsubject(result.data)
    }
    let subfilter1 = (result) =>{
      setshow(!show)
      console.log(result.data._id )
      settitle(result.data._id)

    }
  let[title,settitle]=useState("")
   let subfilter =async(id) =>{
      let result = await axios.get(`http://localhost:5000/Exam_Details/${id}`)
        subfilter1(result) 
   }
   let [view,setview]=useState("")
   let subview =async(id) =>{
    let result = await axios.get(`http://localhost:5000/Exam_Details/${id}`)
      subview1(result) 
 }
 let subview1 = (result) =>{
  setshow2(!show2)
  console.log(result.data.Subject )
  setview(result.data.Subject)
}
let [add,setadd]=useState("")
let subadd =async(id) =>{
 let result = await axios.get(`http://localhost:5000/Exam_Details/${id}`)
   subadd1(result) 
}
let subadd1 = (result) =>{
setshow1(!show1)
setadd(result.data.Subject)
}

    let deleteTasks =async (id) =>{
      console.log(id.Subject)
      let ftasks =subject.filter((item) =>item._id!==id);
      setsubject(ftasks)
      await axios.delete(`http://localhost:5000/Exam_Details/${id._id}`)
      await axios.delete(`http://localhost:5000/Add_Questions/${id.Subject}`)
      window.location.reload(true);
    
        
    }
  return (
    <div >
    <table style={{width:"700px",marginLeft:"350px",gap:"30px"}}className="table table-dark table-striped-columns">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Description</th>
            <th>Level</th>
            <th>options</th>
          </tr>
        </thead>
        <tbody  >
          {
            subject.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.Subject}</td>
                  <td>{value.Description}</td>
                  <td>{value.Level}</td>
                  <td>
                  <button onClick={()=>{subfilter(value._id)}} style={{marginRight:"5px"}}type="button" class="btn btn-info">Details</button>
                  {
                    show && <PopExamDetails handleClose={togglePopup} sub={title} />
                    
                  }
                  <button  onClick={()=>{subview(value._id)}} style={{marginRight:"5px"}}type="button" class="btn btn-primary">View</button>
                  {
                    show2 && <PopViewQuestion handleClose={togglePopup2} view1={view} />
                    
                  }
                    <button onClick={()=>{subadd(value._id)}} style={{marginRight:"5px"}} type="button" class="btn btn-success">Add Qn</button>
                    {
                    show1 && <PopAddQuestion handleClose={togglePopup1} topic1={add} />
                    
                  }
                    <button onClick={()=>deleteTasks(value)}style={{marginRight:"5px"}} type="button" class="btn btn-danger">Delete</button>

                    </td>
                  
                </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>

  )
}
