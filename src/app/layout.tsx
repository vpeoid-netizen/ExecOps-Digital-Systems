import type { Metadata } from "next";
import { Figtree, Outfit } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Executive Operations Digital Systems | Partido State University",
  description:
    "Central access portal for the digital systems and institutional platforms of Partido State University’s Office of the Vice President for Executive Operations and Institutional Development.",
  applicationName: "Executive Operations Digital Systems",
  authors: [{ name: "Partido State University" }],
  openGraph: {
    title: "Executive Operations Digital Systems | Partido State University",
    description:
      "Central access portal for the digital systems and institutional platforms of Partido State University’s Office of the Vice President for Executive Operations and Institutional Development.",
    type: "website",
    locale: "en_PH",
    siteName: "Executive Operations Digital Systems",
  },
  twitter: {
    card: "summary",
    title: "Executive Operations Digital Systems | Partido State University",
    description:
      "Central access portal for the digital systems and institutional platforms of Partido State University’s Executive Operations.",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-[var(--eo-text)]">
        <a
          href="#digital-systems"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-2xl focus:bg-white focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[var(--eo-navy)] focus:shadow-lg"
        >
          Skip to digital systems
        </a>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
