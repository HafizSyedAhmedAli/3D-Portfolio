import AustinHeroActions from "@/components/AustinHeroActions";
import ProfileCard from "@/components/ProfileCard";
import { houstonBulletPoints } from "@/constants/houston";

const HoustonHero = () => (
  <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 px-5 md:px-20 overflow-hidden">
    <div
      className="absolute inset-0 pointer-events-none opacity-20"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
      aria-hidden="true"
    />
    <div
      className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
      aria-hidden="true"
    />

    <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-12 items-start relative z-10">
      <div>
        <div className="flex items-center gap-2 w-fit px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-5 md:mb-6">
          <span className="relative flex size-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full size-2 bg-emerald-400" />
          </span>
          <span className="text-emerald-400 text-xs md:text-sm font-medium">
            Available for new projects
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-4 md:mb-6">
          <span className="text-emerald-400">Web Developer Houston TX</span> –
          Enterprise Backends &amp; AI Apps
        </h1>

        <p className="text-white/60 text-base md:text-lg leading-relaxed mb-5 md:mb-6 max-w-xl">
          Hi, I&apos;m Ahmed Ali —{" "}
          <strong className="text-white">a web developer in Houston TX</strong>{" "}
          businesses trust for reliable, scalable software. I build
          enterprise-grade backends, AI-powered SaaS platforms, and full-stack
          applications with Next.js, Node.js, and PostgreSQL. Systems that hold
          up when it matters.
        </p>

        <ul className="flex flex-col gap-2.5 md:gap-3 mb-7 md:mb-8 list-none">
          {houstonBulletPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span
                className="mt-1.5 size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)] flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-white/65 text-sm leading-relaxed">
                {point}
              </span>
            </li>
          ))}
        </ul>

        <AustinHeroActions />
      </div>

      <ProfileCard
        url="/images/web-developer-houston-tx-enterprise-backends-ai-apps.png"
        alt="Web Developer Houston TX"
      />
    </div>
  </section>
);

export default HoustonHero;
