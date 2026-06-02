import Image from "next/image";
import HeroScrollButton from "@/components/HeroScrollButton";
import DynamicHeroModel from "@/components/DynamicHeroModel";
import DynamicHeroAnimator from "@/components/DynamicHeroAnimator";
import { techChips } from "@/constants";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen"
      aria-label="Hero"
    >
      <DynamicHeroAnimator />

      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute top-0 left-0 z-10 opacity-30" aria-hidden="true">
        <Image src="/images/bg.png" alt="" width={418} height={327} />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-full md:px-20 px-5 relative z-20 pointer-events-none">
          <div className="flex flex-col gap-5 md:gap-6">
            <div
              className="hero-badge-pill flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm"
              role="status"
              aria-label="Availability status"
            >
              <span className="relative flex size-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full size-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-400 text-sm font-medium tracking-wide">
                Available for work
              </span>
            </div>

            <div className="hero-headline flex flex-col gap-1">
              <h1 className="md:text-6xl text-3xl font-bold leading-[1.1] tracking-tight text-white">
                Full-Stack Developer
              </h1>
              <p className="md:text-4xl text-xl font-bold leading-[1.1] tracking-tight text-emerald-400 max-w-3xl">
                shipping AI-powered products.
              </p>
              <div className="flex items-center gap-1 mt-1">
                <span
                  className="w-8 h-[2px] bg-emerald-500/40 rounded-full"
                  aria-hidden="true"
                />
                <address className="md:text-xl text-sm text-white/50 font-medium tracking-widest uppercase not-italic">
                  Based in Pakistan
                </address>
              </div>
            </div>

            <p className="hero-sub text-white/60 md:text-lg text-sm max-w-lg leading-relaxed">
              I build production-ready web apps and AI-powered SaaS products
              from database schema to deployed UI.
            </p>

            <ul
              className="hero-chips flex flex-wrap gap-2 pointer-events-auto list-none"
              aria-label="Tech stack"
            >
              {techChips.map((chip) => (
                <li key={chip}>
                  <span className="px-3 py-1.5 text-xs font-mono font-semibold rounded-md border border-white/10 bg-white/5 text-white/70 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 cursor-default inline-block">
                    {chip}
                  </span>{" "}
                </li>
              ))}
            </ul>

            <div className="hero-cta flex items-center gap-3 mt-1 pointer-events-auto flex-wrap">
              <HeroScrollButton />
              <a
                href="https://github.com/HafizSyedAhmedAli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Ahmed Ali's GitHub profile"
                className="flex items-center gap-2 px-5 py-3.5 md:py-4 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white/70 hover:text-white text-sm font-medium"
              >
                <Image
                  src="/images/github.svg"
                  alt=""
                  width={18}
                  height={18}
                  aria-hidden="true"
                  className="brightness-0 invert opacity-70"
                />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </header>

        <DynamicHeroModel desktop />
      </div>

      <DynamicHeroModel mobile />
    </section>
  );
};

export default HeroSection;
