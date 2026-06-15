import SectionLabel from "@/components/city/SectionLabel";
import SectionHeading from "@/components/city/SectionHeading";
import AbilityCard from "@/components/city/AbilityCard";
import { houstonAbilityCards, houstonHighlights } from "@/constants/houston";

const HoustonAbout = () => (
  <section
    id="about-houston"
    className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5 scroll-mt-10"
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-16 items-start mb-12 md:mb-16">
        <div>
          <SectionLabel text="Who Am I?" />
          <SectionHeading>
            The Web Developer Houston TX Businesses Rely On
          </SectionHeading>
          <div className="space-y-4 text-white/65 leading-relaxed text-sm md:text-base">
            <p>
              I&apos;m Ahmed Ali — a full-stack developer who builds software
              that performs under real conditions. Houston businesses deal with
              high transaction volumes, demanding users, and zero tolerance for
              downtime. That&apos;s the bar I build to.
            </p>
            <p>
              My work covers the full stack: layered backend architecture,
              optimized PostgreSQL schemas, Redis-backed caching, and polished
              Next.js frontends. Every project is type-safe, documented, and
              shipped with error handling built in from the start — not added
              after your first production incident.
            </p>
            <p>
              I&apos;ve shipped a real-time sports platform with Stripe
              subscriptions and live data, an enterprise multi-tenant SaaS with
              AI chat widgets, and a high-throughput e-commerce marketplace. All
              live, all maintained, all serving real users right now.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {houstonHighlights.map(({ label, value }, index) => (
            <div
              key={`${label}-${index}`}
              className="flex items-start justify-between gap-4 p-4 md:p-5 rounded-xl border border-white/8 bg-white/2 hover:border-emerald-500/30 transition-all duration-300"
            >
              <span className="text-white/40 text-xs font-mono flex-shrink-0 pt-0.5">
                {label}
              </span>
              <span className="text-white/80 text-xs md:text-sm text-right leading-relaxed">
                {value}
              </span>
            </div>
          ))}
          <a
            href="#contact-houston"
            className="mt-2 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 font-semibold text-black text-sm"
          >
            Work With Me →
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {houstonAbilityCards.map((item) => (
          <AbilityCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default HoustonAbout;
