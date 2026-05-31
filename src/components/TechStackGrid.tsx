"use client";

import { techMeta, techStackIcons } from "@/constants";
import TechIcon from "./Models/TechLogos/TechIcon";
import Image from "next/image";
import { useState, useEffect } from "react";

const TechStackGrid = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const visibleIcons = isMobile
    ? techStackIcons
    : techStackIcons.slice(0, techStackIcons.length - 1);

  return (
    <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 md:gap-4">
      {visibleIcons.map((icon, index) => {
        const meta = techMeta[icon.name];
        return (
          <div
            key={icon.name}
            className="tech-card-new group relative rounded-2xl border border-white/8 bg-white/2 hover:border-emerald-500/40 hover:bg-emerald-500/3 transition-all duration-500 overflow-hidden"
          >
            <div className="h-px w-0 group-hover:w-full bg-linear-to-r from-emerald-500/80 via-emerald-400/50 to-transparent transition-all duration-700 ease-out" />

            {isMobile ? (
              <div className="h-40 w-full flex items-center justify-center">
                <Image
                  src={icon.imgPath}
                  alt={icon.name}
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="h-40 sm:h-48 md:h-52 w-full cursor-grab active:cursor-grabbing">
                <TechIcon model={icon} />
              </div>
            )}

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

            <span className="absolute top-3 right-3 font-mono text-[10px] text-white/40">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TechStackGrid;
