import React from 'react';
import about from './about.jpg';

function Home() {
  return (
    <div className="bg-gray-50 py-16 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
  <div className="flex-1">
    <h1 className="text-4xl font-bold mb-4">Front-End React Developer 👋🏻</h1>

    <p className="text-gray-700 mb-6 text-lg">
      I'm <strong>Amin Hafis</strong>, a passionate front-end developer with strong proficiency in <strong>React</strong> and the <strong>MERN stack</strong>, crafting clean and interactive web experiences.
    </p>

    <p className="text-xl text-gray-800 font-medium">
      Versatile MERN Stack Developer & Creative UI Designer seeking exciting opportunities to build meaningful, user-focused digital products.
    </p>
  </div>

  <div className="flex-1 text-right">
    <img
      src={about}
      alt="Profile"
      className="w-[25rem] h-[25rem] border-[3px] border-[#2d2e32] animate-morph object-cover"
      style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
    />
  </div>
</div>

  );
}

export default Home;
