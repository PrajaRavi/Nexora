import { BarChart3, Cloud, LockKeyhole, Users, Workflow, Zap } from "lucide-react";
import type { PricingPlan,ComparisonFeature,ComparisonGroup,FAQ,FAQItemProps,PricingCardProps,SectionHeadingProps,Service, ServiceCardProps} from "../Types/services";

export const services: Service[] = [
  {
    title: "Project Management",
    description:
      "Plan projects, track progress, and keep your entire team aligned with a shared workspace.",
    color: "bg-violet-100 text-violet-600",
    icon: Workflow,
  },
  {
    title: "Team Collaboration",
    description:
      "Bring conversations, team activities, and important updates together in one place.",
    color: "bg-blue-100 text-blue-600",
    icon: Users,
  },
  {
    title: "Workflow Automation",
    description:
      "Reduce repetitive tasks by creating streamlined workflows that help your team work efficiently.",
    color: "bg-amber-100 text-amber-600",
    icon: Zap,
  },
  {
    title: "Analytics and Insights",
    description:
      "Understand performance with clear dashboards, useful metrics, and actionable insights.",
    color: "bg-emerald-100 text-emerald-600",
    icon: BarChart3,
  },
  {
    title: "Cloud Workspace",
    description:
      "Access your team's resources from one centralized workspace designed for flexible work.",
    color: "bg-sky-100 text-sky-600",
    icon: Cloud,
  },
  {
    title: "Security and Access",
    description:
      "Organize permissions and protect workspace information with access management features.",
    color: "bg-rose-100 text-rose-600",
    icon: LockKeyhole,
  },
];

export const plans: PricingPlan[] = [
  {
    name: "Starter",
    description: "Essential tools for individuals and small teams getting started.",
    monthly: 0,
    yearly: 0,
    featured: false,
    cta: "Get started",
    features: [
      "Up to 3 team members",
      "Basic project management",
      "Essential collaboration tools",
      "Standard support",
    ],
    unavailable: [
      "Advanced analytics",
      "Custom integrations",
      "Priority support",
    ],
  },
  {
    name: "Pro",
    description: "More powerful tools for growing teams that need to do more.",
    monthly: 19,
    yearly: 15,
    featured: true,
    cta: "Choose Pro",
    features: [
      "Unlimited team members",
      "Advanced project management",
      "Workflow automation",
      "Advanced analytics",
      "Custom integrations",
      "Priority support",
    ],
    unavailable: ["Dedicated account manager"],
  },
  {
    name: "Enterprise",
    description: "Flexible solutions for organizations with advanced requirements.",
    monthly: 0,
    yearly: 0,
    featured: false,
    cta: "Contact sales",
    features: [
      "Everything in Pro",
      "Custom access controls",
      "Enterprise integrations",
      "Dedicated support",
      "Custom onboarding",
      "Dedicated account manager",
    ],
    unavailable: [],
  },
];

export const comparison: ComparisonGroup[] = [
  {
    category: "Workspace",
    features: [
      {
        name: "Team members",
        values: ["Up to 3", "Unlimited", "Unlimited"],
      },
      {
        name: "Project management",
        values: [true, true, true],
      },
      {
        name: "Team collaboration",
        values: [true, true, true],
      },
      {
        name: "Cloud workspace",
        values: [true, true, true],
      },
    ],
  },
  {
    category: "Productivity",
    features: [
      {
        name: "Workflow automation",
        values: [false, true, true],
      },
      {
        name: "Advanced analytics",
        values: [false, true, true],
      },
      {
        name: "Custom integrations",
        values: [false, true, true],
      },
    ],
  },
  {
    category: "Support and security",
    features: [
      {
        name: "Standard support",
        values: [true, true, true],
      },
      {
        name: "Priority support",
        values: [false, true, true],
      },
      {
        name: "Custom access controls",
        values: [false, false, true],
      },
      {
        name: "Dedicated account manager",
        values: [false, false, true],
      },
    ],
  },
];

export const faqs: FAQ[] = [
  {
    question: "Can I use Nexora for free?",
    answer:
      "The demo Starter plan is presented as free. In a real product, configure your plan limits and signup flow in your backend before publishing this offer.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "A production subscription system can support upgrades and downgrades. This static template does not process subscription changes yet.",
  },
  {
    question: "Do you offer enterprise solutions?",
    answer:
      "Yes, this demo includes an Enterprise tier for organizations interested in custom integrations, access controls, and dedicated support. Use the contact page to demonstrate a sales inquiry flow.",
  },
  {
    question: "Are these prices ready for production?",
    answer:
      "No. The displayed prices are sample content for the template. Confirm your real pricing, currency, taxes, billing terms, and subscription features before publishing.",
  },
];
