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
        <div className="glass-panel mx-auto max-w-3xl rounded-3xl px-6 py-8 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--eo-dark-gold)]">
            Systems Directory
          </p>
          <h2
            id="systems-heading"
            className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-[var(--eo-navy)]"
          >
            Digital Systems and Platforms
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--eo-muted)] sm:text-lg">
            Select a platform to access the corresponding Executive Operations
            service.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
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
