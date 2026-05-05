import React from 'react';
import { Mail } from 'lucide-react';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';

const Footer = () => {
  return (
    <footer className="bg-[#030712] py-12 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center relative z-10">
        <div className="mb-6 md:mb-0 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center mr-2 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              <span className="text-white font-bold font-heading text-sm">M</span>
            </div>
            <span className="text-2xl font-heading font-bold text-white tracking-tight">Mathyas P</span>
          </div>
          <p className="text-brand-muted mt-2 text-sm max-w-xs">
            Engineering premium digital experiences with modern web technologies.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a
            href="https://github.com/Mathyas-P"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full premium-glass flex items-center justify-center text-gray-400 hover:text-white border border-white/5 hover:border-brand-primary/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mathyas-p-b51a53329?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full premium-glass flex items-center justify-center text-gray-400 hover:text-white border border-white/5 hover:border-brand-tertiary/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="mailto:connectwithmathyas01@gmail.com"
            className="w-10 h-10 rounded-full premium-glass flex items-center justify-center text-gray-400 hover:text-white border border-white/5 hover:border-brand-secondary/50 hover:shadow-[0_0_15px_rgba(192,132,252,0.3)] transition-all duration-300"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-white/5 text-center text-brand-muted text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} Mathyas P. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
