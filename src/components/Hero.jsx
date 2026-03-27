import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const rotatingText = ['Java Developer', 'AI Enthusiast', 'Web Developer'];

const Hero = () => {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < rotatingText[wordIndex].length) {
        setDisplayed((prev) => prev + rotatingText[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayed('');
          setCharIndex(0);
          setWordIndex((prev) => (prev + 1) % rotatingText.length);
        }, 1200);
      }
    }, charIndex === rotatingText[wordIndex].length ? 1200 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden" style={{ paddingTop: '90px' }}>
      <div className="particle-background absolute inset-0 pointer-events-none" />
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <p className="text-cyan-300 font-semibold mb-3">Hi, I&apos;m</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 text-white drop-shadow-lg">Subhaharini R</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-indigo-100">{displayed}<span className="blink">|</span></h2>
          <p className="text-slate-200 text-lg md:text-xl mb-6 max-w-xl">3rd Year AIML student focused on AI/ML pipelines, full-stack app development, and delivering high-impact solutions through code.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 rounded-full bg-indigo-500 bg-opacity-90 text-white text-sm font-semibold shadow-lg hover:bg-indigo-600 transition">View Projects</a>
            <a href="#contact" className="px-6 py-3 rounded-full bg-white text-indigo-700 text-sm font-semibold hover:bg-slate-100 transition">Contact Me</a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1"
        >
          <div className="w-full max-w-sm mx-auto aspect-square rounded-[3rem] glassmorphism border border-white/20 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80" alt="Profile" className="object-cover w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
