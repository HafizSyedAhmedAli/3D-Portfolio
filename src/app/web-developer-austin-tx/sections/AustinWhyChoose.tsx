import { austinWhyCards } from "@/constants/austin";

const AustinWhyChoose = () => {
  return (
    <section id="hire-me-austin" className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5 scroll-mt-10">
      <div className="max-w-7xl mx-auto">
        <p className="text-emerald-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-3">
          Why Hire Me
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-12">
          What Sets This Austin Developer Apart
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
          {austinWhyCards.map((item) => (
            <div
              key={item.title}
              className="p-5 md:p-6 rounded-xl border border-white/8 bg-white/2 hover:border-emerald-500/30 transition-all duration-300"
            >
              <span className="block size-2 rounded-full bg-emerald-400 mb-4 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
              <h3 className="text-white font-semibold text-sm md:text-base mb-2">
                {item.title}
              </h3>
              <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AustinWhyChoose;
