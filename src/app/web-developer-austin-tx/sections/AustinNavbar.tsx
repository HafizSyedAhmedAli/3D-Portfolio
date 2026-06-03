"use client";

import { austinNavLinks } from "@/constants/austin";
import { useEffect, useState } from "react";

const AustinNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.innerWidth >= 1024) setMenuOpen(false);
      }, 150);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-5 md:px-20 py-4 border-b ${
          scrolled
            ? "bg-black border-white/8"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto gap-4">
          <a
            href="/"
            className="text-white text-lg md:text-xl font-semibold shrink-0"
          >
            Ahmed | <span className="text-emerald-400">Ali</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {austinNavLinks.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className="text-white/60 hover:text-white text-sm transition-colors duration-300"
              >
                {name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact-austin"
              className="hidden lg:block px-4 py-2 rounded-lg border border-emerald-500/50 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300 text-sm font-medium"
            >
              Hire Web Developer Austin TX
            </a>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-lg hover:bg-white/5 transition-colors duration-200 flex-shrink-0"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="austin-mobile-nav"
            >
              <span
                className={`block w-5 h-px bg-white/90 rounded-full transition-all duration-300 origin-center ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`block w-5 h-px bg-white/90 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block w-5 h-px bg-white/90 rounded-full transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <nav
        id="austin-mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 h-full w-[280px] z-[90] bg-[#06090a] border-l border-white/8 flex flex-col pt-24 px-6 pb-8 transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-1 flex-1 list-none">
          {austinNavLinks.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                onClick={close}
                className="flex items-center gap-3 py-3.5 px-4 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200 text-base font-medium"
              >
                <span
                  className="size-1.5 rounded-full bg-emerald-400/60 flex-shrink-0"
                  aria-hidden="true"
                />
                {name}
              </a>
            </li>
          ))}
        </ul>

        <div className="pt-6 border-t border-white/8">
          <a
            href="#contact-austin"
            onClick={close}
            className="flex items-center justify-center w-full py-3.5 rounded-xl border border-emerald-500/50 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300 text-sm font-semibold"
          >
            Hire Web Developer Austin TX
          </a>
        </div>
      </nav>
    </>
  );
};

export default AustinNavbar;
