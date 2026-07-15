"use client";

import { ExternalLink } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import type { DigitalSystem } from "@/types/system";
import { cn } from "@/lib/utils";

const accentStyles = {
  gold: {
    icon: "bg-[rgba(247,185,24,0.22)] text-[var(--eo-dark-gold)] border border-[rgba(247,185,24,0.35)]",
    border: "hover:border-[rgba(247,185,24,0.65)] group-focus-within:border-[rgba(247,185,24,0.65)]",
    bar: "bg-[var(--eo-gold)]",
  },
  blue: {
    icon: "bg-[rgba(48,78,112,0.14)] text-[var(--eo-slate)] border border-[rgba(48,78,112,0.2)]",
    border: "hover:border-[rgba(48,78,112,0.45)] group-focus-within:border-[rgba(48,78,112,0.45)]",
    bar: "bg-[var(--eo-slate)]",
  },
  amber: {
    icon: "bg-[rgba(247,185,24,0.28)] text-[var(--eo-dark-gold)] border border-[rgba(164,123,0,0.25)]",
    border: "hover:border-[rgba(164,123,0,0.45)] group-focus-within:border-[rgba(164,123,0,0.45)]",
    bar: "bg-[var(--eo-dark-gold)]",
  },
  slate: {
    icon: "bg-[rgba(16,41,77,0.12)] text-[var(--eo-dark-blue)] border border-[rgba(16,41,77,0.18)]",
    border: "hover:border-[rgba(16,41,77,0.4)] group-focus-within:border-[rgba(16,41,77,0.4)]",
    bar: "bg-[var(--eo-dark-blue)]",
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
          : { animationDelay: `${Math.min(index, 6) * 50}ms` }
      }
    >
      <a
        href={system.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${system.title} in a new tab`}
        className={cn(
          "glass-panel relative flex h-full w-full flex-col overflow-hidden rounded-2xl p-5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--eo-gold)] focus-visible:ring-offset-2 sm:p-6",
          "hover:-translate-y-1.5 hover:bg-white/70 hover:shadow-[0_20px_48px_rgba(7,31,70,0.14)]",
          "motion-reduce:transform-none motion-reduce:transition-none",
          accent.border,
          compact ? "min-h-[240px]" : "min-h-[280px]",
        )}
      >
        <span
          className={cn(
            "absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-focus-within:scale-x-100",
            accent.bar,
          )}
          aria-hidden="true"
        />

        <div className="mb-4 flex items-start justify-between gap-3">
          <span
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-105",
              accent.icon,
            )}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="glass-chip rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--eo-slate)]">
            {system.category}
          </span>
        </div>

        <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-[var(--eo-navy)] sm:text-[1.35rem]">
          {system.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--eo-muted)] sm:text-[15px]">
          {system.description}
        </p>

        <span className="mt-5 inline-flex min-h-11 items-center justify-between gap-2 rounded-xl border border-white/70 bg-white/45 px-4 text-sm font-semibold text-[var(--eo-navy)] backdrop-blur-md transition-colors group-hover:border-[var(--eo-gold)]/50 group-hover:bg-white/75">
          <span>Open System</span>
          <ExternalLink
            className="h-4 w-4 text-[var(--eo-slate)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </a>
    </article>
  );
}
