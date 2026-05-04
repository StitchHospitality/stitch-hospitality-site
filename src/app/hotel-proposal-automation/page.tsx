import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hotel Proposal Automation for Group Sales",
  description:
    "Automate hotel proposal creation with Brand DNA-driven workflows. Pull rates, meeting space, F&B, and imagery into polished proposals — in minutes, not hours.",
  alternates: {
    canonical: "https://www.stitchhospitality.com/hotel-proposal-automation",
  },
  openGraph: {
    title: "Hotel Proposal Automation for Group Sales | Stitch Hospitality",
    description:
      "Automate hotel proposal creation with Brand DNA-driven workflows. Pull rates, meeting space, F&B, and imagery into polished proposals — in minutes, not hours.",
    url: "https://www.stitchhospitality.com/hotel-proposal-automation",
    type: "website",
    siteName: "Stitch Hospitality",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Proposal Automation for Group Sales | Stitch Hospitality",
    description:
      "Automate hotel proposal creation with Brand DNA-driven workflows. Pull rates, meeting space, F&B, and imagery into polished proposals — in minutes, not hours.",
    images: ["/og-image.png"],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.stitchhospitality.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Hotel Proposal Automation",
      item: "https://www.stitchhospitality.com/hotel-proposal-automation",
    },
  ],
};

const PROPOSAL_DATA = [
  { label: "Room rates", detail: "Current rates by room type, seasonal adjustments, and group discounts" },
  { label: "Room types", detail: "Room descriptions, amenities, and availability windows" },
  { label: "Meeting space specs", detail: "Room names, square footage, capacity by setup style, AV included" },
  { label: "F&B menus", detail: "Breakfast, breaks, lunch, receptions, dinner options and pricing" },
  { label: "Property imagery", detail: "Hosted photos of rooms, event spaces, F&B, and property exterior" },
  { label: "Brand voice", detail: "Tone, terminology, and messaging that matches your hotel's identity" },
];

