
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";

import {initialFormData} from "../Data/Contact"
import type {ContactFormData} from "../Types/Contact"

function Contact() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("Submit successfully!");

    setFormData(initialFormData);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative px-4 pb-12 pt-32 sm:px-6 sm:pt-36 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-12 -z-0 h-72 w-[min(90%,650px)] -translate-x-1/2 rounded-full bg-violet-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
            <MessageSquare size={26} />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-violet-600">
            Contact us
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Let's start a{" "}
            <span className="bg-linear-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
              conversation.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Have a question, an idea, or need help? We'd love to hear from you.
            Send us a message and take the first step toward working together.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Information */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
              Get in touch
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              We're here to help.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Whether you want to learn more about Nexora, discuss a potential
              partnership, or ask a question, use the form and tell us what you
              have in mind.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                <Mail size={21} />
              </div>

              <h3 className="mt-4 font-semibold text-slate-900">
                Send us a message
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Fill out the form with your details and a message describing
                how we can help.
              </p>
            </div>

            <div className="mt-5 flex items-start gap-3">
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-emerald-500"
              />

              <p className="text-sm leading-6 text-slate-600">
                All fields are clearly labeled, and required information is
                validated before submission.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-9">
            <div className="mb-7">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Send us a message
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Complete the form below. Fields marked with * are required.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Subject *
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your message about?"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Your message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200"
              >
                Submit Message
                <Send size={17} />
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                This demo form displays a success alert. It does not send or
                store messages on a server.
              </p>
            </form>
          </div>
        </div>
      </section>

     
    </main>
  );
}

export default Contact;
