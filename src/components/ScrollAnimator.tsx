"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  selector: string;
  from: gsap.TweenVars;
  to: gsap.TweenVars;
  trigger?: string;
};

const ScrollAnimator = ({ selector, from, to, trigger }: Props) => {
  useGSAP(() => {
    gsap.fromTo(selector, from, {
      ...to,
      scrollTrigger: {
        trigger: trigger ?? selector,
        start: "top 80%",
      },
    });
  });

  return null;
};

export default ScrollAnimator;
