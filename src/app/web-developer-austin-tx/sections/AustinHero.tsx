import { austinStats, austinSkillTags } from "@/constants/austin";
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 items-center relative z-10">
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

          {/* H1 — exact keyword here, this is the most important place */}
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            <span className="text-emerald-400">Web Developer Austin TX</span>
            {" "}– Full-Stack & AI-Powered Apps
          </h1>

          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
            Hi, I&apos;m Ahmed Ali — a{" "}
            <strong className="text-white">web developer in austin tx,</strong>{" "}
            clients trust for production-ready Next.js, Node.js, PostgreSQL,
            and Redis applications. From SaaS platforms to AI-powered tools,
            I ship clean code that works.
          </p>

          <div className="flex flex-wrap gap-6 mb-8">
            {austinStats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-emerald-400">{s.value}</p>
                <p className="text-sm text-white/50">{s.label}</p>
              </div>
            ))}
          </div>

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

        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/2 p-8 backdrop-blur-sm">
            <div className="flex items-center gap-5 mb-6">
              <div className="size-20 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                {/* swap with <Image src="/images/your-photo.jpg" ... /> */}
                {/* <span className="text-3xl font-bold text-emerald-400">AA</span> */}
                <Image src="/images/my-photo.jpeg" alt="My Photo" width={273} height={313} />
              </div>
              <div>
                <p className="text-xl font-bold text-white">Ahmed Ali</p>
                <p className="text-emerald-400 text-sm font-mono">
                  Full-Stack Developer · Austin TX
                </p>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="size-2 rounded-full bg-emerald-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              &ldquo;I build enterprise-grade architecture for every project —
              whether it&apos;s a startup MVP or a full SaaS platform with
              subscriptions, real-time data, and AI integrations.&rdquo;
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {austinSkillTags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-xs font-mono rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-center"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-emerald-500 text-black text-xs font-bold shadow-lg">
            Open for Projects
          </div>
        </div>
      </div>
    </section>
  );
};

export default AustinHero;