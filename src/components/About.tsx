import { FC } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, BookOpen } from 'lucide-react';
import { researchInterests, education, awards, skills } from '../data/portfolioData';

const About: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-gray-900">
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Research Interests */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30">
                <BookOpen className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Research Interests</h3>
            </motion.div>
            <div className="flex flex-wrap gap-3">
              {researchInterests.map((interest) => (
                <motion.span
                  key={interest}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border border-primary-200 dark:border-primary-700 text-primary-700 dark:text-primary-300 text-sm font-medium"
                >
                  {interest}
                </motion.span>
              ))}
            </div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="mt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-accent-100 dark:bg-accent-900/30">
                  <Code className="text-accent-600 dark:text-accent-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Technical Skills</h3>
              </div>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 capitalize">
                      {category.replace('_', ' ')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Education & Awards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Education */}
            <div>
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30">
                  <GraduationCap className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </motion.div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative pl-6 pb-6 border-l-2 border-gray-200 dark:border-gray-700 last:pb-0"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary-500" />
                    <div className="glass rounded-xl p-4 -mt-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                      <p className="text-primary-600 dark:text-primary-400">{edu.institution}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-yellow-100 dark:bg-yellow-900/30">
                  <Award className="text-yellow-600 dark:text-yellow-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Awards & Honors</h3>
              </motion.div>
              <div className="space-y-3">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="glass rounded-xl p-4 flex items-start gap-3"
                  >
                    <span className="text-2xl">🏆</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{award.title}</h4>
                      <p className="text-sm text-primary-600 dark:text-primary-400">{award.organization}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{award.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;