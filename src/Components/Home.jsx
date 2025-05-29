import React from 'react';
import about from './about.jpg';
// import Amin from '../Components/Portfolio.png'
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="h-[35rem] bg-gray-50 py-16 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
  <div className="flex-1">
    <h1 className="text-4xl font-bold mb-4">Front-End React Developer 👋🏻</h1>

    <p className="text-gray-700 mb-6 text-lg">
      Hi, I'm <strong>Amin Hafis</strong>, a passionate front-end developer with strong proficiency in <strong>React</strong> and the <strong>MERN stack</strong>, crafting clean and interactive web experiences.
    </p> 

    <p className="text-xl text-gray-800 font-medium">
      Versatile MERN Stack Developer & Creative UI Designer seeking exciting opportunities to build meaningful, user-focused digital products.
    </p>
  </div>

  <motion.div
  whileHover={{ scale: 1.03 }}
  transition={{ type: 'spring', stiffness: 120 }}
  className="w-fit ml-20"
>
  <motion.img
    src={about}
    alt="Profile"
    className="w-[20rem] h-[20rem] border-[1px] border-neutral-400 animate-morph object-cover bg-slate-100 ml-28"
    style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%"}}
  />
  <p className="text-xl text-gray-400 pt-10 font-medium hover:text-blue-700">
    <strong className="text-slate-800 hover:text-blue-700">#</strong> Building real-world solutions with modern JavaScript 🛠️.
  </p>
</motion.div>
</div>

  );
}

export default Home;
