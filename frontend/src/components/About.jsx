import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server } from 'lucide-react';
import profile from '../assets/profile.webp';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-semibold tracking-widest text-brand-tertiary uppercase mb-3">Discovery</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading text-white">
            About <span className="text-gradient">Me</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Visual Side */}
          <div className="lg:col-span-5 relative">
            <div className="image-container aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none group p-2 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 via-transparent to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-2xl pointer-events-none"></div>
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#030712] flex items-center justify-center">
                 <img 
                    src={profile} 
                    alt="Mathyas P" 
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="800"
                    className="rounded-xl object-cover w-full h-full transform-gpu will-change-transform" 
                 />
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="experience-badge flex flex-col items-center justify-center z-20">
              <span className="text-4xl font-bold text-gradient mb-1">1+</span>
              <span className="text-xs font-medium text-brand-muted uppercase tracking-wider text-center">Years of<br/>Experience</span>
            </div>
          </div>

          {/* Text Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="about-content">
              <motion.h4 variants={itemVariants} className="text-2xl font-bold mb-6 text-white flex items-center">
                <Code className="text-brand-primary mr-3" size={28} />
                Who I Am
              </motion.h4>
              <div className="space-y-8 text-brand-muted text-lg leading-relaxed">
                <motion.p variants={itemVariants}>
                  I’m a Computer Science graduate actively building full-stack web applications with React and Django.
                </motion.p>
                <motion.p variants={itemVariants}>
                  I’ve developed a real-time monitoring system, a blog platform, and an e-commerce application. These projects gave me hands-on experience across both frontend and backend development.
                </motion.p>
                <motion.p variants={itemVariants}>
                  I enjoy solving real-world problems. I focus on improving my skills through practical work and continuously learning new technologies to grow as a developer.
                </motion.p>
              </div>
            </div>

            {/* Core Competencies Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="info-card flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Layout size={24} />
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1">Frontend Development</h5>
                  <p className="text-sm text-brand-muted">Crafting beautiful, responsive, and animated UIs.</p>
                </div>
              </div>
              
              <div className="info-card flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                  <Server size={24} />
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1">Backend Systems</h5>
                  <p className="text-sm text-brand-muted">Building secure, RESTful architectures and APIs.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
