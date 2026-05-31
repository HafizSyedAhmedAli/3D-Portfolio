import { austinServices } from "@/constants/austin";

const AustinServices = () => {
  return (
    <section className="px-5 md:px-20 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-3">
          Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What I Build for Austin Clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {austinServices.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-xl border border-white/8 bg-white/2 hover:border-emerald-500/30 transition-all duration-300"
            >
              <h3 className="text-white font-semibold mb-3">{s.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AustinServices;