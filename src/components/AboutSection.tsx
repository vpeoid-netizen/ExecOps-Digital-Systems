"use client";

import { Network, LineChart, Landmark } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const values = [
  {
    title: "Integrated Systems",
    description: "Centralized access to essential institutional platforms.",
    icon: Network,
    tint: "bg-[linear-gradient(145deg,#E8F0FA_0%,#C5D6EA_100%)]",
  },
  {
    title: "Performance-Driven",
    description:
      "Digital tools that support monitoring, evaluation, and evidence-based action.",
    icon: LineChart,
    tint: "bg-[linear-gradient(145deg,#FFF6D6_0%,#F0D078_100%)]",
  },
  {
    title: "Responsive Governance",
    description:
      "Systems designed to improve coordination, accountability, and service delivery.",
    icon: Landmark,
    tint: "bg-[linear-gradient(145deg,#E6ECF4_0%,#A8B8CC_100%)]",
  },
];

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          <div
            className={cn(
              "md-card relative overflow-hidden rounded-3xl p-6 sm:p-8",
              !reduceMotion && "animate-fade-up",
            )}
          >
            <span
              className="illust-blob -right-10 -top-10 h-36 w-36 bg-[rgba(247,185,24,0.25)]"
              aria-hidden="true"
            />
            <p className="relative text-xs font-bold uppercase tracking-[0.16em] text-[var(--eo-dark-gold)]">
              About Executive Operations
            </p>
            <h2
              id="about-heading"
              className="font-display relative mt-2 text-[clamp(1.75rem,3.3vw,2.5rem)] font-bold text-[var(--eo-navy)]"
            >
              Institutional coordination, digitally connected
            </h2>
            <p className="relative mt-5 text-base leading-relaxed text-[var(--eo-muted)] sm:text-lg">
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
                    "md-card flex gap-4 overflow-hidden rounded-3xl p-0",
                    !reduceMotion && "animate-fade-up",
                  )}
                  style={
                    reduceMotion
                      ? undefined
                      : { animationDelay: `${(index + 1) * 50}ms` }
                  }
                >
                  <div
                    className={cn(
                      "relative flex w-20 shrink-0 items-center justify-center sm:w-24",
                      value.tint,
                    )}
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[var(--eo-navy)] shadow-[var(--md-elev-1)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="py-4 pr-4 sm:py-5 sm:pr-5">
                    <h3 className="font-display text-lg font-semibold text-[var(--eo-navy)]">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--eo-muted)]">
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
