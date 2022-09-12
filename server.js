const express = require("express")
const cors =require("cors")

require("dotenv").config()
const app=express()
const port=process.env.PORT||5000
app.use(cors())
app.use(express.json())
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/",{
    useNewUrlParser:true,
    useUnifiedTopology: true

});
const LoginRoute= require("./routes/login")
app.use(LoginRoute)
const connection =mongoose.connection

connection.once('open',() => { 
    console.log("database conncted")
})

app.listen(port,()=>{
  console.log(`server is running at ${port}`)
})