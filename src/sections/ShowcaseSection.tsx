import TitleHeader from "@/components/TitleHeader";
import ShowcaseAnimator from "@/components/animators/ShowcaseAnimator";
import { projects } from "@/constants";
import Image from "next/image";

const ArrowIcon = () => (
  <svg
    className="size-3 group-hover/link:translate-x-1 transition-transform duration-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

type ProjectLinksProps = {
  liveLink?: string;
  githubLink?: string;
  title: string;
};

const ProjectLinks = ({ liveLink, githubLink, title }: ProjectLinksProps) => (
  <nav aria-label={`${title} links`} className="flex items-center gap-4">
    {liveLink && (
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} live demo`}
        className="flex items-center gap-2 text-xs font-medium text-white/30 hover:text-emerald-400 transition-colors duration-300 group/link"
      >
        <span>Live Demo</span>
        <ArrowIcon />
      </a>
    )}
    {liveLink && githubLink && (
      <span className="text-white/10" aria-hidden="true">
        |
      </span>
    )}
    {githubLink && (
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} source code on GitHub`}
        className="text-xs font-medium text-white/30 hover:text-white transition-colors duration-300"
      >
        GitHub
      </a>
    )}
  </nav>
);

const ShowcaseSection = () => {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="work"
      className="w-full md:mt-20 mt-10 md:px-20 px-5 pb-20 scroll-mt-28 md:scroll-mt-20"
      aria-label="Projects showcase"
    >
      <ShowcaseAnimator />
      <TitleHeader sub="Selected Work" title="What I've Built" />

      <article className="project-card group relative w-full rounded-2xl overflow-hidden border border-white/5 bg-white/2 hover:border-emerald-500/30 transition-all duration-500 mb-6">
        <div className="flex flex-col xl:flex-row">
          <div className="xl:w-3/5 h-64 md:h-96 xl:h-auto relative overflow-hidden">
            <Image
              src={featured.img}
              alt={`Screenshot of ${featured.title}`}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div
              className="absolute inset-0 bg-linear-to-r from-transparent to-black/60 xl:block hidden"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent xl:hidden"
              aria-hidden="true"
            />
          </div>

          <div className="xl:w-2/5 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase">
                  Featured Project
                </span>
                <span
                  className="w-8 h-px bg-emerald-400/40"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {featured.title}
              </h3>
              <p className="text-white/60 leading-relaxed mb-6">
                {featured.desc}
              </p>
              <ul
                className="flex flex-wrap gap-2 list-none"
                aria-label="Technologies used"
              >
                {featured.tags.map((tag) => (
                  <li key={tag}>
                    <span className="px-3 py-1 text-xs font-mono rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 inline-block">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <ProjectLinks
                liveLink={featured.liveLink}
                githubLink={featured.githubLink}
                title={featured.title}
              />
            </div>
          </div>
        </div>
      </article>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 list-none">
        {rest.map((project) => (
          <li key={project.id}>
            <article className="project-card group relative rounded-2xl overflow-hidden border border-white/5 bg-white/2 hover:border-emerald-500/30 transition-all duration-500 h-full">
              <div className="h-52 md:h-96 relative overflow-hidden">
                <Image
                  src={project.img}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"
                  aria-hidden="true"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                <ul
                  className="flex flex-wrap gap-2 mb-4 list-none"
                  aria-label="Technologies used"
                >
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <span className="px-2 py-1 text-xs font-mono rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 inline-block">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
                <ProjectLinks
                  liveLink={project.liveLink}
                  githubLink={project.githubLink}
                  title={project.title}
                />
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowcaseSection;
