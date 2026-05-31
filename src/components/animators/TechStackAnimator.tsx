"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechStackAnimator = () => {
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

  return null;
};

export default TechStackAnimator;
