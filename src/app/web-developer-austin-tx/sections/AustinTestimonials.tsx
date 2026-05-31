import { austinTestimonials } from "@/constants/austin";

const AustinTestimonials = () => {
  return (
    <section className="px-5 md:px-20 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-3">
          Happy Clients
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Don&apos;t Take My Word for It
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {austinTestimonials.map((t) => (
            <div
              key={`${t.name}-${t.handle}`}
              className="rounded-2xl border border-white/8 bg-white/2 p-8"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span
                    key={s}
                    className="size-2 rounded-full bg-emerald-400"
                  />
                ))}
              </div>
              <blockquote className="text-white/70 leading-relaxed mb-6 text-lg">
                &ldquo;{t.review}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="size-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm flex-shrink-0">
                  {t.name[0] || "?"}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-emerald-300 text-xs">{t.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AustinTestimonials;
