// Server component — no hooks
import AvailabilityPanel from "@/components/city/AvailabilityPanel";
import StatBadge from "@/components/city/StatBadge";
import Image from "next/image";
import AustinSocialLinks from "./AustinSocialLinks";

type Props = {
  url: string;
  alt: string;
};

const AustinProfileCard = ({ url, alt }: Props) => (
  <div className="flex flex-col gap-5">
    <div className="relative">
      <Image
        src={url}
        alt={`Ahmed Ali - ${alt}`}
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
