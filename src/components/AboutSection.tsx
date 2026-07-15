"use client";

import { Network, LineChart, Landmark } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const values = [
  {
    title: "Integrated systems",
    description: "Centralized access to essential institutional platforms.",
    icon: Network,
  },
  {
    title: "Performance-driven",
    description:
      "Digital tools that support monitoring, evaluation, and evidence-based action.",
    icon: LineChart,
  },
  {
    title: "Responsive governance",
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
      className="scroll-mt-28 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          <div
            className={cn(
              "soft-card rounded-[1.75rem] p-6 sm:p-8",
              !reduceMotion && "animate-fade-up",
            )}
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--eo-dark-gold)]">
              About the office
            </p>
            <h2
              id="about-heading"
              className="font-display mt-3 text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold tracking-tight text-[var(--eo-navy)]"
            >
              About Executive Operations
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--eo-muted)] sm:text-lg">
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
                    "soft-card soft-card-hover flex gap-4 rounded-[1.35rem] p-5 sm:p-6",
                    !reduceMotion && "animate-fade-up",
                  )}
                  style={
                    reduceMotion
                      ? undefined
                      : { animationDelay: `${(index + 1) * 55}ms` }
                  }
                >
                  <span className="soft-chip inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-[var(--eo-navy)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--eo-navy)]">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-[var(--eo-muted)]">
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
