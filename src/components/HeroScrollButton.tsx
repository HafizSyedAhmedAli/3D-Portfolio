"use client";

const HeroScrollButton = () => {
  return (
    <button
      onClick={() =>
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
      }
      className="group relative flex items-center gap-3 px-6 py-3.5 md:px-7 md:py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 font-semibold text-black text-sm tracking-wide overflow-hidden cursor-pointer"
    >
      <span className="relative z-10">See My Work</span>
      <svg
        className="relative z-10 size-4 group-hover:translate-x-1 transition-transform duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
      <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
    </button>
  );
};

export default HeroScrollButton;
