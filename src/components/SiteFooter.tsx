import Image from "next/image";
import { ExternalLink, Download } from "lucide-react";
import { digitalSystems } from "@/data/systems";
import { DESKTOP_DOWNLOADS } from "@/data/downloads";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--eo-navy)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:p-10">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logos/parsu-logo.png"
                alt="Partido State University seal"
                width={52}
                height={52}
                className="h-12 w-12 object-contain"
              />
              <Image
                src="/logos/executive-operations-logo.png"
                alt="Office of the Vice President for Executive Operations and Institutional Development logo"
                width={52}
                height={52}
                className="h-12 w-12 object-contain"
              />
            </div>
            <p className="font-display mt-5 max-w-md text-xl font-semibold leading-snug">
              Office of the Vice President for Executive Operations and
              Institutional Development
            </p>
            <p className="mt-2 text-sm text-white/70">Partido State University</p>
            <p className="mt-4 text-sm font-semibold text-[var(--eo-gold)]">
              Executive Operations Digital Systems
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={DESKTOP_DOWNLOADS.mac}
                className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                macOS
              </a>
              <a
                href={DESKTOP_DOWNLOADS.windows}
                className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                Windows
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">
              System cards
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {digitalSystems.map((system) => (
                <li key={system.id}>
                  <a
                    href={system.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${system.title} in a new tab`}
                    className="group inline-flex min-h-11 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-[var(--eo-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--eo-gold)]"
                  >
                    <ExternalLink
                      className="h-3.5 w-3.5 shrink-0 opacity-60"
                      aria-hidden="true"
                    />
                    <span className="leading-snug">
                      {system.shortTitle ?? system.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-sm text-white/55">
          © {year} Partido State University. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
