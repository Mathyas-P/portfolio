import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center px-6 transition-all duration-500 rounded-full ${isScrolled ? 'premium-glass h-16' : 'bg-transparent h-14'}`}>
          <div className="flex-shrink-0 cursor-pointer flex items-center" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center mr-2">
              <span className="text-white font-bold font-heading text-sm">M</span>
            </div>
            <span className="text-xl font-heading font-bold text-white tracking-tight">Mathyas P</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="nav-link px-4 py-2 text-gray-400 text-sm font-medium tracking-wide"
              >
                {link}
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1pfWHnUUQLvuyA5jxwfjCEYK908gETYz7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume-btn ml-4 px-5 py-2 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20 hover:text-white text-sm font-semibold flex items-center justify-center"
            >
              Resume
            </a>
            <button 
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleTheme}
              className="mr-2 p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 premium-glass-card border border-white/10 shadow-2xl"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {link}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/1pfWHnUUQLvuyA5jxwfjCEYK908gETYz7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 mt-4 rounded-xl bg-brand-primary text-white font-semibold shadow-lg shadow-brand-primary/20"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
