import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Project from './Components/Project';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <section id="home" className="pt-20"><Home /></section>
      <section id="project" className="pt-20"><Project /></section>
      <section id="about" className="pt-20"><About /></section>
      <section id="contact" className="pt-20"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
