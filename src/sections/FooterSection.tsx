import Image from "next/image";
import { socialImgs } from "../constants";

const SOCIAL_LABELS: Record<string, string> = {
  wa: "WhatsApp",
  email: "Email",
  linkedin: "LinkedIn",
  github: "GitHub",
};

const FooterSection = () => {
  return (
    <footer
      className="w-full md:px-20 px-5 pt-20 pb-10 relative overflow-hidden"
      aria-label="Site footer"
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="flex items-center gap-4 mb-16" aria-hidden="true">
        <div className="flex-1 h-px bg-linear-to-r from-transparent to-white/10" />
        <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/20">
          Let's connect
        </span>
        <div className="flex-1 h-px bg-linear-to-l from-transparent to-white/10" />
      </div>

      <div className="flex flex-col items-center gap-6 relative z-10">
        <div className="relative inline-block" aria-hidden="true">
          <span className="absolute top-1/2 -translate-y-1/2 -left-6 text-emerald-400/30 text-3xl font-mono">
            [
          </span>
          <span className="absolute top-1/2 -translate-y-1/2 -right-6 text-emerald-400/30 text-3xl font-mono">
            ]
          </span>
          <p className="text-5xl md:text-7xl font-bold tracking-tight text-center">
            <span className="text-white">Ahmed</span>
            <span className="text-white/10 mx-3">|</span>
            <span className="text-emerald-400">Ali</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-emerald-400/40" aria-hidden="true" />
          <p className="text-white/50 text-sm font-mono tracking-widest uppercase">
            Full-Stack Developer
          </p>
          <span className="w-8 h-px bg-emerald-400/40" aria-hidden="true" />
        </div>

        <a
          href="/"
          className="text-white/30 hover:text-emerald-400 text-xs font-mono tracking-wide transition-colors duration-300"
        >
          → Visit my Blog
        </a>

        <nav aria-label="Social media links">
          <ul className="flex items-center gap-3 mt-2 list-none">
            {socialImgs.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Connect on ${SOCIAL_LABELS[s.name] ?? s.name}`}
                  className="size-10 rounded-lg border border-white/8 bg-white/2 flex items-center justify-center hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all duration-300 group"
                >
                  <Image
                    src={s.imgPath}
                    alt=""
                    aria-hidden="true"
                    width={17}
                    height={17}
                    className="brightness-0 invert opacity-35 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="w-full mt-8 flex flex-col items-center gap-4">
          <div
            className="h-px w-full bg-linear-to-r from-transparent via-white/8 to-transparent"
            aria-hidden="true"
          />
          <small className="text-white/20 text-xs font-mono">
            &copy; {new Date().getFullYear()} Ahmed Ali. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
