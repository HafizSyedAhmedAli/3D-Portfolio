"use client";

import { motion } from "framer-motion";
import { Video, Star } from "lucide-react";
import { tarteelSEOContent } from "@/constants/tarteel";
import Image from "next/image";

const { hero } = tarteelSEOContent;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.9, delay },
});

export default function TarteelHero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pattern-bg"
      style={{ paddingTop: "30px" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(21,92,69,0.6) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
        style={{
          fontSize: "clamp(200px, 25vw, 380px)",
          fontFamily: "'Amiri', serif",
          color: "rgba(201,168,76,0.04)",
          direction: "rtl",
          lineHeight: 1,
          right: "-2%",
        }}
      >
        بِسْمِ اللَّهِ
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            {...fadeIn(0.1)}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border"
            style={{
              borderColor: "rgba(201,168,76,0.4)",
              background: "rgba(201,168,76,0.08)",
              color: "var(--gold-light)",
              fontSize: "12px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "var(--gold)" }}
            />
            {hero.badge}
          </motion.div>

          <motion.h1
            {...fadeUp(0.15)}
            className="font-cormorant"
            style={{
              fontSize: "clamp(42px, 6vw, 80px)",
              lineHeight: 1.05,
              color: "var(--gold-pale)",
              fontWeight: 600,
            }}
          >
            {hero.h1Line1}
            <br />
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
              {hero.h1Line2}
            </span>
            <br />
            {hero.h1Line3}
          </motion.h1>

          <motion.p
            {...fadeUp(0.25)}
            className="font-amiri mt-3"
            style={{
              fontSize: "22px",
              color: "rgba(201,168,76,0.7)",
              direction: "rtl",
              textAlign: "left",
            }}
          >
            {hero.arabicSubtitle}
          </motion.p>

          <motion.p
            {...fadeUp(0.3)}
            className="mt-6 text-base leading-relaxed"
            style={{
              color: "rgba(245,233,196,0.65)",
              maxWidth: "480px",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {hero.description}
          </motion.p>

          <motion.div {...fadeUp(0.35)} className="flex flex-wrap gap-8 mt-8">
            {hero.stats.map((s) => (
              <div key={s.num}>
                <div
                  className="font-cormorant"
                  style={{
                    fontSize: "32px",
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "rgba(245,233,196,0.5)",
                    letterSpacing: "0.06em",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 mt-10">
            <a
              href="#contact"
              className="btn-gold px-8 py-3.5 rounded-full text-sm flex items-center gap-2"
            >
              <Video size={16} />
              Start My Free Trial
            </a>
            <a
              href="#courses"
              className="px-8 py-3.5 rounded-full text-sm border transition-all duration-300"
              style={{
                borderColor: "rgba(201,168,76,0.4)",
                color: "var(--gold-pale)",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(201,168,76,0.1)";
                el.style.borderColor = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "transparent";
                el.style.borderColor = "rgba(201,168,76,0.4)";
              }}
            >
              Explore Courses
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.45)}
            className="flex items-center gap-4 mt-8"
          >
            <span
              style={{
                fontSize: "12px",
                color: "rgba(245,233,196,0.4)",
                letterSpacing: "0.08em",
              }}
            >
              CLASSES VIA
            </span>
            <div className="flex gap-3">
              {/* Zoom */}
              <span
                className="flex items-center gap-2 px-3 py-1 rounded-md text-xs font-medium"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(245,233,196,0.7)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Image src='/images/tarteel/zoom.svg' alt="" width={20} height={20} />
                Zoom
              </span>

              {/* Google Meet */}
              <span
                className="flex items-center gap-2 px-3 py-1 rounded-md text-xs font-medium"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(245,233,196,0.7)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Image src='/images/tarteel/google-meet.svg' alt="" width={20} height={20} />
                Google Meet
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right card — unchanged */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="hidden md:flex justify-center items-center"
        >
          <div className="relative">
            <div
              className="relative rounded-2xl p-8 text-center"
              style={{
                background: "rgba(21,92,69,0.4)",
                border: "1px solid rgba(201,168,76,0.25)",
                backdropFilter: "blur(16px)",
                width: "340px",
              }}
            >
              <div
                className="mx-auto mb-4 font-amiri"
                style={{
                  fontSize: "80px",
                  color: "var(--gold)",
                  lineHeight: 1,
                }}
              >
                ۞
              </div>
              <div
                className="font-amiri text-3xl mb-2"
                style={{ color: "var(--gold-pale)", direction: "rtl" }}
              >
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </div>
              <div
                className="text-xs mt-2"
                style={{
                  color: "rgba(245,233,196,0.5)",
                  letterSpacing: "0.08em",
                }}
              >
                In the name of Allah, the Most Gracious, the Most Merciful
              </div>
              <div
                className="mt-6 pt-6"
                style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }}
              >
                {[
                  "Online Quran Reading & Recitation",
                  "Tajweed Rules Online",
                  "Hifz Memorization Program",
                  "Learn Quran for Kids & Adults",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-2 py-1.5 text-sm"
                    style={{ color: "rgba(245,233,196,0.7)" }}
                  >
                    <Star
                      size={12}
                      fill="currentColor"
                      style={{ color: "var(--gold)", flexShrink: 0 }}
                    />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-xs font-medium"
              style={{
                background: "var(--gold)",
                color: "var(--emerald-deep)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                boxShadow: "0 4px 20px rgba(201,168,76,0.4)",
              }}
            >
              Begin Your Journey
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--cream))",
        }}
      />
    </section>
  );
}
