import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, MapPin, ExternalLink, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      color: 'from-red-500 to-pink-500',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: personalInfo.github,
      color: 'from-gray-700 to-gray-900',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: personalInfo.linkedin,
      color: 'from-blue-500 to-blue-700',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: personalInfo.twitter,
      color: 'from-sky-400 to-sky-600',
    },
    {
      name: 'Google Scholar',
      icon: BookOpen,
      href: personalInfo.googleScholar,
      color: 'from-green-500 to-emerald-600',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, research discussions, or just to say hello!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900/30">
                    <Mail className="text-red-600 dark:text-red-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-medium text-gray-900 dark:text-white">{personalInfo.email}</p>
                  </div>
                </motion.a>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-medium text-gray-900 dark:text-white">{personalInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                    <BookOpen className="text-purple-600 dark:text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Affiliation</p>
                    <p className="font-medium text-gray-900 dark:text-white">{personalInfo.institution}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${link.color} text-white`}>
                        <link.icon size={20} />
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">{link.name}</span>
                    </div>
                    <ExternalLink 
                      size={18} 
                      className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" 
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;