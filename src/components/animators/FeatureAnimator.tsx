"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureAnimator = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".feature-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: "#approach", start: "top 75%" },
      },
    );

    gsap.fromTo(
      ".feature-title",
      { y: 16, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: "#approach", start: "top 75%" },
      },
    );

    gsap.fromTo(
      ".feature-text",
      { y: 12, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: "#approach", start: "top 75%" },
      },
    );

    gsap.fromTo(
      ".feature-tag",
      { y: 10, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.45,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: { trigger: "#approach", start: "top 70%" },
      },
    );

    gsap.fromTo(
      ".metric-bar",
      { width: "0%" },
      {
        width: (i, el) => `${el.getAttribute("data-value")}%`,
        duration: 1,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: "#approach", start: "top 70%" },
      },
    );
  }, []);

  return null;
};

export default FeatureAnimator;
