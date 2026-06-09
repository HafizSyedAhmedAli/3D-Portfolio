"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { tarteelNavLinks } from "@/constants/tarteel";

export default function TarteelNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,61,46,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.2)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.2)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/tarteel" className="flex flex-col leading-none group">
          <span
            className="font-amiri text-2xl"
            style={{ color: "var(--gold)", lineHeight: 1 }}
          >
            تَرْتِيل
          </span>
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{
              color: "rgba(245,233,196,0.7)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Tarteel
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {tarteelNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide transition-colors duration-200"
              style={{
                color: "rgba(245,233,196,0.8)",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--gold)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(245,233,196,0.8)")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-block btn-gold px-5 py-2.5 rounded-full text-sm"
        >
          Book Free Trial
        </a>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "var(--gold)" }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2"
          style={{ background: "rgba(10,61,46,0.98)" }}
        >
          {tarteelNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm border-b"
              style={{
                color: "rgba(245,233,196,0.8)",
                borderColor: "rgba(201,168,76,0.15)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-gold block text-center mt-4 px-5 py-3 rounded-full text-sm"
          >
            Book Free Trial
          </a>
        </div>
      )}
    </header>
  );
}
