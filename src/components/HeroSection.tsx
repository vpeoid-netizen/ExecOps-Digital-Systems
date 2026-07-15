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
      className="relative overflow-hidden bg-[var(--eo-navy)] pt-28 text-white sm:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(48,78,112,0.65),transparent_55%),radial-gradient(ellipse_at_85%_10%,rgba(247,185,24,0.16),transparent_40%),linear-gradient(165deg,#061833_0%,#10294d_50%,#071f46_100%)]"
        aria-hidden="true"
      />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="hero-ribbon pointer-events-none absolute -left-1/4 top-0 h-full w-[150%] rotate-[-8deg]" aria-hidden="true" />
      <div
        className="hero-orb left-[8%] top-[30%] h-40 w-40 bg-[rgba(247,185,24,0.22)]"
        aria-hidden="true"
      />
      <div
        className="hero-orb bottom-[10%] right-[12%] h-52 w-52 bg-[rgba(96,140,190,0.28)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-8 lg:pb-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <div className="glass-dark rounded-3xl p-6 sm:p-8 lg:p-9">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--eo-gold)] sm:text-xs">
              Office of the Vice President for Executive Operations and Institutional Development
            </p>
            <h1
              id="hero-heading"
              className="font-display text-[clamp(2.15rem,5vw,3.6rem)] font-semibold leading-[1.12] tracking-tight text-white"
            >
              Executive Operations Digital Systems
            </h1>
            <p className="mt-5 max-w-xl text-[clamp(1rem,2.2vw,1.15rem)] leading-relaxed text-white/80">
              Your central gateway to the digital platforms, monitoring tools,
              request systems, and performance assistants of Partido State
              University&apos;s Executive Operations.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#digital-systems"
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "shadow-[0_10px_28px_rgba(247,185,24,0.35)]",
                )}
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

            <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-md">
              <Layers className="h-4 w-4 text-[var(--eo-gold)]" aria-hidden="true" />
              <span>
                {platformCount} Digital Platforms · Centralized access to Executive
                Operations systems
              </span>
            </div>
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
              className="absolute inset-0 -m-8 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgba(247,185,24,0.22),transparent_65%)]"
              aria-hidden="true"
            />
            <div className="glass-dark relative flex h-[min(72vw,280px)] w-[min(72vw,280px)] items-center justify-center rounded-[1.75rem] p-6 sm:h-[300px] sm:w-[300px] lg:h-[340px] lg:w-[340px] lg:p-8">
              <div
                className="absolute inset-3 rounded-[1.35rem] border border-[var(--eo-gold)]/30"
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
