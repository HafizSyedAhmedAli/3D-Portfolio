const DallasFooter = () => (
  <footer className="px-5 md:px-20 py-8 md:py-10 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-center md:text-left">
      <a href="/" className="text-white text-lg md:text-xl font-semibold">
        Ahmed | <span className="text-emerald-400">Ali</span>
      </a>
      <p className="text-white/20 text-xs font-mono">
        Web Developer Dallas TX · Full-Stack Developer · AI-Powered Apps
      </p>
      <p className="text-white/20 text-xs font-mono">
        &copy; {new Date().getFullYear()} Ahmed Ali
      </p>
    </div>
  </footer>
);

export default DallasFooter;