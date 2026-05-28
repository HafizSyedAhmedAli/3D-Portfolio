"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlowCard from "../components/GlowCard";
import { testimonials } from "../constants";
import TitleHeader from "@/components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

type RatingDotsProps = {
  count?: number;
};

const RatingDots = ({ count = 5 }: RatingDotsProps) => {
  return (
    <div className="flex gap-2" aria-label={`Rating: ${count} stars`}>
      {[...Array(count)].map((_, i) => (
        <span
          key={i}
          className="rating-dot size-2 rounded-full bg-emerald-400"
        />
      ))}
    </div>
  );
};

const TestimonialSection = () => {
  useGSAP(() => {
    gsap.set(".split-letter", {
      opacity: 0,
      y: 24,
      rotateX: -45,
      transformOrigin: "50% 50%",
    });

    gsap.to(".split-letter", {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.8,
      stagger: 0.03,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top 80%",
      },
    });

    gsap.from(".testimonial-sub", {
      opacity: 0,
      y: 18,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top 82%",
      },
    });

    gsap.utils
      .toArray<HTMLElement>(".testimonial-item")
      .forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 40,
            scale: 0.98,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.9,
            delay: index * 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
            },
          },
        );
      });

    gsap.utils.toArray<HTMLElement>(".rating-dot").forEach((dot, i) => {
      gsap.to(dot, {
        scale: 1.25,
        opacity: 0.75,
        repeat: -1,
        yoyo: true,
        duration: 1.05,
        delay: i * 0.08,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <section id="testimonials" className="flex-center section-padding scroll-mt-20">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What Clients & Peers Say"
          sub="💬 Honest Feedback"
        />

        <div className="mt-16 [column-fill:balance] md:columns-2 gap-8 space-y-8 w-full">
          {testimonials[0] && (
            <div className="break-inside-avoid group">
              <GlowCard
                testimonial={testimonials[0]}
                index={0}
                className="testimonial-item"
              >
                <div className="flex flex-col h-full justify-between min-h-100">
                  <div>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonials[0].imgPath}
                        alt={testimonials[0].name}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="text-2xl font-semibold">
                          {testimonials[0].name}
                        </h3>
                        <p className="text-emerald-300">
                          {testimonials[0].mentions}
                        </p>
                      </div>
                    </div>

                    <div className="w-14 h-px bg-emerald-400/60 my-6" />

                    <p className="text-xl leading-10 text-white/75">
                      “{testimonials[0].review}”
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-8">
                    <RatingDots />

                    {testimonials[0].logo && (
                      <div className="flex items-center justify-center max-w-30 h-8 relative select-none">
                        <Image
                          src={testimonials[0].logo.src}
                          alt={testimonials[0].logo.alt}
                          width={testimonials[0].logo.width}
                          height={testimonials[0].logo.height}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </GlowCard>
            </div>
          )}

          {testimonials.slice(1).map((testimonial, index) => (
            <div
              key={`${index}-${testimonial.name}`}
              className="break-inside-avoid group"
            >
              <GlowCard
                testimonial={testimonial}
                index={index + 1}
                className="testimonial-item"
              >
                <div className="flex flex-col h-full justify-between min-h-55">
                  <div>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.imgPath}
                        alt={testimonial.name}
                        width={52}
                        height={52}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-xl">
                          {testimonial.name}
                        </p>
                        <p className="text-emerald-300 text-sm">
                          {testimonial.mentions}
                        </p>
                      </div>
                    </div>

                    <div className="w-12 h-px bg-emerald-400/60 my-5" />

                    <p className="text-white/70 leading-8 text-lg">
                      “{testimonial.review}”
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <RatingDots />

                    {testimonial.logo && (
                      <div className="flex items-center justify-center max-w-27.5 h-7 relative select-none">
                        <Image
                          src={testimonial.logo.src}
                          alt={testimonial.logo.alt}
                          width={testimonial.logo.width}
                          height={testimonial.logo.height}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
