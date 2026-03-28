import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-maroon-800 text-cream-200 pt-32 pb-24">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-maroon-700/30 blur-[100px]"
        />
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-maroon-900/40 blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Massive Background Text like in reference */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none select-none"
        >
          <h1 className="text-[15vw] leading-none font-serif font-black tracking-tighter text-cream-100 whitespace-nowrap">
            PORTFOLIO
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-20 mt-12"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-2">
            GODFREY
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight ml-12 md:ml-24 text-cream-300 italic">
            STEPHANIE
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex flex-col items-center"
        >
          <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-cream-300/80">
            Graphic Designer
          </p>
          <p className="max-w-md text-lg md:text-xl font-light text-cream-200/90 mb-10 text-balance">
            "I bring your idea to life."
          </p>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-cream-200 text-maroon-900 font-semibold tracking-wide hover:bg-white transition-colors shadow-[0_0_20px_rgba(245,242,235,0.3)]"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
