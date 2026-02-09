import { Award } from 'lucide-react';
import { awards } from '../data/portfolioData';

const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-2xl font-light text-black dark:text-white mb-4">Awards & Honors</h2>
          <div className="w-12 h-px bg-black/20 dark:bg-white/20" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {awards.map((award, index) => (
            <article key={index} className="border-b border-black/10 dark:border-white/10 pb-8">
              <div className="flex items-center gap-3 mb-3">
                <Award size={16} className="text-black/30 dark:text-white/30" />
                <span className="text-xs text-black/40 dark:text-white/40">{award.year}</span>
              </div>
              
              <h3 className="text-base font-medium text-black dark:text-white mb-2">
                {award.title}
              </h3>
              
              <p className="text-sm text-black/60 dark:text-white/60 mb-2">
                {award.organization}
              </p>
              
              <p className="text-sm text-black/40 dark:text-white/40 leading-relaxed">
                {award.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
