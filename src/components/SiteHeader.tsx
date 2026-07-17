"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#digital-systems", label: "Systems" },
  { href: "#download", label: "Download" },
  { href: "#about", label: "About" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-200",
        scrolled
          ? "border-[var(--md-outline-variant)] bg-white/95 shadow-[var(--md-elev-1)] backdrop-blur-md"
          : "border-transparent bg-[var(--md-surface)]/90 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="flex min-w-0 items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--eo-gold)] focus-visible:ring-offset-2 sm:gap-3"
          onClick={closeMenu}
        >
          <Image
            src="/logos/parsu-logo.png"
            alt="Partido State University seal"
            width={44}
            height={44}
            className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
            priority
          />
          <Image
            src="/logos/executive-operations-logo.png"
            alt="Office of the Vice President for Executive Operations and Institutional Development logo"
            width={44}
            height={44}
            className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
            priority
          />
          <span className="min-w-0 leading-tight">
            <span className="font-display block truncate text-[15px] font-semibold text-[var(--eo-navy)] sm:text-base">
              Executive Operations
            </span>
            <span className="block truncate text-[11px] font-medium text-[var(--eo-muted)] sm:text-xs">
              Partido State University
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-[var(--eo-slate)] transition-colors hover:bg-[var(--md-surface-container-high)] hover:text-[var(--eo-navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--eo-gold)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#digital-systems"
            className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "ml-2")}
          >
            Access Systems
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-[var(--md-outline)] bg-white text-[var(--eo-navy)] shadow-[var(--md-elev-1)] transition-colors hover:bg-[var(--md-surface-container-high)] lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-[var(--md-outline-variant)] bg-white lg:hidden",
          menuOpen ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-xl px-3 py-3.5 text-base font-semibold text-[var(--eo-navy)] hover:bg-[var(--md-surface-container-high)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#digital-systems"
            onClick={closeMenu}
            className={cn(buttonVariants({ variant: "secondary" }), "mt-2 w-full")}
          >
            Access Systems
          </a>
        </nav>
      </div>
    </header>
  );
}
