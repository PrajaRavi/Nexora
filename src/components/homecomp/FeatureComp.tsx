import { ChevronRight, Icon } from "lucide-react"
import type { FeatureCompT } from "../../../Types/Home"
import { Link } from "react-router-dom"

export const FeatureComp=({feature}:FeatureCompT)=>{
  return (
    <article
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}
                  >
                    <feature.icon size={23} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>

                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition group-hover:gap-3"
                  >
                    Learn more
                    <ChevronRight size={17} />
                  </Link>
                </article>
  )
}