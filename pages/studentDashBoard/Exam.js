import React from 'react'

export default function Exam() {
  const[subject,setsubject]=useState([])
    useEffect(()=>{
        fetchTasks();},
        )
    let fetchTasks =async () =>{
      let result = await axios.get(("http://localhost:5000/Exam_Details")) 
        setsubject(result.data)
    }

  return (

    <div>
      <table style={{width:"700px",marginLeft:"350px",gap:"30px"}}className="table table-dark table-striped-columns">
        <thead>
          <tr>
            <th>Exam</th>
            <th>Options</th>

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
                  <button onClick={()=>{subfilter(value._id)}} style={{marginRight:"5px"}}type="button" class="btn btn-info">Attend</button>
                  {
                    show && <PopExamDetails handleClose={togglePopup} sub={title} />
                    
                  }
                  <button onClick={()=>{subfilter(value._id)}} style={{marginRight:"5px"}}type="button" class="btn btn-info">View</button>
                  {
                    show && <PopExamDetails handleClose={togglePopup} sub={title} />
                    
                  }
                   <button onClick={()=>{subfilter(value._id)}} style={{marginRight:"5px"}}type="button" class="btn btn-info">Cancel</button>
                 
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

 