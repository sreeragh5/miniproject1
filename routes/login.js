const express = require("express")
const usermodel= require("../models/userdetails")
const usermodel1= require("../models/add_Subject")
const usermodel2= require("../models/ExamDetails")
const usermodel3= require("../models/Questions")

const app =express()

app.post("/sign_up", async(req,res)=>{
   const user = new usermodel(req.body)
try{
    await user.save()
    .then(() =>res.json("details added"))
} catch(error){
    res.status(500).send(error)
}
})

app.post("/add_Subject", async(req,res)=>{
    const user = new usermodel1(req.body)
 try{
     await user.save()
     .then(() =>res.json("details added"))
 } catch(error){
     res.status(500).send(error)
 }
 })
 app.get("/add_Subject", async (request, response) => {
    const users = await usermodel1.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

app.delete("/add_Subject/:id", async (req,res)=>{
    try{
     let users = await usermodel1.deleteOne({_id:req.params.id})
     res.send(result)
}catch(error){
    res.send(error)
}

})
app.post("/Exam_Details", async(req,res)=>{
  const user = new usermodel2(req.body)
try{
   await user.save()
   .then(() =>res.json("details added"))
} catch(error){
   res.status(500).send(error)
}
})
app.get("/Exam_Details", async (request, response) => {
  const users = await usermodel2.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.delete("/Exam_Details/:id", async (req,res)=>{
  try{
   let users = await usermodel2.deleteOne({_id:req.params.id})
   res.send(result)
}catch(error){
  res.send(error)
}
});
app.post("/Add_Questions", async(req,res)=>{
  const user = new usermodel3(req.body)
try{
   await user.save()
   .then(() =>res.json("details added"))
} catch(error){
   res.status(500).send(error)
}
});
app.get("/Exam_Details/:id", async (request, response) => {
  const users = await usermodel2.findOne({_id:request.params.id});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/Add_Questions/:Subject", async (request, response) => {
  const users = await usermodel3.find({Subject:request.params.Subject});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.delete("/Add_Questions/:id", async (req,res)=>{
  try{
   let users = await usermodel3.deleteOne({_id:req.params.id})
   res.send(result)
}catch(error){
  res.send(error)
}
});
app.delete("/Add_Questions/:Subject", async (req,res)=>{
  try{
   let users = await usermodel3.delete({Subject:req.params.Subject})
   res.send(result)
}catch(error){
  res.send(error)
}
});
module.exports=app