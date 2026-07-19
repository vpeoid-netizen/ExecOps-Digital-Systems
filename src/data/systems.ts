import {
  Plane,
  Target,
  ClipboardCheck,
  Compass,
  GraduationCap,
  BadgeCheck,
  Building2,
  CalendarDays,
} from "lucide-react";
import type { DigitalSystem, FilterCategory } from "@/types/system";

export const FILTER_CATEGORIES: FilterCategory[] = [
  "All Systems",
  "Administrative Services",
  "Institutional Performance",
  "Strategic Alignment",
  "Performance Evaluation",
];

export const digitalSystems: DigitalSystem[] = [
  {
    id: "travel-request",
    title: "Executive Operations Travel Request System",
    shortTitle: "Travel Request System",
    category: "Administrative Services",
    description:
      "Prepare, submit, and manage official travel requests through the Executive Operations digital workflow.",
    url: "https://travel-request-system.vercel.app/",
    icon: Plane,
    featured: true,
    accent: "gold",
    section: "directory",
  },
  {
    id: "physical-target",
    title: "Physical Target Monitoring",
    category: "Institutional Performance",
    description:
      "Monitor the accomplishment of institutional physical targets across colleges, campuses, offices, and operating units.",
    url: "https://parsu-physical-target-ms.vercel.app/",
    icon: Target,
    featured: true,
    accent: "blue",
    section: "directory",
  },
  {
    id: "pbb-fy2024",
    title: "FY 2024 PBB Submission and Monitoring Dashboard",
    shortTitle: "FY 2024 PBB Dashboard",
    category: "Performance-Based Bonus",
    description:
      "Submit, organize, and monitor documentary and evidentiary requirements for the FY 2024 Performance-Based Bonus.",
    url: "https://pbb-fy2024-dashboard.vercel.app/",
    icon: ClipboardCheck,
    featured: true,
    accent: "amber",
    section: "directory",
  },
  {
    id: "agenda-alignment",
    title: "Triple Core Agenda Alignment Assistant",
    category: "Strategic Alignment",
    description:
      "Evaluate and strengthen the alignment of programs, projects, and activities with institutional, national, and global development agendas.",
    url: "https://agenda-alignment.vercel.app/",
    icon: Compass,
    featured: true,
    accent: "slate",
    section: "directory",
  },
  {
    id: "teaching-ipcr",
    title: "Teaching Personnel IPCR Evaluation Assistant",
    shortTitle: "Teaching Personnel IPCR",
    category: "Individual Performance Evaluation",
    description:
      "Review and evaluate the individual performance commitments and accomplishments of teaching personnel.",
    url: "https://parsu-ipcr-assistant.vercel.app/",
    icon: GraduationCap,
    accent: "blue",
    section: "evaluation",
  },
  {
    id: "non-teaching-ipcr",
    title: "Non-Teaching Personnel IPCR Evaluation Assistant",
    shortTitle: "Non-Teaching Personnel IPCR",
    category: "Individual Performance Evaluation",
    description:
      "Review and evaluate the individual performance commitments and accomplishments of non-teaching personnel.",
    url: "https://parsu-ntp-ipcr-assistant.vercel.app/",
    icon: BadgeCheck,
    accent: "gold",
    section: "evaluation",
  },
  {
    id: "opcr",
    title: "OPCR Evaluation Assistant",
    category: "Organizational Performance Evaluation",
    description:
      "Review and evaluate the performance commitments and accomplishments of University offices, units, and organizational divisions.",
    url: "https://parsu-opcr-assistant.vercel.app/",
    icon: Building2,
    accent: "slate",
    section: "evaluation",
  },
  {
    id: "execom-meeting",
    title: "Executive Committee Meeting Management System",
    shortTitle: "EXECOM Meeting Management",
    category: "Meeting Management",
    description:
      "Organize, document, and manage Executive Committee meetings, agendas, and related institutional proceedings.",
    url: "https://parsu-execom.vercel.app/",
    icon: CalendarDays,
    featured: true,
    accent: "gold",
    section: "office-of-the-president",
    developedFor: "Office of the President",
  },
];

export const directorySystems = digitalSystems.filter(
  (system) => system.section === "directory",
);

export const evaluationSystems = digitalSystems.filter(
  (system) => system.section === "evaluation",
);

export const officeOfThePresidentSystems = digitalSystems.filter(
  (system) => system.section === "office-of-the-president",
);

export function matchesFilter(
  system: DigitalSystem,
  filter: FilterCategory,
): boolean {
  if (filter === "All Systems") return true;
  if (filter === "Performance Evaluation") {
    return (
      system.category === "Individual Performance Evaluation" ||
      system.category === "Organizational Performance Evaluation" ||
      system.category === "Performance-Based Bonus"
    );
  }
  return system.category === filter;
}
