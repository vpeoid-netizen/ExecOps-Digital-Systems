"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
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
      className="relative overflow-hidden bg-[var(--eo-navy)] pt-28 text-white sm:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,rgba(48,78,112,0.7),transparent_55%),radial-gradient(ellipse_at_90%_5%,rgba(247,185,24,0.18),transparent_42%),linear-gradient(160deg,#061833_0%,#0d2748_48%,#071f46_100%)]"
        aria-hidden="true"
      />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="hero-orb left-[5%] top-[28%] h-44 w-44 bg-[rgba(247,185,24,0.2)]"
        aria-hidden="true"
      />
      <div
        className="hero-orb bottom-[8%] right-[8%] h-56 w-56 bg-[rgba(110,155,210,0.28)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-4 sm:px-6 sm:pb-20 sm:pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 lg:px-8 lg:pb-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <div className="glass-dark rounded-[1.75rem] p-6 sm:p-8 lg:p-10">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--eo-gold)] sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Executive Operations · Partido State University
            </p>
            <h1
              id="hero-heading"
              className="font-display text-[clamp(2.2rem,5vw,3.55rem)] font-bold leading-[1.1] text-white"
            >
              Executive Operations Digital Systems
            </h1>
            <p className="mt-5 max-w-xl text-[clamp(1.02rem,2.1vw,1.18rem)] leading-relaxed text-white/78">
              Find and open university platforms in one place—travel requests,
              performance tools, monitoring dashboards, and evaluation
              assistants.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#digital-systems"
                className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
              >
                Browse systems
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#about"
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
              >
                About the office
              </a>
            </div>

            <p className="mt-7 text-sm font-medium text-white/70">
              {platformCount} platforms available · Opens in a new tab
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative">
            <div
              className="absolute inset-0 -m-8 rounded-full bg-[radial-gradient(circle_at_center,rgba(247,185,24,0.24),transparent_65%)]"
              aria-hidden="true"
            />
            <div className="glass-dark relative flex h-[min(70vw,270px)] w-[min(70vw,270px)] items-center justify-center rounded-[2rem] p-7 sm:h-[300px] sm:w-[300px] lg:h-[320px] lg:w-[320px]">
              <Image
                src="/logos/executive-operations-logo.png"
                alt="Office of the Vice President for Executive Operations and Institutional Development logo"
                width={260}
                height={260}
                priority
                className="relative h-auto w-[80%] max-w-[220px] object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
