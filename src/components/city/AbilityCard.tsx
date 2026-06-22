import { icons } from "lucide-react";
import type { CityPageAbilityCard } from "@/types";

const AbilityCard = ({ iconName, title, desc }: CityPageAbilityCard) => {
  const LucideIcon = icons[iconName as keyof typeof icons];

  return (
    <div className="flex flex-col gap-3 p-4 md:p-5 rounded-xl border border-white/8 bg-white/2 hover:border-emerald-500/30 transition-all duration-300">
      <span className="text-emerald-400">
        {LucideIcon ? (
          <LucideIcon size={22} strokeWidth={1.5} />
        ) : (
          <span className="text-xl">⚙️</span>
        )}
      </span>
      <p className="text-white font-semibold text-sm">{title}</p>
      <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
    </div>
  );
};

export default AbilityCard;
