import { BarChart3, Layers3, Zap } from "lucide-react";
import type { FeatureItem, TaskItem } from "../Types/Home";

export const features:FeatureItem[] = [
  {
    icon: Layers3,
    title: "Everything in one place",
    description:
      "Bring your projects, tasks, and team conversations together in one organized workspace.",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: BarChart3,
    title: "Insights that drive growth",
    description:
      "Turn complex data into clear dashboards and actionable insights for your next decision.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Zap,
    title: "Automate repetitive work",
    description:
      "Build smarter workflows that save time, reduce manual tasks, and keep projects moving.",
    color: "bg-amber-100 text-amber-600",
  },
];

export const companies:string[] = ["Layers", "Sisyphus", "Circooles", "Catalog", "Quotient"];

export const tasks:TaskItem[] = [
  { title: "Redesign landing page", team: "Design team", status: "In progress", color: "bg-blue-100 text-blue-700" },
  { title: "API integration", team: "Engineering", status: "Completed", color: "bg-emerald-100 text-emerald-700" },
  { title: "Customer research", team: "Marketing", status: "In review", color: "bg-amber-100 text-amber-700" },
];
