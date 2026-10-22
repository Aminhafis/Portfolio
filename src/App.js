import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Project from "./Components/Project";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="relative min-h-screen bg-charcoal-900 text-[#EDEDED] font-sans antialiased overflow-x-hidden selection:bg-amber-500/20 selection:text-amber-200">
      
      {/* Monolog Signature: 6-Step Jitter Film Grain Overlay */}
      <div className="grain-overlay pointer-events-none fixed inset-0 z-40 opacity-75"></div>

      {/* Persistent Base Dot Matrix */}
      <div className="dot-matrix pointer-events-none fixed inset-0 z-0 opacity-35"></div>

      {/* Illuminated Dots (Glows brighter towards the center solar mesh) */}
      <div className="illuminated-dots pointer-events-none fixed inset-0 z-0 opacity-75"></div>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <section id="home">
          <Home />
        </section>

        <section id="project">
          <Project />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer Colophon */}
      <Footer />
    </div>
  );
}

export default App;
