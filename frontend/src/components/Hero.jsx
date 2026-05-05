import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[10%] w-72 h-72 bg-brand-primary/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -50, 0], 
            y: [0, -40, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left z-10 pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center px-5 py-2.5 rounded-full premium-glass border border-white/10 mb-8 shadow-[0_0_20px_rgba(99,102,241,0.15)]"
            >
              <Sparkles className="w-5 h-5 text-brand-primary mr-3 animate-pulse" />
              <span className="text-sm md:text-base font-semibold text-gray-200">Available for new opportunities</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-6xl sm:text-7xl lg:text-[5.5rem] font-bold font-heading mb-6 tracking-tight leading-[1.1] text-white"
            >
              Hi, I'm <br className="hidden sm:block" />
              <span className="text-gradient drop-shadow-sm">Mathyas P</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-lg mx-auto lg:mx-0 leading-[1.8] font-light"
            >
              I’m a Full Stack Developer focused on building modern, responsive web applications using React and Django. I enjoy solving real-world problems and creating clean, scalable, and efficient systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <button 
                onClick={() => {
                  const el = document.getElementById('projects');
                  if(el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="glow-btn group relative px-8 py-4 bg-white text-gray-950 rounded-full font-bold flex items-center justify-center transition-all hover:scale-105 active:scale-95 w-full sm:w-auto shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                <span className="relative z-10 flex items-center text-lg">
                  Explore Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1.5 transition-transform" size={22} />
                </span>
              </button>
              
              <a 
                href="https://drive.google.com/file/d/1pfWHnUUQLvuyA5jxwfjCEYK908gETYz7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 premium-glass text-white border border-white/20 rounded-full font-semibold flex items-center justify-center transition-all hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] w-full sm:w-auto text-lg"
              >
                Download CV
                <Download className="ml-2 group-hover:-translate-y-1 transition-transform" size={22} />
              </a>
            </motion.div>
          </div>

          {/* Right Visual Content */}
          <div className="order-1 lg:order-2 relative w-full h-[400px] sm:h-[500px] lg:h-[650px] flex items-center justify-center mt-10 lg:mt-0">
            
            {/* Ambient Lighting Behind Illustration */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="w-3/4 h-3/4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full blur-[100px]" 
              />
            </div>

            {/* Main Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 w-full h-full flex items-center justify-center"
            >
              <motion.img
                src="/hero-illustration.png"
                alt="3D Developer Workspace"
                className="w-full max-w-[550px] object-contain drop-shadow-[0_20px_50px_rgba(99,102,241,0.2)] brightness-90 blur-[0.5px] opacity-95"
                animate={{ 
                  y: [-15, 15, -15],
                  rotateZ: [-1, 1, -1]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center space-y-2 z-20"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-brand-primary opacity-70" size={24} />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
