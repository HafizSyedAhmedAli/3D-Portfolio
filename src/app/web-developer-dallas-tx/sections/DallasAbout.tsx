import SectionLabel from "@/components/city/SectionLabel";
import SectionHeading from "@/components/city/SectionHeading";
import AbilityCard from "@/components/city/AbilityCard";
import { dallasAbilityCards, dallasHighlights } from "@/constants/dallas";

const DallasAbout = () => (
  <section
    id="about-dallas"
    className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5 scroll-mt-10"
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-16 items-start mb-12 md:mb-16">
        <div>
          <SectionLabel text="Who Am I?" />
          {/* H2 — exact keyword */}
          <SectionHeading>
            The Web Developer Dallas TX Clients Keep Coming Back To
          </SectionHeading>
          <div className="space-y-4 text-white/65 leading-relaxed text-sm md:text-base">
            <p>
              I&apos;m Ahmed Ali — a full-stack developer who builds production-ready
              software that handles real traffic, real transactions, and real business
              requirements. I don&apos;t build prototypes; I build products.
            </p>
            <p>
              Dallas businesses need developers who understand scale. My background
              in layered backend architecture, database optimization, and AI integration
              means your application is built to grow not rebuilt every 12 months
              when requirements change.
            </p>
            <p>
              I&apos;ve shipped a live sports platform with Stripe subscriptions and
              real-time scores, a multi-tenant enterprise SaaS with embedded AI chat,
              and a full-stack marketplace. Every one of these is live, serving users,
              and maintained.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {dallasHighlights.map(({ label, value }, index) => (
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
            href="#contact-dallas"
            className="mt-2 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 font-semibold text-black text-sm"
          >
            Work With Me →
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {dallasAbilityCards.map((item) => (
          <AbilityCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default DallasAbout;