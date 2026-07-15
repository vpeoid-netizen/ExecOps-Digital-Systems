"use client";

import { useMemo, useState } from "react";
import { SystemCard } from "@/components/SystemCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import {
  directorySystems,
  digitalSystems,
  matchesFilter,
} from "@/data/systems";
import type { FilterCategory } from "@/types/system";

export function SystemsGrid() {
  const [activeFilter, setActiveFilter] =
    useState<FilterCategory>("All Systems");

  const systems = useMemo(() => {
    if (activeFilter === "All Systems") {
      return directorySystems;
    }
    if (activeFilter === "Performance Evaluation") {
      return digitalSystems.filter((system) => matchesFilter(system, activeFilter));
    }
    return directorySystems.filter((system) =>
      matchesFilter(system, activeFilter),
    );
  }, [activeFilter]);

  return (
    <section
      id="digital-systems"
      aria-labelledby="systems-heading"
      className="scroll-mt-28 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--eo-dark-gold)]">
            Systems directory
          </p>
          <h2
            id="systems-heading"
            className="font-display mt-3 text-[clamp(1.85rem,3.6vw,2.75rem)] font-bold tracking-tight text-[var(--eo-navy)]"
          >
            Choose a platform to open
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--eo-muted)] sm:text-lg">
            Tap a card to launch the system in a new browser tab.
          </p>
        </div>

        <div className="mt-9 flex justify-center">
          <CategoryFilter active={activeFilter} onChange={setActiveFilter} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {systems.map((system, index) => (
            <SystemCard key={system.id} system={system} index={index} />
          ))}
        </div>

        {systems.length === 0 && (
          <p className="mt-10 text-center text-[var(--eo-muted)]" role="status">
            No systems match this category.
          </p>
        )}
      </div>
    </section>
  );
}
