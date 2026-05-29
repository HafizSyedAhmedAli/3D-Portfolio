"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceAnimator = () => {
  useGSAP(() => {
    gsap.set(".exp-reveal", {
      opacity: 0,
      y: 80,
      scale: 0.96,
      filter: "blur(10px)",
    });

    gsap.utils.toArray<HTMLElement>(".exp-reveal").forEach((card) => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: card, start: "top 82%" },
      });
      tl.to(card, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.1,
        ease: "power3.out",
      });
      tl.from(
        card.querySelectorAll(".animate-item"),
        { opacity: 0, y: 20, stagger: 0.08, duration: 0.6, ease: "power2.out" },
        "-=0.7",
      );
    });

    gsap.utils.toArray<HTMLElement>(".experience-node").forEach((node) => {
      gsap.to(node, {
        scale: 1.15,
        boxShadow: "0px 0px 30px rgba(16,185,129,0.9)",
        repeat: -1,
        yoyo: true,
        duration: 1.8,
        ease: "sine.inOut",
      });
    });

    gsap.utils.toArray<HTMLElement>(".floating-card").forEach((card, i) => {
      gsap.to(card, {
        y: i % 2 === 0 ? -12 : -18,
        duration: 3 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    gsap.utils.toArray<HTMLElement>(".parallax-card").forEach((card) => {
      gsap.to(card, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: { trigger: card, scrub: true },
      });
    });

    gsap.set(".experience-line-active", { height: 0 });
    gsap.to(".experience-line-active", {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: "#experience",
        start: "top 70%",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return null;
};

export default ExperienceAnimator;
