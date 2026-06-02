import { austinAbilityCards, austinHighlights } from "@/constants/austin";

const AustinAbout = () => {
  return (
    <section className="px-5 md:px-20 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-3">
              Who Am I?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Web Developer Austin TX Businesses Actually Call Back
            </h2>
            <div className="space-y-4 text-white/65 leading-relaxed">
              <p>
                I&apos;m Ahmed Ali — a full-stack developer with hands-on
                experience building production-ready applications that handle
                real users, real data, and real revenue. My work goes beyond
                writing code; I design systems that scale.
              </p>
              <p>
                I focus on the complete package: clean architecture, optimized
                databases, fast APIs, and polished UIs. Every project includes
                type-safe configurations, automated error handling, and
                centralized response management from day one — not bolted on
                after launch.
              </p>
              <p>
                I&apos;ve shipped a live football match platform with real-time
                scores and Stripe subscriptions, a multi-tenant B2B SaaS with AI
                chat widgets, and a full-stack e-commerce marketplace — all
                deployed and serving real users right now.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {austinHighlights.map(({ label, value }, index) => (
              <div
                key={`${label}-${index}`}
                className="flex items-start justify-between gap-8 p-5 rounded-xl border border-white/8 bg-white/2 hover:border-emerald-500/30 transition-all duration-300"
              >
                <span className="text-white/40 text-sm font-mono flex-shrink-0">
                  {label}
                </span>
                <span className="text-white/80 text-sm text-right leading-relaxed">
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {austinAbilityCards.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 p-5 rounded-xl border border-white/8 bg-white/2 hover:border-emerald-500/30 transition-all duration-300"
            >
              <span className="text-2xl">{item.icon}</span>
              <p className="text-white font-semibold text-sm">{item.title}</p>
              <p className="text-white/50 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AustinAbout;
