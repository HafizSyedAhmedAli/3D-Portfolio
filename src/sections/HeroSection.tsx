"use client";

import { useGSAP } from "@gsap/react";
import HeroSectionExperienceModel from "../components/HeroSectionModels/HeroSectionExperienceModel";
import { gsap } from "gsap";
import Image from "next/image";

const techChips = ["Next.js", "Node.js", "PostgreSQL", "Redis", "TypeScript"];

const HeroSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-badge-pill",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
    );
    gsap.fromTo(
      ".hero-headline > *",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      },
    );
    gsap.fromTo(
      ".hero-sub",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: 0.65 },
    );
    gsap.fromTo(
      ".hero-chips > *",
      { y: 15, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.85,
      },
    );
    gsap.fromTo(
      ".hero-cta",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 1.1 },
    );
  });

  const handleScrollToWork = () => {
    const target = document.getElementById("work");
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* bg corner image from original */}
      <div className="absolute top-0 left-0 z-10 opacity-30">
        <Image src="/images/bg.png" alt="background" width={418} height={327} />
      </div>

      <div className="hero-layout">
        {/* LEFT CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 relative z-20 pointer-events-none">
          <div className="flex flex-col gap-6">
            {/* Availability badge */}
            <div className="hero-badge-pill flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full size-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-400 text-sm font-medium tracking-wide">
                Available for work
              </span>
            </div>

            {/* Headline */}
            <div className="hero-headline flex flex-col gap-1">
              <h1 className="md:text-6xl text-2xl font-bold leading-[1.1] tracking-tight text-white">
                Full-Stack Developer
              </h1>
              <h1 className="md:text-4xl text-xl font-bold leading-[1.1] tracking-tight text-emerald-400 max-w-3xl">
                shipping AI-powered products.
              </h1>
              <div className="flex items-center gap-1 mt-1">
                <span className="w-8 h-[2px] bg-emerald-500/40 rounded-full" />
                <h2 className="md:text-xl text-base text-white/40 font-medium tracking-widest uppercase text-nowrap">
                  Based in Pakistan
                </h2>
              </div>
            </div>

            {/* Subtext */}
            <p className="hero-sub text-white/60 md:text-lg text-base max-w-lg leading-relaxed">
              I build production-ready web apps and AI-powered SaaS products
              from database schema to deployed UI.
            </p>

            {/* Tech chips */}
            <div className="hero-chips flex flex-wrap gap-2 pointer-events-auto">
              {techChips.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 text-xs font-mono font-semibold rounded-md border border-white/10 bg-white/5 text-white/70 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 cursor-default"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta flex items-center gap-4 mt-2 pointer-events-auto">
              <button
                onClick={handleScrollToWork}
                className="group relative flex items-center gap-3 px-7 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 font-semibold text-black text-sm tracking-wide overflow-hidden cursor-pointer"
              >
                <span className="relative z-10">See My Work</span>
                <svg
                  className="relative z-10 size-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              </button>

              <a
                href="https://github.com/HafizSyedAhmedAli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-4 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white/70 hover:text-white text-sm font-medium"
              >
                <Image
                  src="/images/github.svg"
                  alt="GitHub"
                  width={18}
                  height={18}
                  className="brightness-0 invert opacity-70"
                />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </header>

        {/* RIGHT: 3D MODEL */}
        <figure>
          <div className="absolute top-0 right-0 w-[55%] h-full rounded-l-3xl overflow-hidden cursor-grab active:cursor-grabbing">
            <HeroSectionExperienceModel />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
