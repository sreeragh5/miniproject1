const mongoose = require("mongoose")

const Schema = mongoose.Schema
 const Details = new Schema({

    Subject:{
        type:String,
        required:true,
        unique:true
    }
})

const Subject = mongoose.model("Subjects",Details)

module.exports=Subject