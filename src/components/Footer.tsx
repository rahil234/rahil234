const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-mono">
          {"<RS />"} · Rahil Sardar
        </span>
        <span>Built with React & Tailwind CSS</span>
      </div>
    </footer>
  );
};

export default Footer;
