import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { digitalSystems } from "@/data/systems";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--eo-navy)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
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
            <p className="mt-5 max-w-md font-display text-xl font-semibold leading-snug text-white">
              Office of the Vice President for Executive Operations and
              Institutional Development
            </p>
            <p className="mt-2 text-sm text-white/70">Partido State University</p>
            <p className="mt-4 text-sm font-medium text-[var(--eo-gold)]">
              Executive Operations Digital Systems
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">
              Quick Links
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {digitalSystems.map((system) => (
                <li key={system.id}>
                  <a
                    href={system.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${system.title} in a new tab`}
                    className="group inline-flex min-h-11 items-center gap-2 rounded-lg py-2 text-sm text-white/80 transition-colors hover:text-[var(--eo-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--eo-gold)]"
                  >
                    <ExternalLink
                      className="h-3.5 w-3.5 shrink-0 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-sm text-white/55">
            © {year} Partido State University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
