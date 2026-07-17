"use client";

import { Apple, Monitor, Download, ExternalLink } from "lucide-react";
import { DESKTOP_DOWNLOADS } from "@/data/downloads";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const platforms = [
  {
    id: "mac",
    title: "Download for macOS",
    description:
      "Install the ExecOps Digital Systems desktop app on Mac computers (.dmg).",
    href: DESKTOP_DOWNLOADS.mac,
    icon: Apple,
    cta: "Download macOS app",
  },
  {
    id: "windows",
    title: "Download for Windows",
    description:
      "Install the ExecOps Digital Systems desktop app on Windows PCs (.exe).",
    href: DESKTOP_DOWNLOADS.windows,
    icon: Monitor,
    cta: "Download Windows app",
  },
] as const;

export function DownloadDesktopSection() {
  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      className="scroll-mt-24 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md-card mx-auto max-w-3xl rounded-3xl px-6 py-8 text-center sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--eo-dark-gold)]">
            Desktop application
          </p>
          <h2
            id="download-heading"
            className="font-display mt-2 text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold text-[var(--eo-navy)]"
          >
            Install on Mac or Windows
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--eo-muted)] sm:text-lg">
            Download the desktop app for quick access to Executive Operations
            Digital Systems from your computer.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <article
                key={platform.id}
                className="md-card flex h-full flex-col rounded-3xl p-6 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--md-surface-container-high)] text-[var(--eo-navy)] shadow-[var(--md-elev-1)]">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[var(--eo-navy)]">
                      {platform.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[var(--eo-muted)]">
                      {platform.description}
                    </p>
                  </div>
                </div>

                <a
                  href={platform.href}
                  className={cn(
                    buttonVariants({ variant: "primary", size: "lg" }),
                    "mt-6 w-full",
                  )}
                  download
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  {platform.cta}
                </a>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-[var(--eo-muted)]">
          Need another version?{" "}
          <a
            href={DESKTOP_DOWNLOADS.releasesPage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-[var(--eo-navy)] underline-offset-2 hover:underline"
          >
            View all releases
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </p>

        <div className="md-card-flat mx-auto mt-8 max-w-3xl rounded-2xl p-5 text-left text-sm leading-relaxed text-[var(--eo-muted)] sm:p-6">
          <p className="font-semibold text-[var(--eo-navy)]">Install notes</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            <li>
              <strong className="font-semibold text-[var(--eo-navy)]">macOS:</strong>{" "}
              Open the .dmg, then double-click{" "}
              <strong className="font-semibold text-[var(--eo-navy)]">
                Install and Open.command
              </strong>{" "}
              (recommended). This installs the app and clears the macOS security
              quarantine flag. If macOS says the app is damaged or broken, use
              that installer script instead of opening the .app directly.
            </li>
            <li>
              <strong className="font-semibold text-[var(--eo-navy)]">Windows:</strong>{" "}
              Run the setup file and follow the installer. If SmartScreen
              appears, choose More info → Run anyway.
            </li>
            <li>
              Linked systems still open in your default browser for secure
              access.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
