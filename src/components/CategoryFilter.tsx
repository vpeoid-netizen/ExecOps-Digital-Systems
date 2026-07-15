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
      className="flex flex-wrap gap-2"
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
              "min-h-11 rounded-full border px-4 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--eo-gold)] focus-visible:ring-offset-2",
              isActive
                ? "border-[var(--eo-navy)] bg-[var(--eo-navy)] text-white shadow-sm"
                : "border-[var(--eo-border)] bg-white text-[var(--eo-slate)] hover:border-[var(--eo-slate)]/40 hover:text-[var(--eo-navy)]",
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
