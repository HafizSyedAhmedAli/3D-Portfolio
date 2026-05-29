"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  title: string;
  sub: string;
};

const TitleHeader = ({ title, sub }: Props) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".title-sub", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
      });

      gsap.from(".title-heading", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="mb-12">
      <p className="title-sub text-emerald-400 font-mono text-sm tracking-widest uppercase mb-3">
        {sub}
      </p>

      <h2 className="title-heading text-3xl md:text-5xl leading-[1.2] md:leading-[1.15] font-bold text-white">
        {title}
      </h2>
    </div>
  );
};

export default TitleHeader;
