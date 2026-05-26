import Image from "next/image";
import { abilities, performanceMetrics, techTags } from "../constants";
import TitleHeader from "@/components/TitleHeader";

const FeatureCardSection = () => {
  return (
    <section
      id="approach"
      className="w-full md:px-20 px-5 md:mt-20 mt-10 scroll-mt-20"
    >
      <TitleHeader
        sub="Engineering Principles"
        title="How I Approach Every Build"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="md:col-span-2 border border-white/10 bg-white/4 hover:border-emerald-500/30 transition-all duration-500 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src={abilities[0].imgPath} alt={abilities[0].title} width={28} height={28} />
              <h3 className="text-white text-xl font-semibold">
                {abilities[0].title}
              </h3>
            </div>
            <p className="text-white/60 text-base leading-relaxed">
              {abilities[0].desc}
            </p>
          </div>
          <div className="flex-1 border border-white/10 bg-black/40 rounded-xl p-4 font-mono text-xs shrink-0 pb-6">
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

        <div className="border border-white/10 bg-white/4 hover:border-emerald-500/30 transition-all duration-500 rounded-2xl p-8 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Image src={abilities[2].imgPath} alt={abilities[2].title} width={28} height={28} />
              <h3 className="text-white text-xl font-semibold">
                {abilities[2].title}
              </h3>
            </div>
            <p className="text-white/60 text-base leading-relaxed">
              {abilities[2].desc}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {performanceMetrics.map(({ label, metric, value, color }) => (
              <div key={label} className="flex items-center gap-3">
                {/* Left Label */}
                <span className="text-white/50 text-xs w-10 shrink-0">
                  {label}
                </span>

                {/* Progress Bar Track */}
                <div className="flex-1 h-1.5 bg-white/10 rounded-full">
                  <div
                    className={`h-full ${color} rounded-full`}
                    style={{ width: `${value}%` }}
                  />
                </div>

                {/* Right Metrics - Set to a precise fixed width for flawless alignment */}
                <span className="text-white/50 text-xs w-24 text-right font-mono shrink-0">
                  {metric}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-white/10 bg-white/4 hover:border-emerald-500/30 transition-all duration-500 rounded-2xl p-8 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image src={abilities[1].imgPath} alt={abilities[1].title} width={28} height={28} />
            <h3 className="text-white text-xl font-semibold">
              {abilities[1].title}
            </h3>
          </div>
          <p className="text-white/60 text-base leading-relaxed">
            {abilities[1].desc}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-md border border-white/10 bg-white/5 text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 border border-white/10 bg-white/4 hover:border-emerald-500/30 transition-all duration-500 rounded-2xl p-8 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/rocket-solid.png"
              alt="rocket"
              width={28}
              height={28}
            />
            <h3 className="text-white text-xl font-semibold">
              Ship-Ready by Default
            </h3>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
            <p className="text-white/60 text-base leading-relaxed max-w-lg">
              Every project ships with type-safe environment configurations,
              automated error boundaries, and centralized response handling.
              Building scalable, production-ready stability into the system from
              commit one.
            </p>
            <div className="flex gap-3 shrink-0">
              <span className="text-xs px-3 py-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-nowrap">
                Production-ready
              </span>
              <span className="text-xs px-3 py-1.5 rounded-md border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-nowrap">
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
