import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PricingFAQ from "@/components/PricingFAQ";

export const metadata: Metadata = {
  title: "Event Inquiry Automation — $2,500 | Stitch Hospitality",
  description:
    "AI-powered event inquiry automation for hotel sales teams. Parse RFPs, generate branded proposals, and respond in minutes instead of hours. One-time $2,500 setup.",
  alternates: {
    canonical: "https://www.stitchhospitality.com/pricing",
  },
};

const FEATURE_CARDS = [
  {
    title: "AI-powered RFP parsing",
    description:
      "Incoming inquiries from email, Cvent, or your website are instantly parsed by AI. Event name, dates, guest count, room block, F&B needs, and budget — extracted and structured automatically, regardless of how the planner formatted the request.",
    tags: ["Email parsing", "Cvent compatible", "AI extraction"],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    title: "Branded proposal generation",
    description:
      "Every proposal is built from your hotel's Brand DNA — your voice, your images, your rate structures. Generated through Gamma AI with your property's Dropbox-hosted visuals. Proposals look like your sales team spent an hour on them.",
    tags: ["Brand DNA", "Gamma AI", "Auto-populate"],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    title: "Smart clarification routing",
    description:
      "When an inquiry is missing critical details — no dates, unclear room count, vague budget — the system automatically sends a professional clarification email to the planner. No dead-end leads, no guesswork.",
    tags: ["Auto-email", "Missing data detection", "Smart routing"],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
        />
      </svg>
    ),
  },
  {
    title: "Lead database logging",
    description:
      "Every inquiry — whether it converts or not — is logged in your Supabase database with full details. Build a searchable pipeline of leads, track response times, and never lose a piece of business to a missed email again.",
    tags: ["Supabase", "Pipeline tracking", "Zero manual entry"],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
  },
];

const CHECKLIST = [
  "Full n8n workflow — installed and configured",
  "Brand DNA setup with your hotel's voice and imagery",
  "AI parsing calibrated to your property type",
  "Branded proposal templates via Gamma",
  "Supabase database provisioned and connected",
  "Email clarification path configured",
  "Complete onboarding walkthrough",
  "30 days of post-launch support",
];

const ROI_STATS = [
  {
    value: "6 hrs",
    label: "Per week reclaimed",
    description:
      "Average weekly time your DOS spends on RFP responses — reclaimed.",
  },
  {
    value: "72%",
    label: "First-responder wins",
    description:
      "Of group deals go to the first hotel to respond with a complete proposal.",
  },
  {
    value: "10 wks",
    label: "Typical payback period",
    description:
      "Based on time savings alone at ~$45/hr DOS rate.",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "We onboard your hotel",
    description:
      "Fill in your Brand DNA — voice, rates, images, property details. Takes about an hour.",
  },
  {
    number: "02",
    title: "We build your workflow",
    description:
      "Your n8n automation is configured, tested with real RFP data, and deployed to your instance.",
  },
  {
    number: "03",
    title: "Connect your inbox",
    description:
      "Point your RFP email, Cvent feed, or website form to the webhook. Inquiries start flowing.",
  },
  {
    number: "04",
    title: "Proposals go out",
    description:
      "Every qualified inquiry gets a branded proposal in minutes. Your team reviews and sends.",
  },
];

