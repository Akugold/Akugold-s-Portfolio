import React from 'react';
import { motion } from 'motion/react';
import { PenTool, Image as ImageIcon, LayoutTemplate, Palette } from 'lucide-react';

const skills = [
  {
    title: "Brand Designing",
    icon: <Palette className="w-8 h-8" />,
    color: "bg-[#8A3338]", // maroon-700
    textColor: "text-cream-100",
    description: "Crafting cohesive visual identities that resonate with your target audience."
  },
  {
    title: "Photo Editing",
    icon: <ImageIcon className="w-8 h-8" />,
    color: "bg-[#D98A6C]", // Complementary warm terracotta
    textColor: "text-ink-900",
    description: "Enhancing and retouching images to achieve professional, striking results."
  },
  {
    title: "Flier Designing",
    icon: <LayoutTemplate className="w-8 h-8" />,
    color: "bg-[#C2A878]", // Warm gold/sand
    textColor: "text-ink-900",
    description: "Creating eye-catching promotional materials for events and marketing."
  },
  {
    title: "ID Card Designing",
    icon: <PenTool className="w-8 h-8" />,
    color: "bg-[#4A5D4E]", // Muted forest green for contrast
    textColor: "text-cream-100",
    description: "Designing professional and secure identification cards for organizations."
  }
];

export const Skills = () => {
  return (
    <section className="py-24 bg-cream-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-serif font-black text-maroon-800 tracking-tighter">
            I CREATE
          </h2>
          <p className="mt-4 text-ink-500 uppercase tracking-widest text-sm">My Areas of Expertise</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`${skill.color} ${skill.textColor} p-8 rounded-[2rem] shadow-lg flex flex-col h-full relative overflow-hidden group`}
            >
              {/* Decorative background circle on hover */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-150"></div>
              
              <div className="mb-6 bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">{skill.title}</h3>
              <p className="opacity-90 leading-relaxed text-sm mt-auto">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
