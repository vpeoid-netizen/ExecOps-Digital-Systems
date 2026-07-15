"use client";

import { Network, LineChart, Landmark } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const values = [
  {
    title: "Integrated Systems",
    description: "Centralized access to essential institutional platforms.",
    icon: Network,
  },
  {
    title: "Performance-Driven",
    description:
      "Digital tools that support monitoring, evaluation, and evidence-based action.",
    icon: LineChart,
  },
  {
    title: "Responsive Governance",
    description:
      "Systems designed to improve coordination, accountability, and service delivery.",
    icon: Landmark,
  },
];

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 bg-[var(--eo-surface)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-16">
          <div className={cn(!reduceMotion && "animate-fade-up")}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--eo-dark-gold)]">
              Institutional Mandate
            </p>
            <h2
              id="about-heading"
              className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-[var(--eo-navy)]"
            >
              About Executive Operations
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--eo-muted)] sm:text-lg">
              The Office of the Vice President for Executive Operations and
              Institutional Development coordinates institutional planning,
              performance monitoring, administrative systems, organizational
              development, and other strategic initiatives that support the
              effective and responsive governance of Partido State University.
            </p>
          </div>

          <div className="grid gap-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={cn(
                    "flex gap-4 rounded-2xl border border-[var(--eo-border)] bg-white p-5 shadow-[0_6px_20px_rgba(7,31,70,0.03)] sm:p-6",
                    !reduceMotion && "animate-fade-up",
                  )}
                  style={
                    reduceMotion
                      ? undefined
                      : { animationDelay: `${(index + 1) * 60}ms` }
                  }
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--eo-navy)_8%,white)] text-[var(--eo-navy)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--eo-navy)]">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--eo-muted)]">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
