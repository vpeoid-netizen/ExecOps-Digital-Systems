"use client";

import { ExternalLink } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import type { DigitalSystem } from "@/types/system";
import { cn } from "@/lib/utils";

const accentStyles = {
  gold: {
    media: "bg-[linear-gradient(145deg,#FFF6D6_0%,#F7B918_120%)]",
    icon: "text-[var(--eo-dark-gold)]",
    shape: "bg-[rgba(247,185,24,0.35)]",
  },
  blue: {
    media: "bg-[linear-gradient(145deg,#E8F0FA_0%,#A8C0DC_100%)]",
    icon: "text-[var(--eo-slate)]",
    shape: "bg-[rgba(48,78,112,0.2)]",
  },
  amber: {
    media: "bg-[linear-gradient(145deg,#FFF3D0_0%,#E8B84A_100%)]",
    icon: "text-[var(--eo-dark-gold)]",
    shape: "bg-[rgba(164,123,0,0.22)]",
  },
  slate: {
    media: "bg-[linear-gradient(145deg,#E6ECF4_0%,#8FA7C4_100%)]",
    icon: "text-[var(--eo-dark-blue)]",
    shape: "bg-[rgba(16,41,77,0.18)]",
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
        "group flex h-full",
        !reduceMotion && "animate-fade-up",
      )}
      style={
        reduceMotion
          ? undefined
          : { animationDelay: `${Math.min(index, 6) * 40}ms` }
      }
    >
      <a
        href={system.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${system.title} in a new tab`}
        className={cn(
          "md-card flex h-full w-full flex-col overflow-hidden rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--eo-gold)] focus-visible:ring-offset-2",
          "hover:-translate-y-1 motion-reduce:transform-none",
          compact ? "min-h-[250px]" : "min-h-[300px]",
        )}
      >
        {/* Illustrative media area */}
        <div className={cn("relative h-28 overflow-hidden sm:h-32", accent.media)}>
          <span
            className={cn(
              "absolute -right-4 -top-6 h-28 w-28 rounded-[40%_60%_55%_45%] opacity-70",
              accent.shape,
            )}
            aria-hidden="true"
          />
          <span
            className={cn(
              "absolute -bottom-8 left-8 h-24 w-24 rounded-[55%_45%_60%_40%] opacity-50",
              accent.shape,
            )}
            aria-hidden="true"
          />
          <span
            className={cn(
              "absolute bottom-4 left-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[var(--md-elev-1)]",
              accent.icon,
            )}
          >
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="absolute bottom-5 right-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--eo-slate)] shadow-sm">
            {system.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          {system.developedFor && (
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--eo-dark-gold)]">
              {system.developedFor}
            </p>
          )}
          <h3 className="font-display text-[1.15rem] font-semibold leading-snug text-[var(--eo-navy)] sm:text-[1.25rem]">
            {system.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--eo-muted)] sm:text-[15px]">
            {system.description}
          </p>

          <span className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[var(--eo-navy)] px-4 text-sm font-semibold text-white transition-colors group-hover:bg-[var(--eo-dark-blue)]">
            Open system
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </a>
    </article>
  );
}
