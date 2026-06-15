import Link from "next/link";
import SectionLabel from "@/components/city/SectionLabel";
import SectionHeading from "@/components/city/SectionHeading";
import { houstonCityLinks, houstonServices_strip } from "@/constants/houston";

const HoustonCityContent = () => (
  <>
    <section className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionLabel text="Coverage" />
        <SectionHeading>
          Web Developer Houston TX — Covering Greater Houston
        </SectionHeading>

        <div className="space-y-4 text-white/60 leading-relaxed text-sm md:text-base mb-8 md:mb-10">
          <p>
            As a{" "}
            <strong className="text-white">web developer houston tx</strong>{" "}
            businesses hire, I work remotely across the entire Greater Houston
            area — Sugar Land, The Woodlands, Pearland, Katy, Pasadena, Baytown,
            League City, and beyond. Whether you&apos;re in the Energy Corridor,
            Downtown, or the Texas Medical Center, remote collaboration means
            you get the same output without paying Houston agency rates.
          </p>
          <p>
            Houston is one of the largest and most economically diverse cities
            in the country. From energy companies needing operational dashboards
            to healthcare tech startups building patient portals, the demands
            here are real and the stakes are high. My expertise in Next.js,
            Node.js, PostgreSQL, Redis, and AI integration delivers the kind of
            software that holds up in those environments.
          </p>
          <p>
            I also cover the wider Texas market. If you need a{" "}
            <strong className="text-white">web developer houston tx</strong> who
            can work across Austin, Dallas, and San Antonio projects too — same
            developer, same standards, no agency overhead. One point of contact
            for every project.
          </p>
        </div>

        <div className="mt-8 md:mt-10">
          <p className="text-white/40 text-xs font-mono mb-3 md:mb-4">
            Also serving:
          </p>
          <nav aria-label="Other Texas cities served">
            <ul className="flex flex-wrap gap-2 md:gap-3 list-none">
              {houstonCityLinks.map((l) => (
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
        {houstonServices_strip.map((item, i, arr) => (
          <span key={item} className="flex items-center gap-2 md:gap-3">
            <span className="text-white/60 text-xs md:text-sm font-medium">
              {item}
            </span>
            {i < arr.length - 1 && (
              <span
                className="size-1 rounded-full bg-emerald-400/40"
                aria-hidden="true"
              />
            )}
          </span>
        ))}
      </div>
    </div>
  </>
);

export default HoustonCityContent;
