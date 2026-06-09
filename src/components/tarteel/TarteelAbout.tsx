"use client";

import { tarteelCredentials } from "@/constants/tarteel";
import { TarteelCredential } from "@/types/tarteel";
import { Award, BookOpen, Globe, Heart, LucideIcon } from "lucide-react";

const iconMap: Record<TarteelCredential["icon"], LucideIcon> = {
  Award,
  BookOpen,
  Globe,
  Heart,
};

export default function TarteelAbout() {
  return (
    <section id="about" className="pattern-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Portrait Card Area */}
          <div className="relative flex justify-center w-full">
            {/* Decorative background square - hidden on small mobile to prevent clutter */}
            <div
              className="absolute top-4 left-4 right-4 bottom-4 rounded-2xl hidden sm:block"
              style={{
                background: "var(--emerald-deep)",
                opacity: 0.08,
              }}
            />

            {/* Main portrait area */}
            <div
              className="relative rounded-2xl overflow-hidden flex items-center justify-center 
                         w-full max-w-95 h-105 md:h-115 z-10"
              style={{
                background:
                  "linear-gradient(135deg, var(--emerald-deep) 0%, var(--emerald-mid) 100%)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              {/* Arabic pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='none' stroke='%23c9a84c' stroke-width='0.8'%3E%3Cpolygon points='20,2 28,8 30,17 26,25 20,28 14,25 10,17 12,8'/%3E%3C/g%3E%3C/svg%3E\")",
                }}
              />

              <div className="text-center relative z-10 p-6 md:p-8">
                <div
                  className="font-amiri mb-2 md:mb-4 leading-none"
                  style={{
                    fontSize: "clamp(56px, 10vw, 72px)",
                    color: "var(--gold)",
                  }}
                >
                  ☪
                </div>
                <div
                  className="font-cormorant text-xl md:text-2xl font-semibold"
                  style={{ color: "var(--gold-pale)" }}
                >
                  Hafiz Syed Ahmed Ali
                </div>
                <div
                  className="mt-2 text-xs md:text-sm uppercase"
                  style={{
                    color: "rgba(245,233,196,0.6)",
                    letterSpacing: "0.15em",
                  }}
                >
                  Certified Quran Teacher
                </div>
                <div
                  className="mt-4 font-amiri text-lg md:text-xl"
                  style={{ color: "rgba(201,168,76,0.8)", direction: "rtl" }}
                >
                  معلم القرآن الكريم
                </div>
              </div>
            </div>

            {/* Gold corner ornaments - Responsive sizing */}
            <div
              className="absolute -top-2 -left-2 w-12 h-12 md:w-16 md:h-16 z-20"
              style={{
                borderTop: "3px solid var(--gold)",
                borderLeft: "3px solid var(--gold)",
                borderRadius: "4px 0 0 0",
              }}
            />
            <div
              className="absolute -bottom-2 -right-2 w-12 h-12 md:w-16 md:h-16 z-20"
              style={{
                borderBottom: "3px solid var(--gold)",
                borderRight: "3px solid var(--gold)",
                borderRadius: "0 0 4px 0",
              }}
            />
          </div>

          {/* Right: content */}
          <div className="text-center md:text-left">
            <p
              className="text-xs tracking-[0.18em] uppercase mb-4"
              style={{
                color: "var(--emerald-mid)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              About Your Teacher
            </p>
            <h2
              className="font-cormorant mb-6"
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                lineHeight: 1.1,
                color: "var(--emerald-deep)",
                fontWeight: 600,
              }}
            >
              Guiding Souls Through
              <span
                className="block md:inline"
                style={{ color: "var(--gold)", fontStyle: "italic" }}
              >
                {" "}
                Allah's Words
              </span>
            </h2>

            <div
              className="gold-divider-left mb-8 mx-auto md:mx-0"
              style={{
                width: "60px",
                height: "2px",
                background: "linear-gradient(90deg, var(--gold), transparent)",
              }}
            />

            <div className="space-y-4 mb-10">
              <p
                className="text-base leading-relaxed"
                style={{
                  color: "var(--text-mid)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                With over 5+ years of dedicated teaching, I have guided hundreds
                of students from complete beginners to advanced learners in
                their Quranic journey. My teaching approach combines classical
                Islamic methods with modern online tools.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: "var(--text-mid)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Whether you are a child just starting out or an adult returning
                to the Quran, I provide personalised Nazra instruction tailored
                to your pace.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tarteelCredentials.map(({ icon: iconKey, text }) => {
                const Icon = iconMap[iconKey];
                return (
                  <div
                    key={text}
                    className="flex items-center md:items-start gap-3 p-4 rounded-xl text-left"
                    style={{
                      background: "white",
                      border: "1px solid rgba(201,168,76,0.15)",
                      boxShadow: "0 4px 20px rgba(10,61,46,0.04)",
                    }}
                  >
                    <div
                      className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(10,61,46,0.06)" }}
                    >
                      <Icon size={18} style={{ color: "var(--emerald-mid)" }} />
                    </div>
                    <span
                      className="text-sm font-medium leading-snug"
                      style={{ color: "var(--emerald-deep)" }}
                    >
                      {text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
