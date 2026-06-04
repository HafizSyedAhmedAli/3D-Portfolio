// Server component — no hooks
import { socialImgs } from "@/constants";
import Image from "next/image";

const AustinSocialLinks = () => (
  <div className="w-full mt-8 p-6 rounded-xl border border-white/8 bg-white/2 flex flex-col md:flex-row md:items-center justify-between gap-4">
    <div>
      <h3 className="text-xl font-bold text-white tracking-tight">
        Let&apos;s Chat On{" "}
        <span className="text-emerald-400">Social Media!</span>
      </h3>
      <p className="text-xs text-white/40 font-mono mt-1">
        Connect with me across platforms
      </p>
    </div>

    <div className="flex flex-wrap gap-3">
      <a
        href={socialImgs[2].url}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/40 hover:text-[#0A66C2] text-white/70 text-sm font-medium transition-all duration-300"
      >
        <Image
          src="/images/logos/linkedin.svg"
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
        />
        LinkedIn
      </a>

      <a
        href="https://www.syedahmedali.com"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:text-emerald-400 text-white/70 text-sm font-medium transition-all duration-300"
      >
        <Image
          src="/images/logos/favicon.ico"
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
        />
        Website
      </a>
    </div>
  </div>
);

export default AustinSocialLinks;
