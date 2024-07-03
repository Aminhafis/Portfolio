import React from 'react'
import '../Styles/Footer.css'
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";




function Footer() {
  return (
    <div className='footer'>
        <div>
        <p>Copyright &copy; 2024.All rights are reserved</p>
        </div>
        <div className='icons'>
        <FaInstagram />
        <RiTwitterXFill />
        <FaGithub />
        </div>
    </div>
  )
}

export default Footer