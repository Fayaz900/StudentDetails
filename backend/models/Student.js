const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name: String,
    roll:String,
    class: String,
    age: Number
})

const StudentModel = mongoose.model("details",StudentSchema)
module.exports = StudentModel