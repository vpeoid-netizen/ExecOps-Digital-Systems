"use client";

import { SystemCard } from "@/components/SystemCard";
import { evaluationSystems } from "@/data/systems";

export function EvaluationAssistantsSection() {
  return (
    <section
      id="evaluation-assistants"
      aria-labelledby="evaluation-heading"
      className="scroll-mt-28 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="soft-card rounded-[1.75rem] p-6 sm:p-8 lg:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--eo-slate)]">
              Performance evaluation
            </p>
            <h2
              id="evaluation-heading"
              className="font-display mt-3 text-[clamp(1.7rem,3.2vw,2.45rem)] font-bold tracking-tight text-[var(--eo-navy)]"
            >
              IPCR and OPCR assistants
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--eo-muted)] sm:text-lg">
              Pick the assistant that matches teaching, non-teaching, or
              organizational evaluation.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {evaluationSystems.map((system, index) => (
              <SystemCard
                key={system.id}
                system={system}
                index={index}
                compact
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
