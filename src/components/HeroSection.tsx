"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { digitalSystems } from "@/data/systems";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const platformCount = digitalSystems.length;

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[var(--eo-navy)] pt-24 text-white sm:pt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(48,78,112,0.55),transparent_55%),radial-gradient(ellipse_at_85%_15%,rgba(247,185,24,0.12),transparent_40%),linear-gradient(160deg,#071f46_0%,#10294d_55%,#071f46_100%)]"
        aria-hidden="true"
      />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="hero-ribbon pointer-events-none absolute -left-1/4 top-0 h-full w-[150%] rotate-[-8deg]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-8 lg:pb-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--eo-gold)] sm:text-xs">
            Office of the Vice President for Executive Operations and Institutional Development
          </p>
          <h1
            id="hero-heading"
            className="font-display text-[clamp(2.15rem,5vw,3.75rem)] font-semibold leading-[1.12] tracking-tight text-white"
          >
            Executive Operations Digital Systems
          </h1>
          <p className="mt-5 max-w-xl text-[clamp(1rem,2.2vw,1.2rem)] leading-relaxed text-white/80">
            Your central gateway to the digital platforms, monitoring tools,
            request systems, and performance assistants of Partido State
            University&apos;s Executive Operations.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#digital-systems"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              Explore Digital Systems
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#about"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              About Executive Operations
            </a>
          </div>

          <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur-sm">
            <Layers className="h-4 w-4 text-[var(--eo-gold)]" aria-hidden="true" />
            <span>
              {platformCount} Digital Platforms · Centralized access to Executive
              Operations systems
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative">
            <div
              className="absolute inset-0 -m-6 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(247,185,24,0.18),transparent_65%)]"
              aria-hidden="true"
            />
            <div className="relative flex h-[min(72vw,280px)] w-[min(72vw,280px)] items-center justify-center rounded-[1.75rem] border border-white/15 bg-white/5 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:h-[300px] sm:w-[300px] lg:h-[340px] lg:w-[340px] lg:p-8">
              <div
                className="absolute inset-3 rounded-[1.35rem] border border-[var(--eo-gold)]/25"
                aria-hidden="true"
              />
              <Image
                src="/logos/executive-operations-logo.png"
                alt="Office of the Vice President for Executive Operations and Institutional Development logo"
                width={280}
                height={280}
                priority
                className="relative h-auto w-[78%] max-w-[240px] object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
