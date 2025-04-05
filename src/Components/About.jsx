import React, { useEffect } from 'react'
import '../Styles/About.css'
import computer from './computer.jpg'
import axios from 'axios'

function About() {

  useEffect(()=>{
    
     let fetchdata = async() =>{
      let response = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(response.data);


     }
fetchdata()
  },[]) 
 
  return (
    <div className='about'>
      <div className="about-img">
        <img src={computer} alt="" />
      </div>
      <div className="prompt">
        <h2>ABOUT ME</h2>
          <h1>Front-end Developer <br />based in Banglore,india 📍</h1>
          <p>Hey, my name is Amin, and I'm a Frontend Developer. My passion  <br />is to create and develop a clean UI/UX for my users. <br /><br />
          My main stack currently is React in combination with Bootstrap.</p>
      </div>
    </div>
  )
}

export default About