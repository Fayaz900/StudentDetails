import React, { useEffect, useState } from 'react'
import './Details.css'
import StudentCard from '../studentCard/StudentCard'
import InputBox from '../inputBox/InputBox'

function Details() {
    const [student,setStudent] = useState([])
    const [roll,setRoll] = useState("")
    useEffect(()=>{
        const fetchData=async()=>{
          const Studentdata = await fetch("http://localhost:8000/getStudent")
          const jsonStudentdata = await Studentdata.json()
        //   console.log(jsonStudentdata)
        setStudent(jsonStudentdata)
        }
        fetchData()
           
    },[])
  return (
    <div className='main'>
        <h2 className='title'>Get Details</h2>
    <InputBox setRoll={setRoll}/>
    <StudentCard/>
    </div>
  )
}

export default Details