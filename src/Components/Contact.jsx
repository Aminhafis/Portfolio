import React from 'react'
import '../Styles/Contact.css'
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";


function Contact() {
  return (
    <div className='contact'>
      <div className="contact_content">
       <h2>CONTACT</h2> <br />
    <h1>Don't be shy! Hit me up! 👇</h1><br />
    </div>
    <div className="contact_icons">
    <div className="contact_icon">
      <span><HiLocationMarker /> </span>
    <div><h1>Location</h1> 
    <p>Bangalore,Karnataka.</p></div>
      <span><HiOutlineMail /></span>
      <div><h1>Mail</h1> 
      <p>aminhafis2@gmail;</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Contact