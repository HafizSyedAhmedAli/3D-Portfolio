import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants";
import Image from "next/image";
import ExperienceAnimator from "@/components/animators/ExperienceAnimator";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0 scroll-mt-20"
    >
      <ExperienceAnimator />
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Experience That Shaped My Stack"
          sub="🧩 Where I've Built"
        />

        <div className="mt-16 md:mt-24 relative">
          <div className="experience-line absolute left-4 md:left-8 top-0 bottom-0 w-px bg-emerald-400/20 origin-top" />
          <div className="experience-line-active absolute left-4 md:left-8 top-0 w-px bg-linear-to-b from-emerald-300 via-emerald-400 to-transparent origin-top" />

          <div className="relative z-10 space-y-10 md:space-y-20">
            {expCards.map((card, index) => (
              <div
                key={card.title}
                className="exp-reveal parallax-card grid grid-cols-1 xl:grid-cols-[120px_1fr] gap-6 items-start"
              >
                <div className="hidden xl:flex justify-center pt-2">
                  <div className="experience-node" />
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-6 xl:gap-10 items-start">
                  <GlowCard index={index} className="floating-card">
                    <div className="animate-item flex items-center justify-between gap-4 mb-6 flex-wrap">
                      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
                        <span className="size-2 rounded-full bg-emerald-400" />
                        {card.date}
                      </div>
                      <div className="hidden md:block text-xs uppercase tracking-[0.3em] text-white/40">
                        Experience
                      </div>
                    </div>

                    <div className="mb-5">
                      <p className="animate-item text-white/75 text-base md:text-lg leading-7">
                        {card.review}
                      </p>
                    </div>

                    <div className="animate-item flex items-center gap-4 mt-8">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                        <Image
                          src={card.logoPath}
                          alt={card.title}
                          width={44}
                          height={44}
                        />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">
                          {card.title}
                        </p>
                        <p className="text-emerald-300/80 text-sm">
                          Role highlight
                        </p>
                      </div>
                    </div>
                  </GlowCard>

                  <div className="expText pl-6">
                    <div className="flex items-center gap-4 mb-6 animate-item">
                      <div className="h-px w-10 bg-emerald-400/60" />
                      <p className="uppercase tracking-[0.25em] text-xs text-emerald-300/70">
                        Experience
                      </p>
                    </div>

                    <h1 className="animate-item font-semibold text-2xl md:text-5xl leading-tight">
                      {card.title}
                    </h1>

                    <p className="animate-item mt-4 text-emerald-300/80 text-sm md:text-base flex gap-2">
                      <Image
                        src="/images/calendar-regular.png"
                        alt="calendar"
                        width={20}
                        height={20}
                      />
                      <span>{card.date}</span>
                    </p>

                    <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">
                      {card.responsibilities.map((responsibility, idx) => (
                        <div
                          key={`${card.title}-${idx}`}
                          className="animate-item flex items-start gap-4 group"
                        >
                          <div className="mt-2.5 size-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)] group-hover:scale-125 transition-transform duration-300 flex-shrink-0" />
                          <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-lg">
                            {responsibility}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
