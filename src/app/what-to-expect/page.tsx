import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatToExpectFAQ from "@/components/WhatToExpectFAQ";

export const metadata: Metadata = {
  title: "Hotel RFP Automation Onboarding | What to Expect",
  description:
    "Learn how Stitch Hospitality builds your hotel's event inquiry automation workflow, from Brand DNA setup to inbox connection, proposal generation, and go-live.",
  alternates: {
    canonical: "https://www.stitchhospitality.com/what-to-expect",
  },
  openGraph: {
    title: "Hotel RFP Automation Onboarding | What to Expect | Stitch Hospitality",
    description:
      "Learn how Stitch Hospitality builds your hotel's event inquiry automation workflow, from Brand DNA setup to inbox connection, proposal generation, and go-live.",
    url: "https://www.stitchhospitality.com/what-to-expect",
    type: "website",
    siteName: "Stitch Hospitality",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel RFP Automation Onboarding | What to Expect | Stitch Hospitality",
    description:
      "Learn how Stitch Hospitality builds your hotel's event inquiry automation workflow, from Brand DNA setup to inbox connection, proposal generation, and go-live.",
    images: ["/og-image.png"],
  },
};

const FEATURE_CARDS = [
  {
    title: "AI inquiry parsing",
    description:
      "When an RFP or event request hits your inbox, AI reads it and extracts guest name, company, event type, dates, room count, F&B needs, budget, and special requests. No manual data entry.",
    tags: ["Email parsing", "AI extraction", "Automatic"],
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
    title: "Smart routing",
    description:
      "Complete inquiries go straight to proposal generation. Incomplete inquiries trigger a professional clarification email asking the planner for what's missing. No dead-end leads.",
    tags: ["Auto-routing", "Clarification emails", "Lead qualification"],
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
          d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
    ),
  },
  {
    title: "Branded proposal generation",
    description:
      "Using your hotel's Brand DNA — your voice, imagery, rates, meeting space details, and F&B options — the system builds a polished, multi-section proposal and delivers it to the prospect.",
    tags: ["Brand DNA", "Gamma AI", "Custom proposals"],
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
    title: "Lead database logging",
    description:
      "Every inquiry is stored in your database with full details — contact info, event specs, confidence score, status, and proposal link. Searchable pipeline with zero manual entry.",
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

const HANDLE_ITEMS = [
  "Set up and host your automation platform",
  "Provision and connect your database",
  "Configure AI parsing for your property type",
  "Build and test branded proposal templates",
  "Connect your hotel's email for sending",
  "Run test inquiries before anything goes live",
  "Monitor your automation daily after launch",
  "Fix issues and apply updates as needed",
];

const STEPS = [
  {
    number: "01",
    title: "Kickoff call",
    description:
      "We walk through the Brand DNA spreadsheet together, answer questions, and get your email access configured. You complete the spreadsheet after the call.",
    duration: "Day 1",
  },
  {
    number: "02",
    title: "Build & test",
    description:
      "We build your workflow, connect all services, and test with sample RFP data. You'll see example proposals and clarification emails before anything goes live.",
    duration: "Days 2–10",
  },
  {
    number: "03",
    title: "Go live",
    description:
      "We activate the workflow on your production inbox. We monitor closely for the first week and fine-tune the AI based on your real inquiries.",
    duration: "Days 11–14",
  },
  {
    number: "04",
    title: "Ongoing support",
    description:
      "Our team monitors your automation daily. If something breaks, we fix it. If your rates change or you add a new event space, let us know and we update the Brand DNA.",
    duration: "Ongoing",
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

const whatToExpectJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.stitchhospitality.com/" },
      { "@type": "ListItem", position: 2, name: "What to Expect", item: "https://www.stitchhospitality.com/what-to-expect" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need any technical skills?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. You fill in a spreadsheet and give us email access. We handle all the technical setup, hosting, and maintenance.",
        },
      },
      {
        "@type": "Question",
        name: "What if I need to update my rates or add a new event space?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Just let us know. Rate changes, new room types, updated photos — we handle the Brand DNA updates as part of your monthly support.",
        },
      },
      {
        "@type": "Question",
        name: "How long does the Brand DNA spreadsheet take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "About an hour. We provide a pre-formatted template with example data so you know exactly what goes where. We walk through it together on the kickoff call.",
        },
      },
      {
        "@type": "Question",
        name: "Can I see a demo before I commit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Book a free consultation and we'll show you a live demo with real hotel data — you'll see exactly how inquiries get parsed and proposals get generated.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if something breaks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We monitor daily. If a workflow fails or an email doesn't send, we catch it and fix it — usually before your team even notices.",
        },
      },
      {
        "@type": "Question",
        name: "Can I cancel the monthly support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, anytime. If you cancel, we transfer the workflow and credentials to you. You own everything we built — there's no lock-in.",
        },
      },
    ],
  },
];

