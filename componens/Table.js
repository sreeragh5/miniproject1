import React, { useState,useEffect } from 'react'
import "./Table.css"
import axios from 'axios'

export default function Table() {

    const[subject,setsubject]=useState([])
    useEffect(()=>{
        fetchTasks();},[]
        )
    let fetchTasks =async () =>{
        let result = await axios.get(("http://localhost:5000/add_Subject"))
        setsubject(result.data)
    }
    let deleteTasks =async (id) =>{
        let ftasks =subject.filter((item) =>item._id!==id);
        setsubject(ftasks)
        await axios.delete(`http://localhost:5000/add_Subject/${id}`)
    
        
    }
  return (
    <div className='Tb'>
    <table className="table table-dark table-striped-columns">
        <thead>
          <tr>
            <th>Post</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {
            subject.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.Subject}</td>
                  <td><button type="button" class="btn btn-success" onClick={()=>deleteTasks(value._id)}>Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>

  )
}
