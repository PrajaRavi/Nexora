// ---------- Types ----------

import { LucideIcon } from "lucide-react";

export interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  color: string;
  icon: LucideIcon;
}

export interface ServiceCardProps {
  service: Service;
}

export interface PricingPlan {
  name: "Starter" | "Pro" | "Enterprise";
  description: string;
  monthly: number;
  yearly: number;
  featured: boolean;
  cta: string;
  features: string[];
  unavailable: string[];
}

export interface PricingCardProps {
  plan: PricingPlan;
  yearly: boolean;
}

type ComparisonValue = string | number | boolean;

export interface ComparisonFeature {
  name: string;
  values: [ComparisonValue, ComparisonValue, ComparisonValue];
}

export interface ComparisonGroup {
  category: string;
  features: ComparisonFeature[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQItemProps extends FAQ {}

