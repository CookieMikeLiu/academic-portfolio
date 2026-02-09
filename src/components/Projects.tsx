import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-2xl font-light text-black dark:text-white mb-4">Projects</h2>
          <div className="w-12 h-px bg-black/20 dark:bg-white/20" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <article key={index} className="border-b border-black/10 dark:border-white/10 pb-8">
              <h3 className="text-base font-medium text-black dark:text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-sm text-black/60 dark:text-white/60 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-black/30 dark:text-white/30">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {(project.links as Record<string, string>).github && (
                  <a
                    href={(project.links as Record<string, string>).github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Github size={14} />
                    Code
                  </a>
                )}
                {(project.links as Record<string, string>).paper && (
                  <a
                    href={(project.links as Record<string, string>).paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ExternalLink size={14} />
                    Paper
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
