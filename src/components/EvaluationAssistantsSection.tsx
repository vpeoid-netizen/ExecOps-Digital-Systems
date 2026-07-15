"use client";

import { SystemCard } from "@/components/SystemCard";
import { evaluationSystems } from "@/data/systems";

export function EvaluationAssistantsSection() {
  return (
    <section
      id="evaluation-assistants"
      aria-labelledby="evaluation-heading"
      className="scroll-mt-24 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--md-outline-variant)] bg-[var(--md-surface-container-high)] p-6 shadow-[var(--md-elev-1)] sm:p-8 lg:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--eo-slate)]">
              Featured cards
            </p>
            <h2
              id="evaluation-heading"
              className="font-display mt-2 text-[clamp(1.65rem,3.2vw,2.4rem)] font-bold text-[var(--eo-navy)]"
            >
              IPCR and OPCR Evaluation Assistants
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--eo-muted)] sm:text-lg">
              Choose the evaluation assistant for teaching personnel,
              non-teaching personnel, or organizational commitments.
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
