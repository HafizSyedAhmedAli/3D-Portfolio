// Server component
import Link from "next/link";
import SectionLabel from "@/components/city/SectionLabel";
import SectionHeading from "@/components/city/SectionHeading";
import { austinCityLinks, services } from "@/constants/austin";

const AustinCityContent = () => (
  <>
    <section className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionLabel text="Coverage" />
        <SectionHeading>
          Based in Austin, Available Across All of Texas
        </SectionHeading>

        <div className="space-y-4 text-white/60 leading-relaxed text-sm md:text-base mb-8 md:mb-10">
          <p>
            I work remotely with businesses across the entire Austin metro —
            Round Rock, Cedar Park, Pflugerville, Georgetown, Leander, Kyle,
            Buda, San Marcos, and beyond. If you&apos;re searching for a{" "}
            <strong className="text-white">web developer austin tx</strong>,
            distance is never a barrier. You get the same quality whether
            you&apos;re on South Congress or out in the Hill Country.
          </p>
          <p>
            Austin is one of the fastest-growing tech hubs in the US. From the
            Domain to Downtown, startups and established companies need
            developers who know modern stacks. My expertise in Next.js,
            TypeScript, Node.js, PostgreSQL, and Redis puts your project on the
            same level as what top Austin tech companies ship internally.
          </p>
          <p>
            I also cover the wider Texas market. Whether you&apos;re in Dallas,
            Houston, San Antonio, Fort Worth, Plano, or Frisco — remote
            collaboration means you get the same quality, just without the
            Austin agency price tag.
          </p>
        </div>

        <div className="mt-8 md:mt-10">
          <p className="text-white/40 text-xs font-mono mb-3 md:mb-4">
            Also serving:
          </p>
          <nav aria-label="Other Texas cities served">
            <ul className="flex flex-wrap gap-2 md:gap-3 list-none">
              {austinCityLinks.map((l) => (
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

    {/* Services strip */}
    <div className="w-full border-t border-b border-emerald-500/20 bg-emerald-500/5 py-4 px-5 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-4 md:gap-x-8 gap-y-2">
        <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase flex-shrink-0">
          Trusted for
        </span>
        {services.map((item, i, arr) => (
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

export default AustinCityContent;
