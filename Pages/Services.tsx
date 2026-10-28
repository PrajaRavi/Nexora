
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Sparkles,
  
  X,
  
} from "lucide-react";

import type {PricingCardProps,PricingPlan,SectionHeadingProps,Service,ServiceCardProps,ComparisonFeature,ComparisonGroup,FAQ,FAQItemProps} from "../Types/services"
// ---------- Data ----------
import {comparison,faqs,plans,services} from "../Data/services"

// ---------- Reusable Components ----------

function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>

      <p className="mt-5 text-base leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}

function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/40 sm:p-7">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.color}`}
      >
        <Icon size={23} />
      </div>

      <h3 className="mt-6 text-lg font-semibold text-slate-900">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {service.description}
      </p>

      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-violet-600">
        Included in our platform
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </article>
  );
}

function PricingCard({ plan, yearly }: PricingCardProps) {
  const isEnterprise = plan.name === "Enterprise";
  const price = yearly ? plan.yearly : plan.monthly;

  return (
    <article
      className={`relative flex flex-col rounded-2xl border p-6 sm:p-7 ${
        plan.featured
          ? "border-violet-500 bg-white shadow-xl shadow-violet-100/60 ring-1 ring-violet-500"
          : "border-slate-200 bg-white"
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-violet-600 px-4 py-1 text-xs font-semibold text-white">
          Most popular
        </span>
      )}

      <div>
        <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>

        <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
          {plan.description}
        </p>
      </div>

      <div className="mt-7 min-h-[90px]">
        {isEnterprise ? (
          <>
            <p className="text-3xl font-bold tracking-tight text-slate-950">
              Custom
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Tailored to your organization
            </p>
          </>
        ) : (
          <>
            <div className="flex items-end gap-1">
              <span className="text-4xl font-bold tracking-tight text-slate-950">
                ${price}
              </span>

              <span className="pb-1 text-sm text-slate-500">
                / user / mo
              </span>
            </div>

            <p className="mt-2 text-xs text-slate-500">
              {price === 0
                ? "Free forever"
                : yearly
                  ? "Billed annually"
                  : "Billed monthly"}
            </p>
          </>
        )}
      </div>

      <Link
        to="/contact"
        className={`mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
          plan.featured
            ? "bg-violet-600 text-white hover:bg-violet-700"
            : "border border-slate-200 bg-white text-slate-800 hover:border-violet-300 hover:text-violet-700"
        }`}
      >
        {plan.cta}
        <ArrowRight size={16} />
      </Link>

      <div className="my-6 border-t border-slate-100" />

      <p className="text-sm font-semibold text-slate-900">
        What's included
      </p>

      <ul className="mt-4 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check
              size={17}
              className="mt-0.5 shrink-0 text-emerald-500"
            />
            <span className="text-slate-600">{feature}</span>
          </li>
        ))}

        {plan.unavailable.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-slate-400"
          >
            <X size={17} className="mt-0.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-slate-50">
              <th className="w-[40%] px-6 py-5 font-semibold text-slate-900">
                Features
              </th>

              <th className="px-4 py-5 text-center font-semibold text-slate-700">
                Starter
              </th>

              <th className="bg-violet-50 px-4 py-5 text-center font-semibold text-violet-700">
                Pro
              </th>

              <th className="px-4 py-5 text-center font-semibold text-slate-700">
                Enterprise
              </th>
            </tr>
          </thead>

          <tbody>
            {comparison.map((group:ComparisonGroup) => (
              <Fragment key={group.category}>
                <tr>
                  <td
                    colSpan={4}
                    className="border-t border-slate-100 bg-slate-50/70 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500"
                  >
                    {group.category}
                  </td>
                </tr>

                {group.features.map((feature) => (
                  <tr
                    key={feature.name}
                    className="border-t border-slate-100 transition hover:bg-slate-50/70"
                  >
                    <td className="px-6 py-4 text-slate-700">
                      {feature.name}
                    </td>

                    {feature.values.map((value, index) => (
                      <td
                        key={`${feature.name}-${index}`}
                        className={`px-4 py-4 text-center ${
                          index === 1 ? "bg-violet-50/50" : ""
                        }`}
                      >
                        {typeof value === "boolean" ? (
                          value ? (
                            <Check
                              size={18}
                              className="mx-auto text-emerald-500"
                              aria-label="Included"
                            />
                          ) : (
                            <X
                              size={17}
                              className="mx-auto text-slate-300"
                              aria-label="Not included"
                            />
                          )
                        ) : (
                          <span className="text-slate-600">{value}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-slate-900">{question}</span>

        <ChevronDown
          size={19}
          className={`shrink-0 text-slate-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <p className="pb-5 pr-8 text-sm leading-7 text-slate-600">
          {answer}
        </p>
      )}
    </div>
  );
}

// ---------- Services Page ----------

function Services() {
  const [yearly, setYearly] = useState(false);

  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
        <div className="absolute left-1/2 top-12 -z-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-violet-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
            <Sparkles size={27} />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-violet-600">
            Services and solutions
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Everything your team needs to{" "}
            <span className="bg-linear-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
              do its best work.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            From project planning to workflow automation, bring your essential
            tools together in one flexible workspace.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              Explore pricing
              <ArrowRight size={17} />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we offer"
            title="One platform. Multiple possibilities."
            description="Give every part of your workflow the tools it needs to operate smoothly, collaborate effectively, and scale with confidence."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}

export default Services;
