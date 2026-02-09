import { FC } from 'react';
import { MapPin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero: FC = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center pt-20">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-start">
          <div>
            <p className="text-sm text-black/40 dark:text-white/40 mb-4 tracking-wide">
              {personalInfo.title}
            </p>

            <h1 className="text-4xl md:text-5xl font-light mb-6 text-black dark:text-white leading-tight">
              {personalInfo.name}, 刘瑞
            </h1>

            <div className="flex justify-center mb-8 md:hidden">
              <div className="w-24 h-24 overflow-hidden bg-black/5 dark:bg-white/5">
                <img
                  src="profile-photo.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </div>

            <p className="text-black/60 dark:text-white/60 mb-8 leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-6 mb-8 text-sm text-black/40 dark:text-white/40">
              <span className="flex items-center gap-2">
                <MapPin size={14} />
                {personalInfo.institution}
              </span>
              <span className="flex items-center gap-2">
                <Mail size={14} />
                {personalInfo.email}
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#publications"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#publications')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black text-sm hover:opacity-70 transition-opacity"
              >
                Publications
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-2.5 border border-black/20 dark:border-white/20 text-black dark:text-white text-sm hover:border-black dark:hover:border-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-end">
            <div className="w-48 h-48 overflow-hidden bg-black/5 dark:bg-white/5">
              <img
                src="profile-photo.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
