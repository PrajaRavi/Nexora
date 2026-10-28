import {
  ArrowRight,
  Compass,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-12 -z-10 h-80 w-[min(90%,700px)] -translate-x-1/2 rounded-full bg-violet-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
            <Sparkles size={27} />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-violet-600">
            About Nexora
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.15]">
            We make teamwork feel{" "}
            <span className="bg-linear-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
              effortless.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Work should move ideas forward, not slow them down. Nexora brings
            people, projects, and processes together in one workspace so teams
            can focus on what matters most.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              Explore our services
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Brand overview */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
              Our story
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Great work happens when everything works together.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Modern teams use dozens of tools to plan projects, share
                updates, manage tasks, and understand results. When those tools
                don't work together, valuable time gets lost.
              </p>

              <p>
                Nexora is built around a simple idea: bring essential workflows
                into one connected experience. We want teams to spend less
                time managing their tools and more time making progress.
              </p>

              <p>
                Whether you're an individual building something new or a team
                working toward a shared goal, our aim is to make your work
                clearer, more organized, and easier to move forward.
              </p>
            </div>

            <Link
              to="/services"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition hover:text-violet-700"
            >
              Discover what we do
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-100 via-indigo-50 to-blue-100 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-9">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    The Nexora approach
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    A better way to work together
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                  <Compass size={21} />
                </div>
              </div>

              <div className="mt-7 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl bg-violet-50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                    <Target size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Clear direction
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Keep goals, priorities, and next steps visible to
                      everyone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-blue-50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Users size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Connected teams
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Give people a shared space to communicate and
                      collaborate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-emerald-50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <Zap size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Meaningful progress
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Reduce unnecessary friction and make room for important
                      work.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 p-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <p className="text-sm font-medium text-slate-700">
                    One team. One direction. Better work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;