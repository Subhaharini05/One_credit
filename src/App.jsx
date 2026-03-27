import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import CursorGlow from './components/CursorGlow';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1400);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setDarkMode(savedTheme === 'dark');
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-[#080a15] text-white' : 'bg-slate-50 text-slate-900'}`}>
      <CursorGlow />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <section id="resume" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
            <p className="text-slate-400 mb-6">Download my resume to view education, internships, and projects in detail.</p>
            <a href="/resume.pdf" download className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:brightness-110 transition">Download Resume</a>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
