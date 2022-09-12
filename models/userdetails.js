const mongoose = require("mongoose")

const Schema = mongoose.Schema
 const Details = new Schema({

    F_Name:{
        type:String,
        required:true
    },
    L_Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Reminder:{
        type:Boolean,
        required:true
    }


 })

 const Login = mongoose.model("Details",Details)

 module.exports=Login