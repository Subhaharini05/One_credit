import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const fromTop = window.scrollY + 80;
      const current = navItems.find((item) => {
        const section = document.getElementById(item.target);
        if (!section) return false;
        return section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop;
      });
      setActive(current?.target || 'home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-white/20 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" className={`text-xl font-black tracking-wider ${darkMode ? 'text-cyan-300' : 'text-indigo-600'}`}>Subhaharini R</a>
        <div className="flex items-center gap-5">
          <ul className="hidden md:flex gap-4 text-sm md:text-base">
            {navItems.map(({ label, target }) => (
              <li key={target}>
                <a
                  href={`#${target}`}
                  onClick={() => setActive(target)}
                  className={`px-3 py-2 rounded-lg transition ${active === target ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md' : 'text-slate-200 hover:text-white'}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="px-4 py-2 bg-white/20 backdrop-blur rounded-full border border-white/30 text-sm font-medium"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
