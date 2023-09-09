import React, { useEffect, useState } from "react";
import "./Details.css";
import StudentCard from "../studentCard/StudentCard";
import InputBox from "../inputBox/InputBox";

function Details() {
  const [student, setStudent] = useState([]);
  const [roll, setRoll] = useState("");
  const [render, setRender] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const Studentdata = await fetch("http://localhost:8000/getStudent");
      const jsonStudentdata = await Studentdata.json();
      // console.log(jsonStudentdata)
      setStudent(jsonStudentdata);
    };
    fetchData();
  }, [render]);

  // FUNCTION TO SEND ROLL NUMBER STATE TO SERVER
  const sendDataToServer = async () => {
    const dataToSend = {
      studentroll: roll,
    };

    try {
      const response = await fetch("http://localhost:8000/api/receiveData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        console.log("Data sent successfully");
      } else {
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="main">
      <h2 className="title">Get Details</h2>
      <InputBox
        setRoll={setRoll}
        sendfunction={sendDataToServer}
        setRender={setRender}
        render={render}
      />
      <StudentCard onestudent={student} />
    </div>
  );
}

export default Details;
