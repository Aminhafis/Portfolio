import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import '../Styles/Navbar.css'
import { IoReorderThreeSharp } from "react-icons/io5";


// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function BasicExample() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">Amin.dev</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//         <h4>
//              <Link to='/'> Home </Link>
//              <Link to='/about'> About </Link>
//              <Link to='/project'> Project </Link>
//              <Link to='/contact'> Contact </Link>
//              </h4>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;


function Navbar() {

  const [expandNavbar, setExpandNavbar] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setExpandNavbar(false)
  }, [location])

  return (
    <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
              <h4>Amin.dev</h4>
        <div className="toggleButton"> 
        <button onClick={() => { setExpandNavbar((prev) => !prev)}}>
           <IoReorderThreeSharp/> 
           </button>
        </div>
        <div className={"links ${expandNavbar ? 'show' : 'hide'}"}>
          <h4>
            <Link to='/home'> Home </Link>
            <Link to='/about'> About </Link>
            <Link to='/project'> Project </Link>
            <Link to='/contact'> Contact </Link>
            </h4>
        </div>
    </div>
  )
}

export default Navbar