function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
      <svg
        className="w-3 h-3 text-emerald-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ── Hero ── */}
        <section className="pt-36 pb-16 bg-[#fafaf7] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #071f1b 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#ff6464]/5 blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
                Event Inquiry Automation
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl text-[#071f1b] leading-[1.08] mb-6">
              Stop losing group business to slow RFP responses
            </h1>
            <p className="text-lg text-[#071f1b]/60 font-light leading-relaxed max-w-2xl mx-auto">
              AI parses every inbound inquiry, matches it against your
              hotel&apos;s Brand DNA, and generates a branded proposal in
              minutes — not hours.
            </p>
          </div>
        </section>

        {/* ── Two-column: features + pricing card ── */}
        <section className="py-16 bg-[#fafaf7]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-[1fr_400px] lg:gap-12 xl:gap-16 items-start">
              {/* Left: feature cards */}
              <div className="flex flex-col gap-6">
                {FEATURE_CARDS.map((card) => (
                  <div
                    key={card.title}
                    className="group p-8 bg-white rounded-2xl border border-[#e5e3db] hover:border-[#ff6464]/30 hover:shadow-lg hover:shadow-[#ff6464]/5 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#fafaf7] border border-[#e5e3db] flex items-center justify-center mb-6 text-[#071f1b] group-hover:bg-[#ff6464] group-hover:border-[#ff6464] group-hover:text-white transition-all duration-300">
                      {card.icon}
                    </div>
                    <h3 className="text-xl text-[#071f1b] mb-3 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#071f1b]/60 leading-relaxed font-light mb-6">
                      {card.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-[#f2f1ec] text-[#071f1b]/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: sticky pricing card */}
              <div className="mt-8 lg:mt-0 lg:sticky lg:top-28">
                <div className="bg-white rounded-2xl border-2 border-[#ff6464]/25 shadow-xl shadow-[#ff6464]/8 p-8">
                  <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190] mb-3 block">
                    One-time setup
                  </span>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-heading text-6xl text-[#071f1b]">
                      $2,500
                    </span>
                  </div>
                  <p className="text-sm text-[#071f1b]/50 font-light mb-8">
                    No monthly fees. You own it.
                  </p>

                  <ul className="flex flex-col gap-3 mb-8">
                    {CHECKLIST.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-sm text-[#071f1b]/70 font-light leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-[#e5e3db] pt-6 flex flex-col gap-4">
                    <a
                      href="https://buy.stripe.com/cNi7sK0ZM67jcCcgvp6J200"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#ff6464] hover:bg-[#e54d4d] text-white font-medium px-7 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#ff6464]/25 hover:-translate-y-0.5 text-center"
                    >
                      Get started — $2,500
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                    <p className="text-xs text-center text-[#8b9190] font-light">
                      Secure payment via Stripe
                    </p>
                    <a
                      href="https://calendly.com/stitchhospitality/hotelcomply-call-clone"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-center text-[#071f1b]/50 hover:text-[#ff6464] transition-colors font-light"
                    >
                      Or book a free consultation first
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ROI metrics ── */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
                  The ROI
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-[#071f1b] mb-6">
                The numbers that make this a no-brainer
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {ROI_STATS.map((stat) => (
                <div
                  key={stat.value}
                  className="p-8 rounded-2xl border border-[#e5e3db] bg-[#fafaf7] text-center group hover:border-[#ff6464]/30 hover:bg-[#fff4f4] transition-all duration-300"
                >
                  <p className="font-heading text-5xl lg:text-6xl text-[#071f1b] mb-2 group-hover:text-[#ff6464] transition-colors">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-[#071f1b] mb-3">
                    {stat.label}
                  </p>
                  <p className="text-xs text-[#071f1b]/50 font-light leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="py-28 bg-[#071f1b] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ff6464]/5 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-white/40">
                  How It Works
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-white mb-6">
                Live in under a week
              </h2>
              <p className="text-white/50 font-light max-w-lg mx-auto leading-relaxed">
                A focused, four-step process designed to get your hotel
                automated and responding to inquiries fast.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {HOW_IT_WORKS_STEPS.map((step, i) => (
                <div key={step.number} className="relative">
                  {i < HOW_IT_WORKS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent -translate-x-1/2 z-0" />
                  )}
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-heading text-6xl text-white/10">
                        {step.number}
                      </span>
                      <div className="w-px h-10 bg-[#ff6464]/40" />
                    </div>
                    <h3 className="text-2xl text-white mb-4">{step.title}</h3>
                    <p className="text-white/50 font-light leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-28 bg-[#fafaf7]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
                  FAQ
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-[#071f1b]">
                Common questions
              </h2>
            </div>
            <div className="bg-white rounded-2xl border border-[#e5e3db] px-8 py-2">
              <PricingFAQ />
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-28 bg-[#ff6464] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#071f1b]/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Ready to automate your RFP response?
            </h2>
            <p className="text-white/75 text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed">
              Get the Event Inquiry Automation installed and running for your
              property in under a week.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://buy.stripe.com/cNi7sK0ZM67jcCcgvp6J200"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#ff6464] hover:bg-[#fff4f4] font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#071f1b]/20 hover:-translate-y-0.5"
              >
                Get started — $2,500
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="https://calendly.com/stitchhospitality/hotelcomply-call-clone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white hover:border-white/70 hover:bg-white/10 font-medium px-8 py-4 rounded-full transition-all duration-200"
              >
                Book a free consultation
              </a>
            </div>

            <p className="text-white/50 text-sm font-light">
              No commitment required &nbsp;·&nbsp; Live in under one week
              &nbsp;·&nbsp; You own everything
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