export default function HotelProposalAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Nav />
      <main>
        {/* Hero */}
        <section className="pt-36 pb-20 bg-[#fafaf7] relative overflow-hidden">
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
                Hotel Proposal Automation
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl text-[#071f1b] leading-[1.08] mb-6">
              Hotel Proposal Automation for Group Sales Teams
            </h1>
            <p className="text-lg text-[#071f1b]/60 font-light leading-relaxed max-w-2xl mx-auto mb-10">
              Custom workflows that pull your hotel&apos;s rates, meeting space
              specs, F&amp;B options, and imagery into polished proposal drafts —
              in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#intake-form"
                className="inline-flex items-center justify-center gap-2 bg-[#ff6464] hover:bg-[#e54d4d] text-white font-medium px-7 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#ff6464]/25 hover:-translate-y-0.5"
              >
                Let&apos;s Build Your RFP Workflow
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="https://calendly.com/stitchhospitality/hotelcomply-call-clone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#071f1b]/20 text-[#071f1b] hover:border-[#071f1b]/40 hover:bg-[#071f1b]/5 font-medium px-7 py-4 rounded-full transition-all duration-200"
              >
                Book a free consultation
              </a>
            </div>
          </div>
        </section>

        {/* Why proposals take too long */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
                  <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
                    The Problem
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl text-[#071f1b] mb-6">
                  Why hotel proposals take too long
                </h2>
                <p className="text-[#071f1b]/60 font-light leading-relaxed mb-6">
                  Every proposal starts the same way — someone opens a blank
                  document or last month&apos;s proposal and starts copying rates,
                  pulling photos, rewriting the same sentences about your meeting
                  space, and hunting for the current F&amp;B pricing.
                </p>
                <p className="text-[#071f1b]/60 font-light leading-relaxed mb-6">
                  It&apos;s not skilled work. It&apos;s repetitive data assembly — and
                  it takes an hour or more per proposal when your DOS has real
                  relationships to manage.
                </p>
                <p className="text-[#071f1b]/60 font-light leading-relaxed">
                  Proposal automation replaces that assembly work. The workflow
                  pulls the data, populates the template, and delivers a polished
                  draft — ready for your team to review and personalize.
                </p>
              </div>
              <div className="mt-12 lg:mt-0 space-y-3">
                {[
                  "Copying rates from a spreadsheet into a Word document",
                  "Hunting for the right room photos in a shared drive",
                  "Rewriting the same F&B section for the 40th time",
                  "Reformatting layout after pasting from last month's proposal",
                  "Checking whether the rates in the template are still current",
                  "Sending a proposal that looks different from the last one",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 bg-[#fafaf7] rounded-xl border border-[#e5e3db]">
                    <div className="w-5 h-5 rounded-full bg-[#ff6464]/10 border border-[#ff6464]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#ff6464]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-sm text-[#071f1b]/70 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What can be pulled automatically */}
        <section className="py-28 bg-[#fafaf7]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
                  What Gets Pulled
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-[#071f1b] mb-6">
                What proposal data can be pulled automatically
              </h2>
              <p className="text-[#071f1b]/60 font-light max-w-xl mx-auto leading-relaxed">
                Every piece of hotel-specific data stored in your Brand DNA profile
                is available to the proposal generation workflow.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROPOSAL_DATA.map((item) => (
                <div key={item.label} className="p-8 bg-white rounded-2xl border border-[#e5e3db]">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4">
                    <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-lg text-[#071f1b] mb-2">{item.label}</h3>
                  <p className="text-sm text-[#071f1b]/50 font-light leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand DNA */}
        <section className="py-28 bg-[#071f1b] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ff6464]/5 blur-3xl pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-white/40">
                Brand DNA
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Your hotel&apos;s identity powers every proposal
            </h2>
            <p className="text-white/60 font-light leading-relaxed text-lg mb-8">
              Brand DNA is a structured profile of your hotel — built during
              onboarding by filling out a spreadsheet template. It contains your
              property details, brand voice, rate structures, meeting space specs,
              F&amp;B options, and links to hosted imagery.
            </p>
            <p className="text-white/60 font-light leading-relaxed text-lg mb-8">
              The proposal generation workflow reads from this profile every time
              it builds a draft. That means every proposal uses your current rates,
              your imagery, and your voice — not a stale template from six months ago.
            </p>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-white font-medium mb-2">What Brand DNA includes</p>
              <div className="grid sm:grid-cols-2 gap-2 mt-4">
                {[
                  "Property name, address, and key differentiators",
                  "Brand voice guidelines and sample language",
                  "Room types, descriptions, and current rates",
                  "Meeting space names, dimensions, and capacity",
                  "F&B menus, pricing, and minimums",
                  "Links to hosted imagery by category",
                  "Key contacts and response protocols",
                  "Special packages and seasonal offers",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff6464] shrink-0" />
                    <span className="text-white/60 font-light text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Draft vs auto-send */}
        <section className="py-28 bg-[#fafaf7]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
                  <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
                    Human-in-the-Loop
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl text-[#071f1b] mb-6">
                  Proposal draft, not auto-send
                </h2>
                <p className="text-[#071f1b]/60 font-light leading-relaxed mb-6">
                  The workflow generates a proposal draft. Your sales team reviews
                  it before it goes to the planner. That review step is intentional
                  — it&apos;s where your team adds the personal touch, adjusts pricing
                  for a specific relationship, or catches anything the AI missed.
                </p>
                <p className="text-[#071f1b]/60 font-light leading-relaxed">
                  The workflow handles the 60 minutes of assembly. Your team
                  handles the 5 minutes of relationship-aware review. That&apos;s
                  the right division of labor.
                </p>
              </div>
              <div className="mt-12 lg:mt-0 p-8 bg-white rounded-2xl border-2 border-[#ff6464]/20 shadow-xl shadow-[#ff6464]/8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-[#ff6464] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-medium text-[#071f1b]">What you review before sending</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Rate accuracy for this specific inquiry",
                    "Meeting space match to the event type",
                    "F&B selections and minimums",
                    "Proposal tone for this client",
                    "Any custom packages or accommodations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#f2f1ec] border border-[#e5e3db] flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#071f1b]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-sm text-[#071f1b]/70 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* When each approach is better */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
                  Honest Positioning
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-[#071f1b]">
                When to use a custom workflow vs. a proposal platform
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-[#fafaf7] rounded-2xl border border-[#e5e3db]">
                <h3 className="text-2xl text-[#071f1b] mb-6">
                  A dedicated proposal platform is better when&hellip;
                </h3>
                <ul className="space-y-4">
                  {[
                    "You need interactive proposals with e-signatures built in",
                    "Your team wants a visual proposal editor with drag-and-drop",
                    "You need direct PMS integration for live inventory pulls",
                    "You require a full sales CRM alongside proposal generation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8b9190] shrink-0" />
                      <span className="text-sm text-[#071f1b]/60 font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#8b9190] font-light mt-6">
                  Tools like Proposales, Cvent, or Delphi may be a better fit in those cases.
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl border-2 border-[#ff6464]/20 shadow-lg shadow-[#ff6464]/5">
                <h3 className="text-2xl text-[#071f1b] mb-6">
                  A custom workflow is better when&hellip;
                </h3>
                <ul className="space-y-4">
                  {[
                    "You want parsing + qualification + proposal in one owned workflow",
                    "You don't want to pay a monthly SaaS fee for a tool your team won't fully use",
                    "You want control over every step — and to own the workflow outright",
                    "Your current stack works fine; you just need the admin work automated",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff6464] shrink-0" />
                      <span className="text-sm text-[#071f1b]/70 font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#ff6464] font-medium mt-6">
                  Built in n8n, so your hotel owns the workflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 bg-[#ff6464] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Stop building proposals from scratch
            </h2>
            <p className="text-white/75 text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed">
              Let the workflow do the assembly. Your team focuses on the relationship.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#intake-form"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#ff6464] hover:bg-[#fff4f4] font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#071f1b]/20 hover:-translate-y-0.5"
              >
                Let&apos;s Build Your RFP Workflow
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="https://calendly.com/stitchhospitality/hotelcomply-call-clone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white hover:border-white/70 hover:bg-white/10 font-medium px-8 py-4 rounded-full transition-all duration-200"
              >
                Book a free consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
