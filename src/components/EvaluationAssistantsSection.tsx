"use client";

import { SystemCard } from "@/components/SystemCard";
import { evaluationSystems } from "@/data/systems";

export function EvaluationAssistantsSection() {
  return (
    <section
      id="evaluation-assistants"
      aria-labelledby="evaluation-heading"
      className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-[var(--eo-border)] bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fc_100%)] p-6 shadow-[0_12px_40px_rgba(7,31,70,0.05)] sm:p-8 lg:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--eo-slate)]">
              Performance Evaluation
            </p>
            <h2
              id="evaluation-heading"
              className="mt-3 font-display text-[clamp(1.65rem,3.2vw,2.5rem)] font-semibold tracking-tight text-[var(--eo-navy)]"
            >
              IPCR and OPCR Evaluation Assistants
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--eo-muted)] sm:text-lg">
              Access the appropriate evaluation assistant for teaching personnel,
              non-teaching personnel, or organizational performance commitments.
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
