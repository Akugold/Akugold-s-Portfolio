import React from 'react';
import { motion } from 'motion/react';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.1)] px-6 py-3"
    >
      <ul className="flex items-center justify-between text-sm font-medium tracking-wider uppercase text-ink-900">
        <li><a href="#home" className="hover:text-maroon-800 transition-colors">Home</a></li>
        <li><a href="#about" className="hover:text-maroon-800 transition-colors">About</a></li>
        <li className="text-xl font-serif font-bold text-maroon-800 tracking-widest hidden sm:block">GAS</li>
        <li><a href="#work" className="hover:text-maroon-800 transition-colors">Work</a></li>
        <li><a href="#contact" className="hover:text-maroon-800 transition-colors">Contact</a></li>
      </ul>
    </motion.nav>
  );
};
