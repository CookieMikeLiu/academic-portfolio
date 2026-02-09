import { Mail, Github, Linkedin, Twitter, MapPin, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const socialLinks = [
    { name: 'Email', icon: Mail, href: `mailto:${personalInfo.email}` },
    { name: 'GitHub', icon: Github, href: personalInfo.github },
    { name: 'LinkedIn', icon: Linkedin, href: personalInfo.linkedin },
    { name: 'Twitter', icon: Twitter, href: personalInfo.twitter },
    { name: 'Google Scholar', icon: BookOpen, href: personalInfo.googleScholar },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-black/[0.02] dark:bg-white/[0.02]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-2xl font-light text-black dark:text-white mb-4">Contact</h2>
          <div className="w-12 h-px bg-black/20 dark:bg-white/20" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-black/40 dark:text-white/40 mb-4">Email</h3>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-black dark:text-white hover:opacity-60 transition-opacity"
              >
                {personalInfo.email}
              </a>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-wider text-black/40 dark:text-white/40 mb-4">Location</h3>
              <p className="text-black/60 dark:text-white/60">{personalInfo.location}</p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-wider text-black/40 dark:text-white/40 mb-4">Affiliation</h3>
              <p className="text-black/60 dark:text-white/60">{personalInfo.institution}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider text-black/40 dark:text-white/40 mb-6">Connect</h3>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                >
                  <link.icon size={16} />
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
