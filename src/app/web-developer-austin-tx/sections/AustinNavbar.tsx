const AustinNavbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 px-5 md:px-20 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="/" className="text-white text-xl font-semibold">
          Ahmed | <span className="text-emerald-400">Ali</span>
        </a>
        <a
          href="#contact-austin"
          className="px-5 py-2 rounded-lg border border-emerald-500/50 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300 text-sm font-medium"
        >
          Hire Web Developer Austin TX
        </a>
      </div>
    </nav>
  );
};

export default AustinNavbar;