import React,{useState,useEffect} from 'react'
import axios from "axios";

export default function (props){
    const[subject,setsubject]=useState([])
        useEffect(()=>{
          fetchTasks();},[]
          )
    let fetchTasks =async () =>{
        let result = await axios.get((`http://localhost:5000/Add_Questions/${props.view1}`))
        console.log(result.data)
        setsubject(result.data)
    }
    let deleteTasks =async (id) =>{
      console.log(id)
      let ftasks =subject.filter((item) =>item._id!==id);
      console.log(ftasks)
      setsubject(ftasks)
      await axios.delete(`http://localhost:5000/Add_Questions/${id}`)
      
        
    }
    return (
      <div >
          <div className="popup-box">
        <div className="box">
          
          <span className="close-icon" onClick={props.handleClose}>x</span>
      <table style={{width:"600px",marginLeft:"120px"}}className="table table-dark table-striped-columns">
          <thead>
            
            <tr>
              <th>Question</th>
              <th>Option1</th>
              <th>Option2</th>
              <th>Option3</th>
              <th>Option4</th>
              <th>Answer</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
          {
            subject.map((value, key) => {
              return (
                <tr key={key}>
                    <td>{value.Question}</td>
                    <td>{value.Option1}</td>
                    <td>{value.Option2}</td>
                    <td>{value.Option3}</td>
                    <td>{value.Option4}</td>
                    <td>{value.Answers}</td>
                    <td><button onClick={()=>deleteTasks(value._id)}style={{marginRight:"5px"}} type="button" class="btn btn-danger">Delete</button>

                      
                    </td>

                    </tr>
              )}
              
              )
}
                  
                  
          </tbody>
        </table>
        </div>
      </div>
        </div>
  
    )
  }
