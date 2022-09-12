const mongoose = require("mongoose")

const Schema = mongoose.Schema
 const Questions = new Schema({

     Subject:{
        type:String,
        required:true
    },
     Question:{
        type:String,
        required:true
    },
    Option1:{
        type:String,
        required:true
    },
    Option2:{
        type:String,
        required:true
    },
    Option3:{
        type:String,
        required:true
    },
    Option4:{
        type:String,
        required:true
    },
    Answers:{
        type:String,
        required:true
    },


 })

 const Question= mongoose.model("Questions",Questions)

 module.exports=Question