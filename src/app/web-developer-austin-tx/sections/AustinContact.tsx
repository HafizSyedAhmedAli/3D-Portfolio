import { austinAvailability } from "@/constants/austin";

const AustinContact = () => {
  return (
    <section
      id="contact-austin"
      className="px-5 md:px-20 py-20 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-3">
          Ready to Build?
        </p>
        {/* H2 — exact keyword here, this is the CTA, natural fit */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Hire a Web Developer Austin TX Today
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Have a project in mind? Let&apos;s talk. I respond within 24 hours and
          offer a free 30-minute consultation for every new project.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="https://syedahmedali.com/#contact"
            className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 font-semibold text-black"
          >
            Send Me a Message →
          </a>
          <a
            href="https://wa.me/923282488387"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white/70 hover:text-white font-medium"
          >
            WhatsApp Me
          </a>
          <a
            href="https://linkedin.com/in/hafiz-syed-ahmed-ali-625523307"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white/70 hover:text-white font-medium"
          >
            LinkedIn
          </a>
        </div>

        <div className="inline-flex flex-col items-start gap-3 rounded-2xl border border-white/8 bg-white/2 p-6 text-left">
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
      </div>
    </section>
  );
};

export default AustinContact;
