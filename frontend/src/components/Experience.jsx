import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap } from 'lucide-react';

const experienceData = [
  {
    role: 'Full Stack Development Intern',
    company: 'Retech Solutions Pvt. Ltd',
    duration: 'December 2024',
    description: 'Developed a Django-based online grocery store project from scratch. Architected the backend logic, designed the database models, and implemented responsive UI components. Strengthened core capabilities in secure authentication, REST APIs, and modern web deployment.',
    achievement: 'Delivered a fully functional, production-ready e-commerce platform ahead of schedule.',
    gradient: 'from-brand-primary to-brand-tertiary'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-semibold tracking-widest text-brand-secondary uppercase mb-3">Journey</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading text-white">
            Professional <span className="text-gradient">Experience</span>
          </h3>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line with animated gradient */}
          <div className="timeline-line absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-white/10 shadow-[0_0_15px_rgba(99,102,241,0.6)]">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-primary via-brand-secondary to-transparent"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative flex items-center w-full mb-16"
            >
              {/* Timeline glowing dot */}
              <div className="timeline-icon absolute left-6 md:left-8 w-10 h-10 rounded-full bg-[#030712] border-2 border-brand-primary -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                <Briefcase size={16} className="text-brand-primary" />
              </div>

              <div className="w-full pl-20 md:pl-32">
                <div className="experience-card card p-8 group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-50 group-hover:opacity-100 transition-opacity duration-300 ${exp.gradient}"></div>
                  
                  <div className="mb-4">
                    <span className="date-badge inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-muted mb-4">
                      {exp.duration}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-primary transition-colors">{exp.role}</h3>
                    <h4 className="text-lg text-brand-tertiary font-medium">{exp.company}</h4>
                  </div>
                  
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  
                  <div className="impact-box bg-gradient-to-r from-brand-primary/10 to-transparent p-4 rounded-xl border border-brand-primary/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary"></div>
                    <p className="text-sm text-gray-300 flex items-start">
                      <Zap size={16} className="text-brand-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white font-medium">Impact:</strong> {exp.achievement}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
