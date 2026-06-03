// Server component — no hooks
import Image from "next/image";
import { austinAvailability, austinStats } from "@/constants/austin";
import StatBadge from "@/components/city/StatBadge";
import AvailabilityPanel from "@/components/city/AvailabilityPanel";
import AustinSocialLinks from "./AustinSocialLinks";

const AustinProfileCard = () => (
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
        <StatBadge key={s.label} {...s} />
      ))}
    </div>

    <AvailabilityPanel items={austinAvailability} />
    <AustinSocialLinks />
  </div>
);

export default AustinProfileCard;
