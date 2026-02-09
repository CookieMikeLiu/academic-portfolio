import { useState } from 'react';
import { FileText, Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { publications, personalInfo } from '../data/portfolioData';

const Publications: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  // Show only selected publications (first 10)
  const selectedPublications = publications.slice(0, 10);

  return (
    <section id="publications" className="py-24 md:py-32 bg-black/[0.02] dark:bg-white/[0.02]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-2xl font-light text-black dark:text-white mb-4">Selected Publications</h2>
          <div className="w-12 h-px bg-black/20 dark:bg-white/20" />
        </div>

        <div className="space-y-12">
          {selectedPublications.map((pub, index) => (
            <article key={index} className="border-b border-black/10 dark:border-white/10 pb-10">
              <div className="flex items-center gap-3 mb-4 text-xs text-black/40 dark:text-white/40">
                <span>{pub.type}</span>
                <span>•</span>
                <span>{pub.year}</span>
              </div>

              <h3 className="text-base font-medium text-black dark:text-white mb-2 leading-relaxed">
                {pub.title}
              </h3>
              <p className="text-sm text-black/50 dark:text-white/50 mb-1">{pub.authors}</p>
              <p className="text-sm text-black/40 dark:text-white/40 italic mb-4">{pub.venue}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {pub.tags.map((tag) => (
                  <span key={tag} className="text-xs text-black/30 dark:text-white/30">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6">
                {pub.links.paper && (
                  <a
                    href={pub.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <FileText size={14} />
                    Paper
                  </a>
                )}
                {(pub.links as Record<string, string>).code && (
                  <a
                    href={(pub.links as Record<string, string>).code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Github size={14} />
                    Code
                  </a>
                )}
                {(pub.links as Record<string, string>).arxiv && (
                  <a
                    href={(pub.links as Record<string, string>).arxiv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                  >
                    arXiv
                  </a>
                )}
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1 ml-auto"
                >
                  {expandedIndex === index ? <>Abstract <ChevronUp size={14} /></> : <>Abstract <ChevronDown size={14} /></>}
                </button>
              </div>

              {expandedIndex === index && (
                <div className="mt-6 pt-6 border-t border-black/10 dark:border-white/10">
                  <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">{pub.abstract}</p>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12">
          <a
            href={personalInfo.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-black/20 dark:border-white/20 text-black dark:text-white text-sm hover:border-black dark:hover:border-white transition-colors"
          >
            View All Publications
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
