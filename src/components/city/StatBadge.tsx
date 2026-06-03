import type { CityPageStat } from "@/types";

const StatBadge = ({ value, label }: CityPageStat) => (
  <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-white/8 bg-white/2 hover:border-emerald-500/30 transition-all duration-300 py-4 px-2">
    <p className="text-xl font-bold text-emerald-400">{value}</p>
    <p className="text-[11px] text-white/40 font-mono text-center">{label}</p>
  </div>
);

export default StatBadge;
