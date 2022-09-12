
const mongoose = require("mongoose")

const Schema = mongoose.Schema
 const Exam_Details = new Schema({

    Subject:{
        type:String,
        required:true,
        unique:true
    },
    Description:{
        type:String,
        required:true
    },
    Level:{
        type:String,
        required:true
    },
    Qns:{
        type:Number,
        required:true
    },
    Max:{
        type:Number,
        required:true
    },
    Cutoff:{
        type:Number,
        required:true
    }


 })

 const ExamDetails = mongoose.model("ExamDetails",Exam_Details)

 module.exports=ExamDetails