// Server component — pure markup, no hooks
import Image from "next/image";
import { socialImgs } from "@/constants";

const AustinHeroActions = () => (
  <div className="flex flex-col gap-4 w-full max-w-md mt-6 p-5 rounded-xl border border-white/8 bg-white/2">
    <a
      href="#contact-austin"
      className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 font-semibold text-black text-center text-sm shadow-[0_0_20px_rgba(16,185,129,0.15)]"
    >
      Get A Quote →
    </a>

    <a
      href={socialImgs[0]?.url}
      target="_blank"
      rel="noreferrer"
      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all duration-300 text-emerald-400 text-sm font-semibold"
    >
      <Image
        src={socialImgs[0]?.imgPath}
        alt=""
        aria-hidden="true"
        width={20}
        height={20}
      />
      WhatsApp Now
    </a>

    <div className="flex items-center gap-3 my-1">
      <div className="h-px bg-white/10 flex-1" />
      <span className="text-white/30 text-xs font-mono tracking-widest uppercase">
        OR
      </span>
      <div className="h-px bg-white/10 flex-1" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <a
        href="https://www.fiverr.com/ahmed_ali_swe"
        target="_blank"
        rel="noreferrer"
        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white/70 hover:text-white text-center text-sm font-medium"
      >
        <Image
          src="/images/logos/fiverr.png"
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
        />
        Hire on Fiverr
      </a>

      <a
        href="https://www.upwork.com/freelancers/~010e7d0fe9ada9bea1"
        target="_blank"
        rel="noreferrer"
        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white/70 hover:text-white text-center text-sm font-medium"
      >
        <Image
          src="/images/logos/upwork.png"
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
        />
        Hire on Upwork
      </a>
    </div>
  </div>
);

export default AustinHeroActions;
