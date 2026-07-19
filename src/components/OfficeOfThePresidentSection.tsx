"use client";

import { SystemCard } from "@/components/SystemCard";
import { officeOfThePresidentSystems } from "@/data/systems";

export function OfficeOfThePresidentSection() {
  return (
    <section
      id="office-of-the-president"
      aria-labelledby="otp-heading"
      className="scroll-mt-24 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--md-outline-variant)] bg-[var(--md-surface-container)] p-6 shadow-[var(--md-elev-1)] sm:p-8 lg:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--eo-dark-gold)]">
              Developed for Office of the President
            </p>
            <h2
              id="otp-heading"
              className="font-display mt-2 text-[clamp(1.65rem,3.2vw,2.4rem)] font-bold text-[var(--eo-navy)]"
            >
              Office of the President Systems
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--eo-muted)] sm:text-lg">
              Digital platforms developed by Executive Operations for the Office
              of the President of Partido State University.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-md grid-cols-1 gap-5 sm:max-w-lg md:max-w-xl">
            {officeOfThePresidentSystems.map((system, index) => (
              <SystemCard key={system.id} system={system} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
