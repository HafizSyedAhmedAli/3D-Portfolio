"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { CityPageService } from "@/types";

type Props = {
  servicesH2: string;
  services: CityPageService[];
  citySlug: string;
};

export default function CityServices({
  servicesH2,
  services,
  citySlug,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id={`services-${citySlug}`}
      className="px-5 md:px-20 py-16 md:py-20 border-t border-white/5 scroll-mt-10"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-emerald-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-3">
          Services
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-12">
          {servicesH2}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={service.title}
                className="rounded-xl border border-white/8 bg-white/2 overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="p-5 md:p-6">
                  <h3 className="text-white font-semibold text-sm md:text-base mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/55 text-xs md:text-sm leading-relaxed mb-4 md:mb-5">
                    {service.desc}
                  </p>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`service-${citySlug}-${index}`}
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
                  >
                    {isOpen ? "Show Less" : "Learn More"}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div
                  id={`service-${citySlug}-${index}`}
                  aria-hidden={!isOpen}
                  className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-white/5 pt-4 md:pt-5">
                    <ul className="space-y-2.5 md:space-y-3 list-none">
                      {service.details.map((item) => (
                        <li
                          key={item}
                          className="text-xs md:text-sm text-white/65 flex items-start gap-2"
                        >
                          <span
                            className="text-emerald-400 mt-0.5"
                            aria-hidden="true"
                          >
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
