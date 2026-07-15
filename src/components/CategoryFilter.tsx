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
      className="soft-inset inline-flex max-w-full flex-wrap justify-center gap-2 rounded-[1.35rem] p-2"
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
              "min-h-11 rounded-2xl px-4 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--eo-gold)] focus-visible:ring-offset-2",
              isActive
                ? "bg-[var(--eo-navy)] text-white shadow-[6px_6px_16px_rgba(7,31,70,0.25)]"
                : "bg-transparent text-[var(--eo-slate)] hover:bg-white/55 hover:text-[var(--eo-navy)]",
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
