"use client";

import { cn } from "@/lib/utils";
import type { FilterCategory } from "@/types/system";
import { FILTER_CATEGORIES } from "@/data/systems";

type CategoryFilterProps = {
  active: FilterCategory;
  onChange: (category: FilterCategory) => void;
};

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div
      role="group"
      aria-label="Filter digital systems by category"
      className="glass-panel inline-flex max-w-full flex-wrap justify-center gap-2 rounded-2xl p-2"
    >
      {FILTER_CATEGORIES.map((category) => {
        const isActive = active === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={cn(
              "min-h-11 rounded-xl border px-4 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--eo-gold)] focus-visible:ring-offset-2",
              isActive
                ? "border-white/30 bg-[var(--eo-navy)] text-white shadow-[0_8px_24px_rgba(7,31,70,0.25)]"
                : "border-transparent bg-white/35 text-[var(--eo-slate)] hover:bg-white/60 hover:text-[var(--eo-navy)]",
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
