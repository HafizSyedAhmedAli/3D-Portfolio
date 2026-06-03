import Image from "next/image";
import type { CityPageProject } from "@/types";

const ProjectCard = ({ title, desc, tags, live, gh, img }: CityPageProject) => (
  <article className="group rounded-2xl border border-white/8 bg-white/2 hover:border-emerald-500/30 transition-all duration-300 flex flex-col overflow-hidden">
    <div className="relative h-44 sm:h-52 overflow-hidden">
      <Image
        src={img}
        alt={`Screenshot of ${title}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        className="object-contain group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>

    <div className="p-5 md:p-6 flex flex-col flex-1">
      <h3 className="text-base md:text-lg font-bold text-white mb-2">
        {title}
      </h3>
      <p className="text-white/55 text-xs md:text-sm leading-relaxed mb-4 flex-1">
        {desc}
      </p>

      <ul className="flex flex-wrap gap-1.5 mb-4 list-none">
        {tags.map((t) => (
          <li key={t}>
            <span className="px-2 py-1 text-xs font-mono rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              {t}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex gap-4 pt-3 border-t border-white/5">
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          Live Demo →
        </a>
        <a
          href={gh}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white/40 hover:text-white transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  </article>
);

export default ProjectCard;
