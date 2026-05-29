"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TestimonialAnimator = () => {
  useGSAP(() => {
    gsap.utils
      .toArray<HTMLElement>(".testimonial-item")
      .forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: index * 0.08,
            ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 88%" },
          },
        );
      });
  }, []);

  return null;
};

export default TestimonialAnimator;