export default function WhatToExpectPage() {
  return (
    <>
      {whatToExpectJsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
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
                Your Onboarding Guide
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl text-[#071f1b] leading-[1.08] mb-6">
              What Happens After You Buy Event Inquiry Automation
            </h1>
            <p className="text-lg text-[#071f1b]/60 font-light leading-relaxed max-w-2xl mx-auto">
              Here&apos;s exactly what happens after you purchase the Event Inquiry
              Automation — and what we need from you to get started.
            </p>
          </div>
        </section>

        {/* Section 1: What We Build For You */}
        <section className="py-28 bg-[#fafaf7]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-xl mb-16">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
                  What We Build For You
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-[#071f1b]">
                A complete AI-powered RFP workflow — installed, hosted, and monitored
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
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
          </div>
        </section>

        {/* Section 2: What You Provide */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
                  What You Provide
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-[#071f1b]">
                Two things. That&apos;s it.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  number: "01",
                  title: "Your Brand DNA",
                  description:
                    "We send you a spreadsheet template. You fill in your hotel's details — property info, brand voice, room rates, meeting space pricing, F&B options, and links to your property photos. Takes about an hour. We walk you through it on the kickoff call.",
                },
                {
                  number: "02",
                  title: "Email access",
                  description:
                    "We need the ability to send from your hotel's email address so automated responses come from your team, not ours. We'll set this up together during onboarding.",
                },
              ].map((item) => (
                <div key={item.number}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-heading text-6xl text-[#071f1b]/10">
                      {item.number}
                    </span>
                    <div className="w-px h-10 bg-[#ff6464]/40" />
                  </div>
                  <h3 className="text-2xl text-[#071f1b] mb-4">{item.title}</h3>
                  <p className="text-sm text-[#071f1b]/60 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: What We Handle */}
        <section className="py-28 bg-[#fafaf7]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
                  <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
                    What We Handle
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl text-[#071f1b]">
                  Everything else is on us
                </h2>
              </div>
              <ul className="mt-12 lg:mt-0 flex flex-col gap-4">
                {HANDLE_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm text-[#071f1b]/70 font-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: How It Works */}
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
                  The Process
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-white mb-6">
                From kickoff to live in under three weeks
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {STEPS.map((step, i) => (
                <div key={step.number} className="relative">
                  {i < STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent -translate-x-1/2 z-0" />
                  )}
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-heading text-6xl text-white/10">
                        {step.number}
                      </span>
                      <div className="w-px h-10 bg-[#ff6464]/40" />
                      <span className="text-xs font-medium text-[#ff6464] tracking-wider uppercase">
                        {step.duration}
                      </span>
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

        {/* Section 5: What It Costs */}
        <section className="py-28 bg-[#fafaf7]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
                  Pricing
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-[#071f1b]">
                Simple pricing, no surprises
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="p-8 bg-white rounded-2xl border border-[#e5e3db]">
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190] mb-3 block">
                  One-time setup
                </span>
                <p className="font-heading text-6xl text-[#071f1b] mb-4">
                  $2,500
                </p>
                <p className="text-sm text-[#071f1b]/60 font-light leading-relaxed">
                  Workflow built, configured, tested, and deployed for your
                  property.
                </p>
              </div>
              <div className="p-8 bg-white rounded-2xl border-2 border-[#ff6464]/25 shadow-lg shadow-[#ff6464]/8">
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190] mb-3 block">
                  Managed hosting &amp; support
                </span>
                <p className="font-heading text-6xl text-[#071f1b] mb-4">
                  $99
                  <span className="font-heading text-2xl text-[#071f1b]/40">
                    /mo
                  </span>
                </p>
                <p className="text-sm text-[#071f1b]/60 font-light leading-relaxed">
                  We host, monitor, and maintain your automation. No other
                  subscriptions, no other accounts, no other fees.
                </p>
              </div>
            </div>

            <p className="text-center text-sm text-[#071f1b]/40 font-light mb-12">
              That&apos;s it. No hidden costs, no extra software to buy, no technical
              skills required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://buy.stripe.com/cNi7sK0ZM67jcCcgvp6J200"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#ff6464] hover:bg-[#e54d4d] text-white font-medium px-7 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#ff6464]/25 hover:-translate-y-0.5"
              >
                Get started
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

        {/* Section 6: FAQ */}
        <section className="py-28 bg-white">
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
            <div className="bg-[#fafaf7] rounded-2xl border border-[#e5e3db] px-8 py-2">
              <WhatToExpectFAQ />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
