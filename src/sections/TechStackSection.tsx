"use client";

import { techMeta, techStackIcons } from "@/constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import TitleHeader from "../components/TitleHeader";
import LazyCanvas from "@/components/LazyCanvas";

gsap.registerPlugin(ScrollTrigger);

const TechStackSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card-new",
      { y: 40, opacity: 0, scale: 0.97 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 70%",
        },
      },
    );
  }, []);

  return (
    <section
      id="skills"
      className="w-full section-padding md:px-20 px-5 scroll-mt-28"
    >
      <TitleHeader title="My Core Tech Stack" sub="⚡ What I Build With" />

      <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 md:gap-4">
        {techStackIcons.map((icon, index) => {
          const meta = techMeta[icon.name];
          return (
            <div
              key={icon.name}
              className="tech-card-new group relative rounded-2xl border border-white/8 bg-white/2 hover:border-emerald-500/40 hover:bg-emerald-500/3 transition-all duration-500 overflow-hidden"
            >
              {/* Hover accent bar */}
              <div className="h-px w-0 group-hover:w-full bg-linear-to-r from-emerald-500/80 via-emerald-400/50 to-transparent transition-all duration-700 ease-out" />

              {/*
                3D on all screen sizes — LazyCanvas ensures each Canvas only
                mounts when it scrolls into view, staggering the 5 WebGL
                context creations instead of all racing at page load.
                Mobile gets antialias:false and DPR capped at 2 inside TechIcon.
              */}
              <LazyCanvas className="h-40 sm:h-48 md:h-52 w-full cursor-grab active:cursor-grabbing">
                <TechIcon model={icon} />
              </LazyCanvas>

              <div className="px-4 md:px-5 pb-4 md:pb-5 pt-1 border-t border-white/5">
                <p className="text-white font-semibold text-sm md:text-base tracking-tight">
                  {icon.name}
                </p>
                {meta && (
                  <p
                    className={`text-[10px] md:text-xs font-mono mt-0.5 md:mt-1 ${meta.color}`}
                  >
                    {meta.label}
                  </p>
                )}
              </div>

              <span className="absolute top-3 right-3 font-mono text-[10px] text-white/20">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStackSection;
