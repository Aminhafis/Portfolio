 import './App.css';
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Home from './Components/Home';
 import About from './Components/About';
 import Project from './Components/Project';
 import Contact from './Components/Contact';
 import Navbar from './Components/Navbar';
 import Footer from './Components/Footer';
import Layout from './Components/Layout';

function App() {
  return (
    <div>

  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='project' element={<Project/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
      

  );
}

export default App;
