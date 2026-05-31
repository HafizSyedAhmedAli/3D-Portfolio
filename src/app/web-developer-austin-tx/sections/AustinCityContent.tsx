import Link from "next/link";
import { austinCityLinks } from "@/constants/austin";

const AustinCityContent = () => {
  return (
    <section className="px-5 md:px-20 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-3">
          Coverage
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Based in Austin, Available Across All of Texas
        </h2>

        <div className="space-y-4 text-white/60 leading-relaxed mb-10">
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

        <div className="mt-10">
          <p className="text-white/40 text-sm font-mono mb-4">Also serving:</p>
          <div className="flex flex-wrap gap-3">
            {austinCityLinks.map((l) => (
              <Link
                key={l.city}
                href={l.href}
                className="px-4 py-2 text-sm rounded-lg border border-white/10 text-white/50 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300"
              >
                Web Developer {l.city}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AustinCityContent;
