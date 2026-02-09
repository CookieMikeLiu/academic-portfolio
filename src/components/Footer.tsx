const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-black/10 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-black/40 dark:text-white/40">
          <p>© {currentYear} {new URL(import.meta.url).hostname || 'Portfolio'}</p>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Source
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
