import { FC } from 'react';
import { GraduationCap, Code, BookOpen } from 'lucide-react';
import { researchInterests, education, skills } from '../data/portfolioData';

const About: FC = () => {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-2xl font-light text-black dark:text-white mb-4">About</h2>
          <div className="w-12 h-px bg-black/20 dark:bg-white/20" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-black/30 dark:text-white/30" size={16} strokeWidth={1.5} />
                <h3 className="text-xs uppercase tracking-wider text-black/40 dark:text-white/40">
                  Research
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {researchInterests.map((interest) => (
                  <span
                    key={interest}
                    className="text-sm text-black/60 dark:text-white/60"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Code className="text-black/30 dark:text-white/30" size={16} strokeWidth={1.5} />
                <h3 className="text-xs uppercase tracking-wider text-black/40 dark:text-white/40">
                  Skills
                </h3>
              </div>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-xs text-black/30 dark:text-white/30 mb-2 uppercase">
                      {category.replace('_', ' ')}
                    </h4>
                    <p className="text-sm text-black/60 dark:text-white/60">
                      {items.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-black/30 dark:text-white/30" size={16} strokeWidth={1.5} />
              <h3 className="text-xs uppercase tracking-wider text-black/40 dark:text-white/40">
                Education
              </h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index}>
                  <h4 className="text-sm text-black dark:text-white">{edu.degree}</h4>
                  <p className="text-sm text-black/60 dark:text-white/60">{edu.institution}</p>
                  <p className="text-xs text-black/40 dark:text-white/40 mt-1">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
