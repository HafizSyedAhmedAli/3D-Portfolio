"use client";

import { useEffect, useState } from "react";
import HeroSectionExperienceModel from "./HeroSectionModels/HeroSectionExperienceModel";

type Props = {
  desktop?: boolean;
  mobile?: boolean;
};

const HeroModel = ({ desktop, mobile }: Props) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (isMobile === null) return null;

  // Desktop prop: only render when on desktop
  if (desktop && !isMobile) {
    return (
      <figure className="absolute top-0 right-0 w-[55%] h-full rounded-l-3xl overflow-hidden cursor-grab active:cursor-grabbing">
        <HeroSectionExperienceModel />
      </figure>
    );
  }

  // Mobile prop: only render when on mobile
  if (mobile && isMobile) {
    return (
      <figure className="w-full">
        <div className="w-full h-64 cursor-grab active:cursor-grabbing">
          <HeroSectionExperienceModel />
        </div>
      </figure>
    );
  }

  return null;
};

export default HeroModel;
