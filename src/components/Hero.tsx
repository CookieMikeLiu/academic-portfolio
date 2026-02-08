import { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero: FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 animate-gradient-x" />
        
        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 dark:bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/20 dark:bg-accent-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 mb-6 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium"
            >
              👋 Welcome to my academic portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            >
              Hi, I'm{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6 text-gray-500 dark:text-gray-400"
            >
              <span className="flex items-center gap-1">
                <MapPin size={16} />
                {personalInfo.institution}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail size={16} />
                {personalInfo.email}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#publications"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#publications')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Publications
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Decorative Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-4 border-2 border-dashed border-primary-300 dark:border-primary-700 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-8 border border-accent-300 dark:border-accent-700 rounded-full opacity-50"
              />
              
              {/* Profile Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl glow"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <span className="text-6xl md:text-8xl">👤</span>
                </div>
                {/* Profile Image */}
                <img
                  src="/profile-photo.png"
                  alt={personalInfo.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full glass shadow-lg"
              >
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">🔬 Researcher</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full glass shadow-lg"
              >
                <span className="text-sm font-medium text-accent-600 dark:text-accent-400">💻 Developer</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <span className="text-sm mb-2">Scroll down</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;