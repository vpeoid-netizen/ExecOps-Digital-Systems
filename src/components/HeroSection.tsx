"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { HeroIllustration } from "@/components/HeroIllustration";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[var(--eo-navy)] text-white"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="illust-blob left-[-8%] top-[10%] h-56 w-56 bg-[rgba(247,185,24,0.2)]" />
        <div className="illust-blob bottom-[-10%] right-[-5%] h-72 w-72 bg-[rgba(96,140,190,0.25)]" />
        <div className="absolute inset-0 bg-[linear-gradient(145deg,#071f46_0%,#10294d_55%,#0a2548_100%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="order-2 lg:order-1"
        >
          <div className="mb-5 flex items-center gap-3">
            <Image
              src="/logos/executive-operations-logo.png"
              alt="Office of the Vice President for Executive Operations and Institutional Development logo"
              width={56}
              height={56}
              className="h-12 w-12 rounded-2xl bg-white/10 object-contain p-1.5 ring-1 ring-white/20 sm:h-14 sm:w-14"
              priority
            />
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--eo-gold)] sm:text-[13px]">
              Office of the Vice President for Executive Operations
              <span className="mt-0.5 block font-medium tracking-normal text-white/65 normal-case">
                and Institutional Development
              </span>
            </p>
          </div>

          <h1
            id="hero-heading"
            className="font-display text-[clamp(2.2rem,4.8vw,3.5rem)] font-bold leading-[1.12] text-white"
          >
            Executive Operations Digital Systems
          </h1>
          <p className="mt-4 max-w-xl text-[clamp(1rem,2vw,1.15rem)] leading-relaxed text-white/78">
            A card-based gateway to travel requests, monitoring dashboards,
            strategic assistants, and IPCR/OPCR evaluation tools.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#digital-systems"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              Explore systems
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#about"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/30 text-white hover:bg-white/10",
              )}
            >
              About the office
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative w-full max-w-[380px] rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-[var(--md-elev-3)] backdrop-blur-sm sm:p-5">
            <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,#f7f9fc_0%,#e8eef6_100%)] p-2">
              <HeroIllustration />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
