import React from 'react'
import './card.css'

function StudentCard(props) {
  return (
    <>
    {
      console.log(props.onestudent)
    }
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  {
    props.onestudent.map((item)=>{
      return (
  <div className="card" key={item._id}>
    <div id="avatar">
      <img alt='' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png" />
    </div>
    <div id="check">
      <i className="fa fa-check" />
    </div>
    <div id="name">{item.name}</div>
    <div id="job" />
    <div id="info">
      <ul>
        <li>
          Class: <span><b>{item.class}</b></span>
        </li>
        <li>
          Roll Number: <span><b>{item.roll}</b></span>
        </li>
        <li>
          Age : <span><b>{item.age}</b></span>
        </li>
        
      </ul>
    </div>
    
  </div>
      )
})}
</>
  )
}

export default StudentCard