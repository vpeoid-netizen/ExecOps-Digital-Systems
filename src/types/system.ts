import type { LucideIcon } from "lucide-react";

export type SystemCategory =
  | "Administrative Services"
  | "Institutional Performance"
  | "Performance-Based Bonus"
  | "Strategic Alignment"
  | "Individual Performance Evaluation"
  | "Organizational Performance Evaluation";

export type FilterCategory =
  | "All Systems"
  | "Administrative Services"
  | "Institutional Performance"
  | "Strategic Alignment"
  | "Performance Evaluation";

export type AccentTone = "gold" | "blue" | "amber" | "slate";

export type DigitalSystem = {
  id: string;
  title: string;
  shortTitle?: string;
  category: SystemCategory;
  description: string;
  url: string;
  icon: LucideIcon;
  featured?: boolean;
  accent: AccentTone;
  section: "directory" | "evaluation";
};
