import Image from "next/image";
import { austinAvailability, austinStats } from "@/constants/austin";
import AustinSocialLinks from "./AustinSocialLinks";

const AustinProfileCard = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="relative">
        <Image
          src="/images/professional-web-developer-austin-tx-full-stack-ai-powered-apps.png"
          alt="Ahmed Ali - Professional Web Developer Austin TX"
          width={640}
          height={360}
          className="w-full h-auto rounded-2xl"
          priority
        />
        <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-emerald-500 text-black text-xs font-bold shadow-lg">
          Open for Projects
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {austinStats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center justify-center gap-1 rounded-xl border border-white/8 bg-white/2 hover:border-emerald-500/30 transition-all duration-300 py-4 px-2"
          >
            <p className="text-xl font-bold text-emerald-400">{s.value}</p>
            <p className="text-[11px] text-white/40 font-mono text-center">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-white/8 bg-white/2 p-5 flex flex-col gap-3">
        <p className="text-xs font-mono tracking-widest uppercase text-emerald-400/70">
          Current Status
        </p>
        {austinAvailability.map(({ label, value, dot }) => (
          <div
            key={label}
            className="flex items-center justify-between gap-16 w-full"
          >
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
      <AustinSocialLinks />
    </div>
  );
};

export default AustinProfileCard;
