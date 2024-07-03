import React from 'react'
import '../Styles/Home.css'
import about from './about.jpg'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";


import Badge from 'react-bootstrap/Badge';



function Home() {
  return (
    <div className='home'>
    <div className='home-data'>
      <div className="home-prompt">
     <h1>Front-End React <br />Developer 👋🏻 </h1>      
     <p>Hi, i'm Amin hafis.A passionate Front-End React <br /> Developer based in Banglore,Karnataka.📍 </p> 
     </div>
      <div className="home-img">
        <img src={about} alt=""/>
      </div>
      </div>
      <div className="skills"> <p>Tech stack |  <FaHtml5/> <IoLogoCss3/>  <TbBrandJavascript/> <FaReact/> </p>
      </div>
      </div>    
  )
}

export default Home