"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { abilities, performanceMetrics, techTags } from "../constants";
import TitleHeader from "@/components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const FeatureCardSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".feature-card");
      const titles = gsap.utils.toArray<HTMLElement>(".feature-title");
      const texts = gsap.utils.toArray<HTMLElement>(".feature-text");
      const tags = gsap.utils.toArray<HTMLElement>(".feature-tag");
      const bars = gsap.utils.toArray<HTMLElement>(".metric-bar");

      gsap.fromTo(
        ".feature-section-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        titles,
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        texts,
        { y: 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        tags,
        { y: 10, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );

      gsap.fromTo(
        bars,
        { width: "0%" },
        {
          width: (i, el) => `${el.getAttribute("data-value")}%`,
          duration: 1,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="w-full md:px-20 px-5 md:mt-20 mt-10 scroll-mt-20"
    >
      <div className="feature-section-title">
        <TitleHeader
          sub="Engineering Principles"
          title="How I Approach Every Build"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="feature-card md:col-span-2 border border-white/10 bg-white/4 hover:border-emerald-500/30 transition-all duration-500 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={abilities[0].imgPath}
                alt={abilities[0].title}
                width={28}
                height={28}
              />
              <h3 className="feature-title text-white text-xl font-semibold">
                {abilities[0].title}
              </h3>
            </div>
            <p className="feature-text text-white/60 text-base leading-relaxed">
              {abilities[0].desc}
            </p>
          </div>

          <div className="border border-white/10 bg-black/40 rounded-xl p-4 font-mono text-xs shrink-0 pb-6">
            <p className="text-emerald-400 mb-2">
              router.post(&apos;/api/v1/users&apos;)
            </p>
            <p className="pl-4 text-white/50">→ authMiddleware</p>
            <p className="pl-4 text-white/50">→ controller</p>
            <p className="pl-4 text-white/50">→ service</p>
            <p className="pl-4 text-white/50">→ repository</p>
            <p className="pl-4 text-white/50">→ Database</p>
          </div>
        </div>

        <div className="feature-card border border-white/10 bg-white/4 hover:border-emerald-500/30 transition-all duration-500 rounded-2xl p-8 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Image
                src={abilities[2].imgPath}
                alt={abilities[2].title}
                width={28}
                height={28}
              />
              <h3 className="feature-title text-white text-xl font-semibold">
                {abilities[2].title}
              </h3>
            </div>
            <p className="feature-text text-white/60 text-base leading-relaxed">
              {abilities[2].desc}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {performanceMetrics.map(({ label, metric, value, color }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-white/50 text-xs w-10 shrink-0">
                  {label}
                </span>

                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    data-value={value}
                    className={`metric-bar h-full ${color} rounded-full`}
                    style={{ width: "0%" }}
                  />
                </div>

                <span className="text-white/50 text-xs w-24 text-right font-mono shrink-0">
                  {metric}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="feature-card border border-white/10 bg-white/4 hover:border-emerald-500/30 transition-all duration-500 rounded-2xl p-8 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src={abilities[1].imgPath}
              alt={abilities[1].title}
              width={28}
              height={28}
            />
            <h3 className="feature-title text-white text-xl font-semibold">
              {abilities[1].title}
            </h3>
          </div>

          <p className="feature-text text-white/60 text-base leading-relaxed">
            {abilities[1].desc}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="feature-tag text-xs px-3 py-1 rounded-md border border-white/10 bg-white/5 text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="feature-card md:col-span-2 border border-white/10 bg-white/4 hover:border-emerald-500/30 transition-all duration-500 rounded-2xl p-8 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/rocket-solid.png"
              alt="rocket"
              width={28}
              height={28}
            />
            <h3 className="feature-title text-white text-xl font-semibold">
              Ship-Ready by Default
            </h3>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
            <p className="feature-text text-white/60 text-base leading-relaxed max-w-lg">
              Every project ships with type-safe environment configurations,
              automated error boundaries, and centralized response handling.
              Building scalable, production-ready stability into the system from
              commit one.
            </p>

            <div className="flex gap-3 shrink-0">
              <span className="feature-tag text-xs px-3 py-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-nowrap">
                Production-ready
              </span>
              <span className="feature-tag text-xs px-3 py-1.5 rounded-md border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-nowrap">
                Type-safe
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCardSection;
