"use client";

import { ExpCard, Testimonial } from "@/types";
import { useRef, type MouseEvent, type ReactNode } from "react";
import gsap from "gsap";

type Props = {
  card?: ExpCard;
  testimonial?: Testimonial;
  children: ReactNode;
  index: number;
  className?: string;
};

const GlowCard = ({ children, index, className }: Props) => {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleMouseMove =
    (index: number) => (e: MouseEvent<HTMLDivElement>) => {
      const card = cardRefs.current[index];
      if (!card) return;

      const rect = card.getBoundingClientRect();

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const rotateY = ((mouseX - rect.width / 2) / rect.width) * 10;
      const rotateX = -((mouseY - rect.height / 2) / rect.height) * 10;

      gsap.to(card, {
        rotateX,
        rotateY,
        transformPerspective: 1000,
        duration: 0.4,
        ease: "power2.out",
      });

      card.style.setProperty("--mouse-x", `${mouseX}px`);
      card.style.setProperty("--mouse-y", `${mouseY}px`);
    };

  const handleMouseLeave = (index: number) => () => {
    const card = cardRefs.current[index];
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={(e) => {
        cardRefs.current[index] = e;
      }}
      onMouseMove={handleMouseMove(index)}
      onMouseLeave={handleMouseLeave(index)}
      className={`card card-border timeline-card rounded-3xl p-8 md:p-10 relative overflow-hidden border border-white/10 bg-black-100/80 backdrop-blur-xl ${className ?? ""}`}
    >
      <div className="glow" />
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(16,185,129,0.14),transparent_35%)]" />
      </div>

      {children}
    </div>
  );
};

export default GlowCard;
