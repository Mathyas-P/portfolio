import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Database, Wrench } from 'lucide-react';

const skillsData = [
  { 
    category: 'Frontend Development', 
    icon: <Monitor size={24} />,
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'group-hover:border-cyan-500/50',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
    items: [
      { name: 'React.js', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML5/CSS3', level: 95 }
    ] 
  },
  { 
    category: 'Backend Development', 
    icon: <Server size={24} />,
    color: 'from-indigo-500/20 to-purple-500/20',
    borderColor: 'group-hover:border-indigo-500/50',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    items: [
      { name: 'Python', level: 90 },
      { name: 'Django / DRF', level: 85 },
      { name: 'REST APIs', level: 90 }
    ] 
  },
  { 
    category: 'Database', 
    icon: <Database size={24} />,
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'group-hover:border-emerald-500/50',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]',
    items: [
      { name: 'SQL', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'SQLite', level: 90 }
    ] 
  },
  { 
    category: 'Tools', 
    icon: <Wrench size={24} />,
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'group-hover:border-orange-500/50',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]',
    items: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'PyCharm', level: 85 }
    ] 
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-semibold tracking-widest text-brand-secondary uppercase mb-3">Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading text-white">
            Skills & <span className="text-gradient">Technologies</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillsData.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group premium-glass-card p-8 transition-all duration-500 hover:-translate-y-2 border border-white/5 ${skillGroup.borderColor} ${skillGroup.glowColor}`}
            >
              <div className="flex items-center mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skillGroup.color} flex items-center justify-center text-white mr-4 border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                  {skillGroup.icon}
                </div>
                <h4 className="text-xl font-bold text-white tracking-wide">{skillGroup.category}</h4>
              </div>
              
              <div className="space-y-6">
                {skillGroup.items.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-xs font-mono text-brand-muted">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800/50 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-brand-primary to-brand-tertiary rounded-full relative"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-[2px] rounded-full"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
