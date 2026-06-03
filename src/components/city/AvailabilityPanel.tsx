import type { CityPageAvailability } from "@/types";

const AvailabilityPanel = ({ items }: { items: CityPageAvailability[] }) => (
  <div className="rounded-xl border border-white/8 bg-white/2 p-5 flex flex-col gap-3">
    <p className="text-xs font-mono tracking-widest uppercase text-emerald-400/70">
      Current Status
    </p>
    {items.map(({ label, value, dot }) => (
      <div key={label} className="flex items-center justify-between gap-4">
        <span className="text-sm text-white/50">{label}</span>
        <span
          className={`text-sm font-medium flex items-center gap-2 ${
            dot ? "text-emerald-400" : "text-white/75"
          }`}
        >
          {dot && (
            <span className="relative flex size-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full size-1.5 bg-emerald-400" />
            </span>
          )}
          {value}
        </span>
      </div>
    ))}
  </div>
);

export default AvailabilityPanel;
