import { austinProjects } from "@/constants/austin";
import Image from "next/image";

const AustinProjects = () => {
  return (
    <section
      id="projects-austin"
      className="px-5 md:px-20 py-20 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-3">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Real Projects. Deployed. Live.
        </h2>
        <p className="text-white/50 mb-12 max-w-2xl">
          These aren&apos;t mockups or side experiments — they&apos;re
          production applications serving real users. This is the standard every
          Austin TX client gets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {austinProjects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-white/8 bg-white/2 hover:border-emerald-500/30 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 md:h-64 overflow-hidden">
                <Image
                  src={p.img}
                  alt={`Screenshot of ${p.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4 flex-1">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs font-mono rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-3 border-t border-white/5">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={p.gh}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/40 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AustinProjects;
