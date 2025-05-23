import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navItems = [  
    { id: 1, label: 'Home', to: '#home' },
    { id: 2, label: 'Work', to: '#project' },
    { id: 3, label: 'About', to: '#about' },
    { id: 4, label: 'Contact', to: '#contact' },
  ];

  const handleClick = () => setNavOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Amin.Dev</div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8">
          {navItems.map(({ id, label, to }) => (
            <li key={id}>
              <a
                href={to}
                className="cursor-pointer text-gray-700 hover:text-blue-500 transition font-medium"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile nav toggle */}
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile nav menu */}
      {navOpen && (
        <ul className="md:hidden bg-white shadow-lg px-4 py-6 space-y-4">
          {navItems.map(({ id, label, to }) => (
            <li key={id}>
              <a
                href={to}
                onClick={handleClick}
                className="block text-gray-700 hover:text-blue-500 transition font-medium"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
