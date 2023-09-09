const express = require('express')
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
const StudentModel = require('./models/Student')

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/students")

var finalrollnumber = ""

app.post('/api/receiveData', (req, res) => {
    const receivedData = req.body;  // This will contain the data sent from React
    console.log(receivedData.studentroll);
    finalrollnumber = receivedData.studentroll;
    res.send('Data received successfully');

  });

app.get('/getStudent',(req,res)=>{
    StudentModel.find({roll:finalrollnumber})
    .then(students=>res.json(students))
    .catch(err=>res.json(err))
})


// GET DETAIL OF SINGLE STUDENT ACCORDING TO THEIR ROLL NUMBER



app.listen(8000,()=>{
    console.log("server is running");
})