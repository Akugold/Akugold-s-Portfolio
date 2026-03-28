import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-maroon-800 text-cream-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl font-serif font-black tracking-tighter mb-8 text-cream-100">
            LET'S TALK
          </h2>
          <p className="text-xl md:text-2xl font-light text-cream-300 mb-16 max-w-2xl mx-auto text-balance">
            Ready to bring your ideas to life? Get in touch and let's create something beautiful together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.a
            href="mailto:akugoldgas16@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-8 rounded-3xl bg-maroon-900/50 border border-maroon-700 hover:bg-maroon-700 transition-colors group"
          >
            <div className="w-16 h-16 rounded-full bg-cream-200 text-maroon-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">Email Me</h3>
            <p className="text-cream-300/80 text-sm">akugoldgas16@gmail.com</p>
          </motion.a>

          <motion.a
            href="tel:+2348111768702"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-8 rounded-3xl bg-maroon-900/50 border border-maroon-700 hover:bg-maroon-700 transition-colors group"
          >
            <div className="w-16 h-16 rounded-full bg-cream-200 text-maroon-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">Call Me</h3>
            <p className="text-cream-300/80 text-sm">0811 176 8702</p>
          </motion.a>

          <motion.a
            href="https://about.me/akugolddesign"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-8 rounded-3xl bg-maroon-900/50 border border-maroon-700 hover:bg-maroon-700 transition-colors group"
          >
            <div className="w-16 h-16 rounded-full bg-cream-200 text-maroon-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ExternalLink className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">Portfolio</h3>
            <p className="text-cream-300/80 text-sm">about.me/akugolddesign</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-maroon-900 text-cream-300/60 py-8 text-center text-sm border-t border-maroon-800">
      <p>&copy; {new Date().getFullYear()} Godfrey Akunna Stephanie. All rights reserved.</p>
    </footer>
  );
};
