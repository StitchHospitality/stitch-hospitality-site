import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hotel RFP Automation for Independent Hotels",
  description:
    "Automate hotel RFP responses with custom n8n workflows. Parse event inquiries, score leads, generate proposals, and log every detail — faster than any manual process.",
  alternates: {
    canonical: "https://www.stitchhospitality.com/hotel-rfp-automation",
  },
  openGraph: {
    title: "Hotel RFP Automation for Independent Hotels | Stitch Hospitality",
    description:
      "Automate hotel RFP responses with custom n8n workflows. Parse event inquiries, score leads, generate proposals, and log every detail — faster than any manual process.",
    url: "https://www.stitchhospitality.com/hotel-rfp-automation",
    type: "website",
    siteName: "Stitch Hospitality",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel RFP Automation for Independent Hotels | Stitch Hospitality",
    description:
      "Automate hotel RFP responses with custom n8n workflows. Parse event inquiries, score leads, generate proposals, and log every detail — faster than any manual process.",
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
      name: "Hotel RFP Automation",
      item: "https://www.stitchhospitality.com/hotel-rfp-automation",
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is hotel RFP automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hotel RFP automation uses software workflows to read inbound event inquiries, extract key details, identify missing information, route the next action, and help the sales team respond faster.",
      },
    },
    {
      "@type": "Question",
      name: "Does this replace my sales team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. It automates repetitive admin steps so the sales team can spend more time with planners and qualified opportunities.",
      },
    },
    {
      "@type": "Question",
      name: "Can this work with Cvent inquiries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stitch can parse inquiry details from email notifications, web forms, and structured inputs. Direct Cvent integration depends on the hotel's current setup and access.",
      },
    },
    {
      "@type": "Question",
      name: "Is this a proposal software platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Stitch builds custom workflows that can generate proposal drafts and connect with the tools your hotel already uses.",
      },
    },
    {
      "@type": "Question",
      name: "How long does setup take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most hotels are live within three weeks of the kickoff call.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical skills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. You fill in one spreadsheet with your hotel's details. We handle everything else.",
      },
    },
  ],
};

const STEPS = [
  {
    number: "01",
    title: "What hotel RFP automation does",
    description:
      "It's a workflow system that reads inbound event inquiries, extracts key details — dates, room block, attendee count, meeting space, F&B, budget, contact info — identifies what's missing, and routes the next action automatically. No manual triage. No spreadsheet updates. No copy-paste.",
  },
  {
    number: "02",
    title: "How inbound inquiries are parsed",
    description:
      "AI reads raw inquiry emails, web form submissions, and forwarded Cvent notifications. It handles messy, inconsistent planner formatting — whether a planner writes a paragraph or a bulleted list, the workflow extracts what it needs and structures the data.",
  },
  {
    number: "03",
    title: "What gets scored",
    description:
      "Every parsed inquiry is scored for completeness: does it have firm dates, a room count, a budget signal, and valid contact info? The score determines routing. High-confidence inquiries move to proposal generation. Low-confidence inquiries trigger a clarification request.",
  },
  {
    number: "04",
    title: "What happens when details are missing",
    description:
      "When an inquiry lacks critical information, the workflow sends a professional, branded clarification email automatically — asking the planner exactly what's needed before the hotel invests time in a proposal. No dead-end leads.",
  },
  {
    number: "05",
    title: "How proposals are generated",
    description:
      "For complete inquiries, the workflow pulls from your hotel's Brand DNA profile — your rates, meeting space specs, F&B options, imagery, and brand voice — and generates a polished, multi-section proposal draft. Ready for your team to review in minutes.",
  },
  {
    number: "06",
    title: "What your team reviews before sending",
    description:
      "Proposals are drafted, not auto-sent. Your sales team reviews every proposal before it goes to the planner. The workflow handles the admin; your people handle the relationship. Human-in-the-loop by design.",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is hotel RFP automation?",
    answer:
      "Hotel RFP automation uses software workflows to read inbound event inquiries, extract key details, identify missing information, route the next action, and help the sales team respond faster.",
  },
  {
    question: "Does this replace my sales team?",
    answer:
      "No. It automates repetitive admin steps so the sales team can spend more time with planners and qualified opportunities.",
  },
  {
    question: "Can this work with Cvent inquiries?",
    answer:
      "Stitch can parse inquiry details from email notifications, web forms, and structured inputs. Direct Cvent integration depends on the hotel's current setup and access.",
  },
  {
    question: "Is this a proposal software platform?",
    answer:
      "No. Stitch builds custom workflows that can generate proposal drafts and connect with the tools your hotel already uses.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most hotels are live within three weeks of the kickoff call.",
  },
  {
    question: "Do I need technical skills?",
    answer:
      "No. You fill in one spreadsheet with your hotel's details. We handle everything else.",
  },
];

