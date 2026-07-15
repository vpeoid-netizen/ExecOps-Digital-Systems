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
      className="flex flex-wrap justify-center gap-2"
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
              "md-chip min-h-11 rounded-full px-4 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--eo-gold)] focus-visible:ring-offset-2",
              isActive && "md-chip-active",
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
