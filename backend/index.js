const express = require('express')
const mongoose = require("mongoose");
const cors = require("cors");
const StudentModel = require('./models/Student')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/students")

app.get('/getStudent',(req,res)=>{
    StudentModel.find({roll:"ZB190"})
    .then(students=>res.json(students))
    .catch(err=>res.json(err))
})

app.listen(8000,()=>{
    console.log("server is running");
})