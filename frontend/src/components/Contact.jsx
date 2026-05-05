import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Cold start handling for Render
    const wakingTimeout = setTimeout(() => {
      setStatus('waking');
    }, 4000);

    // Abort if request takes longer than 8 seconds
    const controller = new AbortController();
    const abortTimeout = setTimeout(() => controller.abort(), 8000);

    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${API_URL}/api/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(wakingTimeout);
      clearTimeout(abortTimeout);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || data.error || JSON.stringify(data) || 'Server error');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      clearTimeout(wakingTimeout);
      clearTimeout(abortTimeout);
      console.error("Contact form error:", error);
      setStatus('error');
      if (error.name === 'AbortError') {
        setErrorMessage('Request timed out. Server may be starting up — please try again.');
      } else {
        setErrorMessage(error.message || 'Something went wrong. Please try again.');
      }
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold tracking-widest text-brand-primary uppercase mb-3">Connect</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading text-white">
            Let's build <span className="text-gradient">together</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">

          {/* Left info side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-2xl font-bold text-white mb-4">Have an idea?</h4>
              <p className="text-lg text-brand-muted leading-relaxed">
                Whether you're looking to build a new web application, scale an existing platform, or just want to discuss tech, I'm always open to talking about new opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="premium-glass p-6 rounded-2xl flex items-center space-x-4 border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-brand-muted mb-1">Email me at</p>
                  <a href="mailto:connectwithmathyas01@gmail.com" className="text-lg font-medium text-white hover:text-brand-primary transition-colors">
                    connectwithmathyas01@gmail.com
                  </a>
                </div>
              </div>

              <div className="premium-glass p-6 rounded-2xl flex items-center space-x-4 border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-tertiary/10 flex items-center justify-center text-brand-tertiary">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-sm text-brand-muted mb-1">Social</p>
                  <a href="https://www.linkedin.com/in/mathyas-p-b51a53329/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-brand-tertiary transition-colors">
                    Reach out on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="premium-glass-card p-8 md:p-10 relative overflow-hidden"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#030712]/95 backdrop-blur-md"
              >
                <div className="w-20 h-20 rounded-full bg-brand-secondary/20 flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-brand-secondary" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Message sent successfully</h3>
                <p className="text-brand-muted text-center max-w-xs">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#030712]/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#030712]/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-[#030712]/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all text-white placeholder-gray-600 resize-none"
                    placeholder="How can I help you?"
                  />
                </div>
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm font-medium bg-red-400/10 p-3 rounded-lg border border-red-400/20">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || status === 'waking'}
                className="glow-btn w-full group relative px-8 py-4 bg-brand-primary text-white rounded-xl font-bold flex items-center justify-center transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 mt-2"
              >
                <span className="relative z-10 flex items-center">
                  {(status === 'loading' || status === 'waking') ? (
                    <>
                      <Loader2 className="animate-spin mr-2" size={20} />
                      {status === 'waking' ? 'Server is waking up, please wait...' : 'Sending...'}
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                    </>
                  )}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
