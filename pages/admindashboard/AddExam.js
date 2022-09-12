import React,{useState} from "react";
import "./AddExam.css"
import axios from "axios";
const Popup = props => {
let [subject,setsubject]=useState("")
let [desc,setdesc]=useState("")
let [level,setlevel]=useState("")
let [qns,setqns]=useState("")
let [max,setmax]=useState("")
let [cutoff,setcutoff]=useState("")


let submit = async (e) =>{
   await axios.post("http://localhost:5000/Exam_Details",{Subject:subject,Description:desc,Level:level,Qns:parseInt(qns),Max:parseInt(max),Cutoff:parseInt(cutoff)})
   
}

  return (
    <div className="popup-box">
      <div className="box">
        
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <form onSubmit={submit}>
        <label className="form-label" > Subject</label>
        <input type="text" className="form-control"  placeholder="Text" onChange={(e) => setsubject(e.target.value)} value={subject} /> 
            <br></br>
            <label className="form-label" >Description</label>
            <input type="text" className="form-control"  placeholder="Text" onChange={(e) => setdesc(e.target.value)} value={desc} /> 
         <br></br>
         <label className="form-label" >Level</label>
        <input type="text" className="form-control"  placeholder="Text" onChange={(e) => setlevel(e.target.value)} value={level} /> 
         <br></br>
         <label className="form-label" >Total Questions</label>
            <input type="text" className="form-control"  placeholder="Text" onChange={(e) => setqns(e.target.value)} value={qns} /> 
         <br></br>
         <label className="form-label" >Total Marks</label>
            <input type="text" className="form-control"  placeholder="Text" onChange={(e) => setmax(e.target.value)} value={max} /> 
         <br></br>
         <label className="form-label" >Cutoff</label>
            <input type="text" className="form-control"  placeholder="Text" onChange={(e) => setcutoff(e.target.value)} value={cutoff} /> 
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <button  style={{marginLeft:"190px",width:"200px"}} type="submit" className="btn btn-success" >Add</button>
         </form>
      </div>
    </div>
  );
};
 
export default Popup;