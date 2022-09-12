import React,{useState} from "react";
import "./PopAddQuestion.css"
import axios from "axios";
const PopAddQuestion = props => {
let [question,setquestion]=useState("")
let [option1,setoption1]=useState("")
let [option2,setoption2]=useState("")
let [option3,setoption3]=useState("")
let [option4,setoption4]=useState("")
let [answer,setanswer]=useState("")

   let submit = async (e) =>{
      e.preventDefault()
      await axios.post("http://localhost:5000/Add_Questions",{Subject:props.topic1,Question:question,Option1:option1,
      Option2:option2,Option3:option3,Option4:option4,Answers:answer}
      )
      props.handleClose()
   }
  return (
    <div className="popup-box">
      <div className="box">
        
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <form onSubmit={submit}>
        <label className="form-label" >Question</label>
        <input style={{width:"500px"}}type="text" className="form-control"  placeholder="Text" onChange={(e) => setquestion(e.target.value)} value={question} /> 
            <br></br>
            <label className="form-label" >Option 1</label>
            <input type="text" className="form-control"  placeholder="Text" onChange={(e) => setoption1(e.target.value)} value={option1} /> 
         <br></br>
         <label className="form-label" >Option 2</label>
        <input type="text" className="form-control"  placeholder="Text" onChange={(e) => setoption2(e.target.value)} value={option2} /> 
         <br></br>
         <label className="form-label" >Option 3</label>
            <input type="text" className="form-control"  placeholder="Text" onChange={(e) => setoption3(e.target.value)} value={option3} /> 
         <br></br>
         <label className="form-label" >Option 4</label>
            <input type="text" className="form-control"  placeholder="Text" onChange={(e) => setoption4(e.target.value)} value={option4} /> 
         <br></br>
         <label className="form-label" >Answer</label>
            <input type="text" className="form-control"  placeholder="Not Options" onChange={(e) => setanswer(e.target.value)} value={answer} /> 
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
 
export default PopAddQuestion;