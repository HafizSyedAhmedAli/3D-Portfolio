"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { austinServices } from "@/constants/austin";

const AustinServices = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          {austinServices.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={service.title}
                className="rounded-xl border border-white/8 bg-white/2 overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-white font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-white/55 text-sm leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Learn More
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 border-t border-white/5 pt-5">
                    <ul className="space-y-3">
                      {service.details.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-white/65 flex items-start gap-2"
                        >
                          <span className="text-emerald-400 mt-1">•</span>
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
};

export default AustinServices;
