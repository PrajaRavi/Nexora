import {
  ArrowRight,
  BarChart3,
  Check,
  CirclePlay,
  Layers3,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { companies, features, tasks } from "../Data/home";
import Comp1 from "../src/components/homecomp/Comp1";
import { WorkspaceComp } from "../src/components/homecomp/WorkspComp";
import { FeatureComp } from "../src/components/homecomp/FeatureComp";

function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="absolute -inset-5 rounded-3xl bg-violet-300/30 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white">
              <Layers3 size={17} />
            </div>
            <span className="font-semibold text-slate-900">Workspace</span>
          </div>

          <div className="flex -space-x-2">
            {["JD", "AM", "SK"].map((initials, index) => (
              <Comp1 index={index} initials={initials} key={initials} />
            ))}
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-xs font-medium text-slate-600">
              +4
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr]">
          <aside className="hidden border-r border-slate-100 bg-slate-50/70 p-4 sm:block">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Workspace
            </p>
            {[
              "Overview",
              "My projects",
              "Analytics",
              "Team members",
              "Settings",
            ].map((item, index) => (
              <WorkspaceComp index={index} item={item} key={item} />
            ))}
          </aside>

          <div className="min-w-0 p-4 sm:p-5">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs text-slate-500">Monday, October 26</p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  Good morning, Alex 👋
                </h3>
              </div>
              <button className="shrink-0 rounded-lg bg-violet-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-violet-700">
                + New project
              </button>
            </div>

            <div className="mb-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-100 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500">Active projects</p>
                  <Layers3 size={15} className="text-violet-500" />
                </div>
                <p className="mt-3 text-2xl font-bold text-slate-900">24</p>
                <p className="mt-1 text-[10px] text-emerald-600">
                  +12% this month
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500">Tasks completed</p>
                  <Check size={15} className="text-emerald-500" />
                </div>
                <p className="mt-3 text-2xl font-bold text-slate-900">186</p>
                <p className="mt-1 text-[10px] text-emerald-600">
                  +18% this month
                </p>
              </div>
            </div>

            <div className="mb-5 rounded-xl border border-slate-100 p-3">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-800">
                  Weekly productivity
                </p>
                <span className="text-xs text-slate-400">This week</span>
              </div>

              <div className="flex h-24 items-end justify-around gap-2">
                {[40, 65, 48, 85, 60, 95, 72].map((height, index) => (
                  <div
                    key={index}
                    className="w-full rounded-t-md bg-violet-200 transition-colors hover:bg-violet-500"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              <div className="mt-2 flex justify-between text-[10px] text-slate-400">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                  (day) => (
                    <span key={day}>{day}</span>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold text-slate-800">
                Recent tasks
              </h4>
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.title}
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium text-slate-700">
                        {task.title}
                      </p>
                      <p className="mt-1 text-[10px] text-slate-400">
                        {task.team}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2 py-1 text-[9px] font-medium ${task.color}`}
                    >
                      {task.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-xl sm:flex">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
          <Check size={18} />
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-900">
            Project completed
          </p>
          <p className="mt-1 text-[10px] text-slate-500">
            Your team is on track!
          </p>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-28 lg:pt-36">
        <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-100/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-violet-700 shadow-xs">
              <Sparkles size={14} />
              Introducing a smarter way to work
              <ArrowRight size={13} />
            </div>

            <h1 className="max-w-xl text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Your team. Your workflow.{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                One powerful platform.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Bring your projects, people, and insights together. Nexora helps
              modern teams simplify work, collaborate better, and turn big
              ideas into measurable results.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-700"
              >
                Start free trial
                <ArrowRight size={17} />
              </Link>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
              >
                <CirclePlay size={18} />
                Explore features
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-emerald-500" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-emerald-500" />
                Set up in minutes
              </span>
            </div>

            <div className="mt-10 flex items-center gap-4 border-t border-slate-200 pt-6">
              <div className="flex -space-x-3">
                {[
                  "bg-rose-200",
                  "bg-amber-200",
                  "bg-blue-200",
                  "bg-emerald-200",
                ].map((color) => (
                  <div
                    key={color}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white ${color}`}
                  >
                    <Users size={17} className="text-slate-700" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Built for teams that want to do more
                </p>
              </div>
            </div>
          </div>

          <DashboardMockup />
        </div>
      </section>

      {/* Social proof */}
      <section className="border-y border-slate-100 bg-slate-50/70 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
            Trusted by innovative teams worldwide
          </p>

          <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-7 sm:grid-cols-3 lg:grid-cols-5">
            {companies.map((company, index) => (
              <div
                key={company}
                className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-400 transition hover:text-slate-700 sm:text-xl"
              >
                {index % 2 === 0 ? (
                  <Layers3 size={21} />
                ) : (
                  <BarChart3 size={21} />
                )}
                {company}
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-slate-400">
            Illustrative brand names for this demo template.
          </p>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold text-violet-600">
              BUILT FOR BETTER WORK
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Everything you need to move forward
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Spend less time managing tools and more time doing meaningful
              work. Nexora brings your entire workflow into focus.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureComp feature={feature} key={feature.title} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;