"use client";

import { ExternalLink } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import type { DigitalSystem } from "@/types/system";
import { cn } from "@/lib/utils";

const accentStyles = {
  gold: {
    icon: "bg-[rgba(247,185,24,0.2)] text-[var(--eo-dark-gold)]",
    ring: "group-hover:shadow-[0_0_0_3px_rgba(247,185,24,0.25)]",
  },
  blue: {
    icon: "bg-[rgba(48,78,112,0.12)] text-[var(--eo-slate)]",
    ring: "group-hover:shadow-[0_0_0_3px_rgba(48,78,112,0.18)]",
  },
  amber: {
    icon: "bg-[rgba(247,185,24,0.26)] text-[var(--eo-dark-gold)]",
    ring: "group-hover:shadow-[0_0_0_3px_rgba(164,123,0,0.2)]",
  },
  slate: {
    icon: "bg-[rgba(16,41,77,0.1)] text-[var(--eo-dark-blue)]",
    ring: "group-hover:shadow-[0_0_0_3px_rgba(16,41,77,0.16)]",
  },
} as const;

type SystemCardProps = {
  system: DigitalSystem;
  index?: number;
  compact?: boolean;
};

export function SystemCard({ system, index = 0, compact = false }: SystemCardProps) {
  const reduceMotion = useReducedMotion();
  const Icon = system.icon;
  const accent = accentStyles[system.accent];

  return (
    <article
      className={cn(
        "group relative flex h-full",
        !reduceMotion && "animate-fade-up",
      )}
      style={
        reduceMotion
          ? undefined
          : { animationDelay: `${Math.min(index, 6) * 45}ms` }
      }
    >
      <a
        href={system.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${system.title} in a new tab`}
        className={cn(
          "soft-card soft-card-hover relative flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--eo-gold)] focus-visible:ring-offset-2 sm:p-6",
          "motion-reduce:transform-none",
          accent.ring,
          compact ? "min-h-[230px]" : "min-h-[270px]",
        )}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <span
            className={cn(
              "soft-chip inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105",
              accent.icon,
            )}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="soft-chip rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-[var(--eo-slate)]">
            {system.category}
          </span>
        </div>

        <h3 className="font-display text-[1.2rem] font-semibold leading-snug text-[var(--eo-navy)] sm:text-[1.3rem]">
          {system.title}
        </h3>
        <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-[var(--eo-muted)]">
          {system.description}
        </p>

        <span className="soft-inset mt-5 inline-flex min-h-12 items-center justify-between gap-2 rounded-2xl px-4 text-sm font-semibold text-[var(--eo-navy)] transition-colors group-hover:bg-white/80">
          <span>Open system</span>
          <ExternalLink
            className="h-4 w-4 text-[var(--eo-slate)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </a>
    </article>
  );
}
