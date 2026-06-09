"use client";

export default function TarteelFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="pattern-bg"
      style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="font-amiri text-xl" style={{ color: "var(--gold)" }}>
            تَرْتِيل
          </span>
          <span
            className="text-xs tracking-[0.15em] uppercase"
            style={{
              color: "rgba(245,233,196,0.3)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Tarteel
          </span>
        </div>

        <p
          className="text-xs text-center"
          style={{
            color: "rgba(245,233,196,0.3)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          © {year} Tarteel. All rights reserved. Built with ❤️ for the Ummah.
        </p>

        <p
          className="font-amiri text-sm"
          style={{ color: "rgba(201,168,76,0.4)" }}
        >
          وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
        </p>
      </div>
    </footer>
  );
}
