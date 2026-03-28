import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "Random Design",
    role: "Graphic Designer",
    period: "Past Experience",
    description: "Created engaging visual content, experimental layouts, and unique brand identities for various diverse projects."
  },
  {
    company: "Tech and more ltd.",
    role: "Visual Designer",
    period: "Past Experience",
    description: "Collaborated with the marketing team to design brand assets, presentations, and digital marketing collateral."
  },
  {
    company: "Nacos committe",
    role: "Design Lead",
    period: "Past Experience",
    description: "Led the design initiatives for committee events, including fliers, banners, and official ID cards for members."
  }
];

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="work" className="py-32 bg-maroon-900 text-cream-200 relative overflow-hidden" ref={containerRef}>
      {/* Background decoration */}
      <motion.div style={{ y }} className="absolute top-0 right-0 text-[20vw] font-serif font-black text-maroon-800/50 leading-none select-none pointer-events-none whitespace-nowrap">
        EXPERIENCE
      </motion.div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter mb-6">
                MY<br/>JOURNEY
              </h2>
              <p className="text-cream-300/80 text-lg font-light">
                A timeline of my professional roles and the value I've brought to various organizations.
              </p>
            </motion.div>
          </div>

          <div className="md:w-2/3">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-maroon-800/50 backdrop-blur-md border border-maroon-700/50 p-8 rounded-3xl hover:bg-maroon-800 transition-colors group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <h3 className="text-2xl font-serif font-bold text-cream-100 group-hover:text-white transition-colors">
                      {exp.company}
                    </h3>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maroon-900/80 text-sm text-cream-300 border border-maroon-700">
                      <Briefcase className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg text-cream-300 mb-4 font-medium">{exp.role}</h4>
                  <p className="text-cream-200/70 leading-relaxed font-light">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
