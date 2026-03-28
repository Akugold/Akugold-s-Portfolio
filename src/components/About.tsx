import React from 'react';
import { motion } from 'motion/react';

const GraphicDesignSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
    {/* Canvas/Paper */}
    <motion.rect 
      x="30" y="30" width="140" height="140" rx="8" 
      fill="#FDFBF7" 
      stroke="#6A2428" strokeWidth="4"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    
    {/* Bezier Curve Path */}
    <motion.path 
      d="M 50 150 C 80 80, 120 120, 150 50" 
      fill="transparent" 
      stroke="#A64248" strokeWidth="6" strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
    />
    
    {/* Anchor Points */}
    <motion.circle cx="50" cy="150" r="6" fill="#6A2428" 
      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
    />
    <motion.circle cx="150" cy="50" r="6" fill="#6A2428" 
      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 2.5 }}
    />

    {/* Pen Tool Icon moving along path */}
    <motion.g
      animate={{
        x: [0, 30, 70, 100],
        y: [0, -70, -30, -100],
      }}
      transition={{ duration: 2, delay: 0.5, ease: "easeInOut", times: [0, 0.33, 0.66, 1] }}
      className="origin-bottom-left"
    >
      <path d="M40 160 L45 145 L55 155 Z" fill="#2D2D2D" />
      <path d="M45 145 L65 105 L75 115 L55 155 Z" fill="#666666" />
      <path d="M65 105 L70 100 L80 110 L75 115 Z" fill="#2D2D2D" />
    </motion.g>
  </svg>
);

export const About = () => {
  return (
    <section id="about" className="py-24 bg-cream-200 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-serif font-black text-maroon-800 mb-8 leading-none tracking-tighter">
              ABOUT<br/>ME
            </h2>
            <div className="space-y-6 text-lg text-ink-800 font-light leading-relaxed">
              <p>
                I am a passionate Graphic Designer dedicated to transforming abstract concepts into compelling visual narratives. With a keen eye for detail and a love for aesthetics, I strive to create designs that not only look beautiful but also communicate effectively.
              </p>
              <p>
                My approach blends creativity with strategic thinking, ensuring that every project—whether it's a brand identity, a promotional flier, or an ID card—serves its intended purpose while standing out in a crowded visual landscape.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-square max-w-md mx-auto"
          >
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-maroon-800/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
            <GraphicDesignSVG />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
