import React from 'react'
import './card.css'

function StudentCard() {
  return (
    <>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <div className="card">
    <div id="avatar">
      <img alt='' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png" />
    </div>
    <div id="check">
      <i className="fa fa-check" />
    </div>
    <div id="name">Shambu K P   </div>
    <div id="job" />
    <div id="info">
      <ul>
        <li>
          Class: <span><b>9TH KL</b></span>
        </li>
        <li>
          Age: <span><b>15</b></span>
        </li>
        {/* <li>
          Blog: <span>a7rarpress </span>
        </li> */}
      </ul>
    </div>
    
  </div>
</>
  )
}

export default StudentCard