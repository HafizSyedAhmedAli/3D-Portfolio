import type { CityPageAbilityCard } from "@/types";

const AbilityCard = ({ icon, title, desc }: CityPageAbilityCard) => (
  <div className="flex flex-col gap-3 p-4 md:p-5 rounded-xl border border-white/8 bg-white/2 hover:border-emerald-500/30 transition-all duration-300">
    <span className="text-2xl">{icon}</span>
    <p className="text-white font-semibold text-sm">{title}</p>
    <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
  </div>
);

export default AbilityCard;