export default function HotelRfpAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
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
                Hotel RFP Automation
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl text-[#071f1b] leading-[1.08] mb-6">
              Hotel RFP Automation That Responds Before Competitors Finish Reading
            </h1>
            <p className="text-lg text-[#071f1b]/60 font-light leading-relaxed max-w-2xl mx-auto mb-10">
              Custom n8n workflows that read inbound event inquiries, extract the
              details, qualify the lead, generate a branded proposal, and log
              everything — before your sales team opens their inbox.
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

        {/* How It Works — 6 steps */}
        <section className="py-28 bg-[#fafaf7]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-xl mb-16">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
                  How It Works
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-[#071f1b]">
                From inquiry to logged lead — fully automated
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {STEPS.map((step) => (
                <div
                  key={step.number}
                  className="p-8 bg-white rounded-2xl border border-[#e5e3db]"
                >
                  <span className="font-heading text-5xl text-[#071f1b]/8 block mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-xl text-[#071f1b] mb-3">{step.title}</h3>
                  <p className="text-sm text-[#071f1b]/60 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What gets extracted */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
                  <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
                    What Gets Extracted
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl text-[#071f1b] mb-6">
                  Every detail that matters to your sales team
                </h2>
                <p className="text-[#071f1b]/60 font-light leading-relaxed mb-8">
                  When a planner sends an inquiry, the workflow extracts dates,
                  room block, attendee count, meeting space needs, F&amp;B
                  requirements, budget, contact information, and missing details.
                  Complete inquiries move forward. Incomplete inquiries trigger a
                  clarification email.
                </p>
              </div>
              <ul className="mt-12 lg:mt-0 grid grid-cols-2 gap-3">
                {[
                  "Event dates",
                  "Room block size",
                  "Attendee count",
                  "Meeting space needs",
                  "F&B requirements",
                  "Budget signal",
                  "Contact information",
                  "Special requests",
                  "Event type",
                  "Completeness score",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 p-4 bg-[#fafaf7] rounded-xl border border-[#e5e3db]"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-sm text-[#071f1b]/70 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Human in the loop callout */}
        <section className="py-28 bg-[#071f1b] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ff6464]/5 blur-3xl pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-white/40">
                Human-in-the-Loop
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Proposals are drafted, not auto-sent
            </h2>
            <p className="text-white/60 font-light leading-relaxed text-lg max-w-2xl mx-auto">
              Every proposal goes to your sales team for review before it reaches
              the planner. The workflow eliminates the admin. Your team keeps the
              relationship. That&apos;s the right balance.
            </p>
          </div>
        </section>

        {/* FAQ */}
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
            <div className="bg-white rounded-2xl border border-[#e5e3db] px-8 py-2 divide-y divide-[#e5e3db]">
              {FAQ_ITEMS.map((item) => (
                <details key={item.question} className="group py-1">
                  <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none">
                    <span className="text-[#071f1b] font-medium group-hover:text-[#ff6464] transition-colors">
                      {item.question}
                    </span>
                    <span className="shrink-0 w-6 h-6 rounded-full border border-[#e5e3db] flex items-center justify-center text-[#8b9190] group-hover:border-[#ff6464]/40 group-hover:text-[#ff6464] transition-all duration-200">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </span>
                  </summary>
                  <div className="pb-5">
                    <p className="text-sm text-[#071f1b]/60 font-light leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
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
              Ready to automate your RFP response?
            </h2>
            <p className="text-white/75 text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed">
              Most hotels are live within three weeks. You fill in one spreadsheet.
              We handle everything else.
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
