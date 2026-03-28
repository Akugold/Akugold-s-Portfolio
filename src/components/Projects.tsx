import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Brand Identity Revamp",
    category: "Brand Designing",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop",
    description: "Complete visual identity redesign for a local tech startup, including logo, color palette, and typography guidelines."
  },
  {
    title: "Summer Festival Fliers",
    category: "Flier Designing",
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop",
    description: "Vibrant and engaging promotional materials for a city-wide summer music and arts festival."
  },
  {
    title: "Corporate ID System",
    category: "ID Card Designing",
    image: "https://images.unsplash.com/photo-1616628188550-808682f3926d?q=80&w=1000&auto=format&fit=crop",
    description: "Secure, modern, and easily identifiable staff ID cards for a multinational corporation."
  },
  {
    title: "Editorial Photo Retouching",
    category: "Photo Editing",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
    description: "High-end photo retouching for a fashion magazine spread, focusing on color grading and skin texture."
  }
];

export const Projects = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="h-[200vh] bg-cream-200 relative">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="container mx-auto px-6 mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif font-black text-maroon-800 tracking-tighter"
          >
            THE CASE
          </motion.h2>
          <p className="text-ink-500 uppercase tracking-widest text-sm mt-2">Selected Works</p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 w-max">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="w-[85vw] md:w-[600px] h-[60vh] md:h-[500px] relative group overflow-hidden rounded-3xl bg-white shadow-xl flex-shrink-0"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/90 via-maroon-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-cream-100 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-sm font-medium tracking-widest uppercase text-cream-300 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">{project.title}</h3>
                <p className="text-cream-200/80 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-2">
                  {project.description}
                </p>
                
                <button className="w-12 h-12 rounded-full bg-white text-maroon-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 hover:scale-110">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
