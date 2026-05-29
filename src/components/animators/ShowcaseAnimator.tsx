"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseAnimator = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".project-card",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#work",
          start: "top 75%",
        },
      },
    );
  }, []);

  return null;
};

export default ShowcaseAnimator;
