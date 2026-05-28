"use client";

import { techMeta, techStackIcons } from "@/constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import TitleHeader from "../components/TitleHeader";

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
    <section id="skills" className="w-full section-padding md:px-20 px-5 scroll-mt-28">
      <TitleHeader title="My Core Tech Stack" sub="⚡ What I Build With" />

      <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4">
        {techStackIcons.map((icon, index) => {
          const meta = techMeta[icon.name];
          return (
            <div
              key={icon.name}
              className="tech-card-new group relative rounded-2xl border border-white/8 bg-white/2 hover:border-emerald-500/40 hover:bg-emerald-500/3 transition-all duration-500 overflow-hidden"
            >
              {/* Top bar accent */}
              <div className="h-px w-0 group-hover:w-full bg-linear-to-r from-emerald-500/80 via-emerald-400/50 to-transparent transition-all duration-700 ease-out" />

              {/* 3D Model */}
              <div className="h-52 w-full cursor-grab active:cursor-grabbing">
                <TechIcon model={icon} />
              </div>

              {/* Info */}
              <div className="px-5 pb-5 pt-1 border-t border-white/5">
                {/* Clean rendered text without hacking string replacements */}
                <p className="text-white font-semibold text-base tracking-tight">
                  {icon.name}
                </p>
                {meta && (
                  <p className={`text-xs font-mono mt-1 ${meta.color}`}>
                    {meta.label}
                  </p>
                )}
              </div>

              {/* Corner number using map index */}
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
