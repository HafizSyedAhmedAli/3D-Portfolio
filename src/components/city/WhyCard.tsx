import type { CityPageWhyCard } from "@/types";

const WhyCard = ({ title, desc }: CityPageWhyCard) => (
  <div className="p-5 md:p-6 rounded-xl border border-white/8 bg-white/2 hover:border-emerald-500/30 transition-all duration-300">
    <span
      className="block size-2 rounded-full bg-emerald-400 mb-4 shadow-[0_0_12px_rgba(16,185,129,0.9)]"
      aria-hidden="true"
    />
    <h3 className="text-white font-semibold text-sm md:text-base mb-2">
      {title}
    </h3>
    <p className="text-white/50 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

export default WhyCard;
