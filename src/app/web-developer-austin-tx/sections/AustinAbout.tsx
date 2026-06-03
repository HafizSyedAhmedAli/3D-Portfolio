// Server component
import SectionLabel from "@/components/city/SectionLabel";
import SectionHeading from "@/components/city/SectionHeading";
import AbilityCard from "@/components/city/AbilityCard";
import { austinAbilityCards, austinHighlights } from "@/constants/austin";

const AustinAbout = () => (
  <section
    id="about-austin"
    className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5 scroll-mt-10"
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-16 items-start mb-12 md:mb-16">
        {/* Left: bio */}
        <div>
          <SectionLabel text="Who Am I?" />
          <SectionHeading>
            The Web Developer Austin TX Businesses Actually Call Back
          </SectionHeading>
          <div className="space-y-4 text-white/65 leading-relaxed text-sm md:text-base">
            <p>
              I&apos;m Ahmed Ali — a full-stack developer with hands-on
              experience building production-ready applications that handle real
              users, real data, and real revenue. My work goes beyond writing
              code; I design systems that scale.
            </p>
            <p>
              I focus on the complete package: clean architecture, optimized
              databases, fast APIs, and polished UIs. Every project includes
              type-safe configurations, automated error handling, and
              centralized response management from day one — not bolted on after
              launch.
            </p>
            <p>
              I&apos;ve shipped a live football match platform with real-time
              scores and Stripe subscriptions, a multi-tenant B2B SaaS with AI
              chat widgets, and a full-stack e-commerce marketplace — all
              deployed and serving real users right now.
            </p>
          </div>
        </div>

        {/* Right: highlights + CTA */}
        <div className="flex flex-col gap-3">
          {austinHighlights.map(({ label, value }) => (
            <div
              key={label}
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
            href="#contact-austin"
            className="mt-2 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 font-semibold text-black text-sm"
          >
            Work With Me →
          </a>
        </div>
      </div>

      {/* Ability cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {austinAbilityCards.map((item) => (
          <AbilityCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default AustinAbout;
