import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Rui Liu. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500 fill-red-500" />
            </motion.span>
            <span>using React & Tailwind CSS</span>
          </div>
          
          <motion.a
            href="https://github.com/ruiliu/academic-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github size={16} />
            <span>View Source</span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;