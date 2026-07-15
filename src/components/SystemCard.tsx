"use client";

import { ExternalLink } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import type { DigitalSystem } from "@/types/system";
import { cn } from "@/lib/utils";

const accentStyles = {
  gold: {
    icon: "bg-[color-mix(in_srgb,var(--eo-gold)_18%,white)] text-[var(--eo-dark-gold)]",
    border: "hover:border-[var(--eo-gold)]/55 group-focus-within:border-[var(--eo-gold)]/55",
    bar: "bg-[var(--eo-gold)]",
  },
  blue: {
    icon: "bg-[color-mix(in_srgb,var(--eo-slate)_14%,white)] text-[var(--eo-slate)]",
    border: "hover:border-[var(--eo-slate)]/45 group-focus-within:border-[var(--eo-slate)]/45",
    bar: "bg-[var(--eo-slate)]",
  },
  amber: {
    icon: "bg-[color-mix(in_srgb,var(--eo-gold)_22%,white)] text-[var(--eo-dark-gold)]",
    border: "hover:border-[var(--eo-dark-gold)]/40 group-focus-within:border-[var(--eo-dark-gold)]/40",
    bar: "bg-[var(--eo-dark-gold)]",
  },
  slate: {
    icon: "bg-[color-mix(in_srgb,var(--eo-dark-blue)_12%,white)] text-[var(--eo-dark-blue)]",
    border: "hover:border-[var(--eo-dark-blue)]/40 group-focus-within:border-[var(--eo-dark-blue)]/40",
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
          "relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[var(--eo-border)] bg-white p-5 shadow-[0_8px_24px_rgba(7,31,70,0.04)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--eo-gold)] focus-visible:ring-offset-2 sm:p-6",
          "hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(7,31,70,0.1)]",
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
              "inline-flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105",
              accent.icon,
            )}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="rounded-md bg-[var(--eo-surface)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--eo-slate)]">
            {system.category}
          </span>
        </div>

        <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-[var(--eo-navy)] sm:text-[1.35rem]">
          {system.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--eo-muted)] sm:text-[15px]">
          {system.description}
        </p>

        <span className="mt-5 inline-flex min-h-11 items-center justify-between gap-2 rounded-lg border border-[var(--eo-border)] bg-[var(--eo-surface)] px-4 text-sm font-semibold text-[var(--eo-navy)] transition-colors group-hover:border-[var(--eo-gold)]/50 group-hover:bg-white">
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
