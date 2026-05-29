"use client";
import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const NavbarSection = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

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

  // Close menu when viewport becomes desktop-sized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner">
          <a href="#hero" className="logo" onClick={close}>
            Ahmed | <span className="text-emerald-400">Ali</span>
          </a>

          {/* Desktop nav */}
          <nav className="desktop">
            <ul>
              {navLinks.map(({ link, name }) => (
                <li key={name} className="group">
                  <a href={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {/* Desktop contact button */}
            <a href="#contact" className="contact-btn group hidden lg:flex">
              <div className="px-5 py-2 rounded-lg border border-emerald-500/50 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300 text-sm font-medium">
                <span>Contact me</span>
              </div>
            </a>

            {/* Hamburger button — mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-lg hover:bg-white/5 transition-colors duration-200 flex-shrink-0"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <span
                className={`block w-5 h-px bg-white/90 rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-white/90 rounded-full transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-white/90 rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop overlay */}
      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-in drawer */}
      <nav
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 h-full w-[280px] z-[90] bg-[#06090a] border-l border-white/8 flex flex-col pt-24 px-6 pb-8 transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-1 flex-1">
          {navLinks.map(({ link, name }) => (
            <li key={name}>
              <a
                href={link}
                onClick={close}
                className="flex items-center gap-3 py-3.5 px-4 rounded-xl text-white/60 hover:text-white hover:bg-white/5 active:bg-white/8 transition-all duration-200 text-base font-medium"
              >
                <span className="size-1.5 rounded-full bg-emerald-400/60 flex-shrink-0" />
                {name}
              </a>
            </li>
          ))}
        </ul>

        <div className="pt-6 border-t border-white/8">
          <a
            href="#contact"
            onClick={close}
            className="flex items-center justify-center w-full py-3.5 rounded-xl border border-emerald-500/50 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black active:bg-emerald-600 transition-all duration-300 text-sm font-semibold"
          >
            Contact me
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavbarSection;
