import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, FileText, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { publications } from '../data/portfolioData';

const Publications: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="publications" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800/50">
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
            Publications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Selected publications in top-tier conferences and journals
          </p>
        </motion.div>

        {/* Publications List */}
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="glass rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-semibold">
                          {pub.type}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{pub.year}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-gray-900 dark:text-white mb-2">
                        {pub.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">{pub.authors}</p>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">{pub.venue}</p>
                    </div>
                    
                    {/* Award Badge */}
                    {index === 0 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium text-sm"
                      >
                        <Award size={16} />
                        Best Paper
                      </motion.div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-3">
                    {pub.links.paper && (
                      <motion.a
                        href={pub.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 transition-colors"
                      >
                        <FileText size={16} />
                        Paper
                      </motion.a>
                    )}
                    {pub.links.code && (
                      <motion.a
                        href={pub.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 dark:bg-gray-700 text-white text-sm font-medium hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                    )}
                    {pub.links.project && (
                      <motion.a
                        href={pub.links.project}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-500 text-white text-sm font-medium hover:bg-accent-600 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Project
                      </motion.a>
                    )}
                    {pub.links.arxiv && (
                      <motion.a
                        href={pub.links.arxiv}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-primary-500 hover:text-primary-600 transition-colors"
                      >
                        arXiv
                      </motion.a>
                    )}
                    <{/* Expand/Collapse Abstract */}
                    <motion.button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium ml-auto"
                    >
                      {expandedIndex === index ? (
                        <>Hide Abstract <ChevronUp size={16} /></>
                      ) : (
                        <>Show Abstract <ChevronDown size={16} /></>
                      )}
                    </motion.button>
                  </div>

                  {/* Abstract */}
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{pub.abstract}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Publications Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://scholar.google.com/citations?user=EmmYJcYAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-medium hover:bg-primary-500 hover:text-white transition-colors"
          >
            View All Publications on Google Scholar
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;