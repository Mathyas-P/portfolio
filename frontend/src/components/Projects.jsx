import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import GithubIcon from './GithubIcon';

const projectsData = [
  {
    id: 1,
    title: 'VisionGuard-AI',
    description: 'Built this project while learning Python and computer vision, focusing on basic face recognition using OpenCV and processing live video streams.',
    tech: ['Python', 'OpenCV', 'AI/ML'],
    category: 'AI',
    live: '#',
    github: '#',
    gradient: 'from-blue-500/20 to-indigo-500/20'
  },
  {
    id: 2,
    title: 'Blog Web Application',
    description: 'Built this project while learning Django, focusing on building structured backend architecture, routing, and database operations.',
    tech: ['Python', 'Django', 'PostgreSQL'],
    category: 'Web',
    live: '#',
    github: '#',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    id: 3,
    title: 'Movie Search Hub',
    description: 'Built this project while learning React, focusing on external API integration, state management, and responsive UI design.',
    tech: ['React', 'Tailwind CSS', 'REST API'],
    category: 'Web',
    live: '#',
    github: '#',
    gradient: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    id: 4,
    title: 'E-Commerce Platform',
    description: 'Built this project while learning full-stack integration, focusing on connecting a frontend to a backend to handle user authentication and basic cart logic.',
    tech: ['Django', 'React', 'SQL'],
    category: 'Web',
    live: '#',
    github: '#',
    gradient: 'from-emerald-500/20 to-teal-500/20'
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const filters = ['All', 'Web', 'AI', 'Mobile'];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold tracking-widest text-brand-primary uppercase mb-3">Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
            Featured <span className="text-gradient">Work</span>
          </h3>
          <p className="text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            These projects were built as part of my hands-on learning journey in full-stack development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === f 
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30 border border-brand-primary/50' 
                  : 'premium-glass text-brand-muted hover:text-white border border-white/5 hover:border-white/20'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                key={project.id}
                className="group h-full"
              >
                <div className="card h-full p-8 flex flex-col">
                  
                  {/* Decorative background glow based on project gradient */}
                  <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
                  
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-brand-primary group-hover:scale-110 group-hover:bg-brand-primary/10 transition-all duration-300">
                      <FolderGit2 size={24} />
                    </div>
                    <div className="flex space-x-3">
                      <a href={project.github} className="text-gray-400 hover:text-white transition-colors" title="GitHub Repository">
                        <GithubIcon size={22} />
                      </a>
                      <a href={project.live} className="text-gray-400 hover:text-white transition-colors" title="Live Demo">
                        <ExternalLink size={22} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex-grow">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-brand-muted mb-8 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1.5 bg-[var(--bg)] border border-[var(--border)] text-[var(--text-muted)] text-xs font-mono rounded-md group-hover:border-brand-primary/30 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
