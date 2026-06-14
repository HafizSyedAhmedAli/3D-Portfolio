import Link from "next/link";
import SectionLabel from "@/components/city/SectionLabel";
import SectionHeading from "@/components/city/SectionHeading";
import { dallasCityLinks, dallasServices_strip } from "@/constants/dallas";

const DallasCityContent = () => (
  <>
    <section className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionLabel text="Coverage" />
        {/* H2 — exact keyword */}
        <SectionHeading>
          Web Developer Dallas TX — Serving All of DFW
        </SectionHeading>

        <div className="space-y-4 text-white/60 leading-relaxed text-sm md:text-base mb-8 md:mb-10">
          <p>
            As a <strong className="text-white">web developer dallas tx</strong>{" "}
            clients reach out to, I cover the entire Dallas-Fort Worth metroplex
            remotely — including Plano, Frisco, Irving, Garland, McKinney, Allen,
            Richardson, Carrollton, Lewisville, and beyond. You get the same quality
            product whether you&apos;re in Uptown Dallas or out in the suburbs.
          </p>
          <p>
            Dallas is one of the most competitive tech markets in the United States.
            From the Telecom Corridor in Richardson to the start-up scene in Deep
            Ellum, businesses here need developers who can ship fast without cutting
            corners. My expertise in Next.js, TypeScript, PostgreSQL, Redis, and AI
            integration means your product is built to compete at that level.
          </p>
          <p>
            I also cover the broader Texas market. If you need a{" "}
            <strong className="text-white">web developer dallas tx</strong> who can
            also handle projects in Austin, Houston, or San Antonio — same developer,
            same standards, same direct communication. No agency markup.
          </p>
        </div>

        <div className="mt-8 md:mt-10">
          <p className="text-white/40 text-xs font-mono mb-3 md:mb-4">
            Also serving:
          </p>
          <nav aria-label="Other Texas cities served">
            <ul className="flex flex-wrap gap-2 md:gap-3 list-none">
              {dallasCityLinks.map((l) => (
                <li key={l.city}>
                  <Link
                    href={l.href}
                    className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm rounded-lg border border-white/10 text-white/50 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300"
                  >
                    Web Developer {l.city}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>

    <div className="w-full border-t border-b border-emerald-500/20 bg-emerald-500/5 py-4 px-5 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-4 md:gap-x-8 gap-y-2">
        <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase flex-shrink-0">
          Trusted for
        </span>
        {dallasServices_strip.map((item, i, arr) => (
          <span key={item} className="flex items-center gap-2 md:gap-3">
            <span className="text-white/60 text-xs md:text-sm font-medium">{item}</span>
            {i < arr.length - 1 && (
              <span className="size-1 rounded-full bg-emerald-400/40" aria-hidden="true" />
            )}
          </span>
        ))}
      </div>
    </div>
  </>
);

export default DallasCityContent;