import {
  austinAvailability,
  austinStats,
  bulletPoints,
} from "@/constants/austin";
import Image from "next/image";

const AustinHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-5 md:px-20 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 items-start relative z-10">
        {/* ── Left Column ── */}
        <div>
          <div className="flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-emerald-400" />
            </span>
            <span className="text-emerald-400 text-sm font-medium">
              Available for new projects
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            <span className="text-emerald-400">
              Professional Web Developer Austin TX
            </span>{" "}
            – Full-Stack & AI-Powered Apps
          </h1>

          <p className="text-white/60 text-lg leading-relaxed mb-6 max-w-xl">
            Hi, I&apos;m Ahmed Ali —{" "}
            <strong className="text-white">a web developer in Austin TX</strong>{" "}
            clients trust for production-ready Next.js, Node.js, PostgreSQL, and
            Redis applications. From SaaS platforms to AI-powered tools, I ship
            clean code that works.
          </p>

          <ul className="flex flex-col gap-3 mb-8">
            {bulletPoints.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)] flex-shrink-0" />
                <span className="text-white/65 text-sm leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact-austin"
              className="px-7 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 font-semibold text-black text-sm"
            >
              Get a Free Quote →
            </a>
            <a
              href="#projects-austin"
              className="px-7 py-4 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white/70 hover:text-white text-sm font-medium"
            >
              See My Work
            </a>
          </div>
        </div>

        {/* ── Right Column ── */}
        <div className="flex flex-col gap-5">
          {/* Image */}
          <div className="relative">
            <Image
              src="/images/Professional Web Developer Austin TX – Full-Stack & AI-Powered Apps.png"
              alt="This image is a sleek personal branding graphic introducing Ahmed Ali as a professional web developer. It features a confident photo of him — sunglasses on, arms folded — set against a dark background that makes the design elements pop. To the left, a bold green rounded rectangle highlights his expertise: Web Developer based in Austin, TX, specializing in Full-Stack development and AI-Powered Apps. Ahmed Ali, appears clearly below in white text"
              width={640}
              height={360}
              className="w-full h-auto rounded-2xl"
              priority
            />
            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-emerald-500 text-black text-xs font-bold shadow-lg">
              Open for Projects
            </div>
          </div>

          {/* Quick stats row */}
          <div className="grid grid-cols-3 gap-3">
            {austinStats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center gap-1 rounded-xl border border-white/8 bg-white/2 hover:border-emerald-500/30 transition-all duration-300 py-4 px-2"
              >
                <p className="text-xl font-bold text-emerald-400">{s.value}</p>
                <p className="text-[11px] text-white/40 font-mono text-center">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Availability card */}
          <div className="rounded-xl border border-white/8 bg-white/2 p-5 flex flex-col gap-3">
            <p className="text-xs font-mono tracking-widest uppercase text-emerald-400/70">
              Current Status
            </p>
            {austinAvailability.map(({ label, value, dot }) => (
              <div
                key={label}
                className="flex items-center justify-between gap-16 w-full"
                aria-label="Current Availability"
              >
                <span className="text-sm text-white/50">{label}</span>
                <span
                  className={`text-sm font-medium flex items-center gap-2 ${
                    dot ? "text-emerald-400" : "text-white/75"
                  }`}
                >
                  {dot && (
                    <span className="relative flex size-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full size-1.5 bg-emerald-400" />
                    </span>
                  )}
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AustinHero;
