"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const project1Ref = useRef<HTMLDivElement>(null);
  const project2Ref = useRef<HTMLDivElement>(null);
  const project3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
      },
    );

    projects.forEach((project, index) => {
      if (!project) return;
      gsap.fromTo(
        project,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, []);

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <Image src="/images/project1.png" alt="Flacron Gamezone" fill />
            </div>
            <div className="text-content">
              <h2>
                Your Ultimate Football Stats Platform, called Flacron Gamezone
              </h2>
              <p className="text-white-50 md:text-xl">
                A full-stack web platform for live match coverage, league standings, and real-time football stats, built with Next.js, Express.js, and PostgreSQL.
              </p>
            </div>
          </div>
          {/* RIGHT */}

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <Image
                  src="/images/project2.png"
                  alt="Library Management Platform"
                  width={824}
                  height={645}
                />
              </div>
              <h2>Relay - AI-Powered Customer Support SaaS</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <Image
                  src="/images/project3.png"
                  alt="YC Directory"
                  width={824}
                  height={645}
                />
              </div>
              <h2>GreenCart – Full-Stack Grocery E-Commerce Platform</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
