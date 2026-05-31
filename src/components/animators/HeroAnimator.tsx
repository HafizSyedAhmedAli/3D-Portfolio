"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const HeroAnimator = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-badge-pill",
      { y: -16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
    );
    gsap.fromTo(
      ".hero-headline > *",
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.15,
      },
    );
    gsap.fromTo(
      ".hero-sub",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.4 },
    );
    gsap.fromTo(
      ".hero-chips > *",
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.06,
        duration: 0.4,
        ease: "power2.out",
        delay: 0.55,
      },
    );
    gsap.fromTo(
      ".hero-cta",
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power2.out", delay: 0.7 },
    );
  });

  return null;
};

export default HeroAnimator;
