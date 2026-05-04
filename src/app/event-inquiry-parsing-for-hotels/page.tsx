import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Event Inquiry Parsing for Hotels",
  description:
    "AI-powered event inquiry parsing for hotel sales teams. Extract dates, room blocks, F&B needs, and budget from messy RFP emails — automatically.",
  alternates: {
    canonical: "https://www.stitchhospitality.com/event-inquiry-parsing-for-hotels",
  },
  openGraph: {
    title: "Event Inquiry Parsing for Hotels | Stitch Hospitality",
    description:
      "AI-powered event inquiry parsing for hotel sales teams. Extract dates, room blocks, F&B needs, and budget from messy RFP emails — automatically.",
    url: "https://www.stitchhospitality.com/event-inquiry-parsing-for-hotels",
    type: "website",
    siteName: "Stitch Hospitality",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Inquiry Parsing for Hotels | Stitch Hospitality",
    description:
      "AI-powered event inquiry parsing for hotel sales teams. Extract dates, room blocks, F&B needs, and budget from messy RFP emails — automatically.",
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
      name: "Event Inquiry Parsing",
      item: "https://www.stitchhospitality.com/event-inquiry-parsing-for-hotels",
    },
  ],
};

const EXTRACTED_FIELDS = [
  { label: "Event dates", detail: "Firm dates, tentative dates, or date ranges" },
  { label: "Room block", detail: "Number of rooms, room types requested" },
  { label: "Attendee count", detail: "Total attendees, peak night occupancy" },
  { label: "Meeting space", detail: "Session rooms, square footage, setup style" },
  { label: "F&B requirements", detail: "Meals, breaks, banquet minimums" },
  { label: "Budget signal", detail: "Stated budget or implicit budget cues" },
  { label: "Contact information", detail: "Name, company, email, phone" },
  { label: "Special requests", detail: "AV, décor, accessibility, preferences" },
];

export default function EventInquiryParsingPage() {
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
                Event Inquiry Parsing
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl text-[#071f1b] leading-[1.08] mb-6">
              Event Inquiry Parsing for Hotels
            </h1>
            <p className="text-lg text-[#071f1b]/60 font-light leading-relaxed max-w-2xl mx-auto mb-10">
              Most hotels don&apos;t search for &ldquo;n8n automation.&rdquo; They search
              around the pain — slow responses, missed leads, messy RFP emails,
              hours spent on manual data entry. This is the workflow that fixes that.
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

        {/* The problem */}
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
                  Inquiries don&apos;t follow templates
                </h2>
                <p className="text-[#071f1b]/60 font-light leading-relaxed mb-6">
                  Event planners send inquiries in every format imaginable —
                  paragraph emails, forwarded Cvent notifications, web form
                  submissions, bullet-point lists. No two look the same.
                </p>
                <p className="text-[#071f1b]/60 font-light leading-relaxed mb-6">
                  That means every inquiry requires someone to manually read it,
                  pull out the relevant details, check what&apos;s missing, and
                  decide what to do next. For a hotel receiving dozens of inquiries
                  a week, that&apos;s hours of repetitive work — before a single
                  proposal is written.
                </p>
                <p className="text-[#071f1b]/60 font-light leading-relaxed">
                  Event inquiry parsing automates that first step entirely. The AI
                  reads the raw inquiry, structures the data, and routes the next
                  action — regardless of how the planner wrote it.
                </p>
              </div>
              <div className="mt-12 lg:mt-0 space-y-4">
                {[
                  "Two-paragraph email with no dates mentioned",
                  "Forwarded Cvent notification with missing F&B details",
                  "Web form submission with conflicting room counts",
                  "Phone-taken notes forwarded to the sales inbox",
                  "Reply to a previous email thread with updated requirements",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 p-5 bg-[#fafaf7] rounded-xl border border-[#e5e3db]"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#ff6464]/10 border border-[#ff6464]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#ff6464]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-sm text-[#071f1b]/70 font-light leading-relaxed">{item}</span>
                  </div>
                ))}
                <div className="p-5 bg-[#071f1b] rounded-xl">
                  <p className="text-white text-sm font-medium">
                    The parsing workflow handles all of these — same result every time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What gets extracted */}
        <section className="py-28 bg-[#fafaf7]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
                  What Gets Extracted
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-[#071f1b] mb-6">
                Every field your sales team needs
              </h2>
              <p className="text-[#071f1b]/60 font-light max-w-xl mx-auto leading-relaxed">
                When a planner sends an inquiry, the workflow extracts dates, room
                block, attendee count, meeting space needs, F&amp;B requirements,
                budget, contact information, and missing details.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {EXTRACTED_FIELDS.map((field) => (
                <div
                  key={field.label}
                  className="p-6 bg-white rounded-2xl border border-[#e5e3db]"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4">
                    <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-[#071f1b] mb-1">{field.label}</p>
                  <p className="text-xs text-[#071f1b]/50 font-light leading-relaxed">{field.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How parsing works */}
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
                  How Parsing Works
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-white mb-6">
                AI reads the raw inquiry. Your team reads the output.
              </h2>
              <p className="text-white/50 font-light max-w-lg mx-auto leading-relaxed">
                The workflow handles the messy middle — between a planner hitting
                send and your team seeing a clean, structured summary ready for action.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "01", title: "Inquiry arrives", description: "Email, web form, or forwarded notification hits the connected inbox or webhook." },
                { number: "02", title: "AI reads the raw text", description: "The workflow sends the raw inquiry to AI, which extracts and structures every relevant field." },
                { number: "03", title: "Completeness scored", description: "Each extracted field is checked. A completeness score determines the routing decision." },
                { number: "04", title: "Routed and logged", description: "Complete inquiries move to proposal generation. Incomplete inquiries trigger a clarification email. Everything gets logged." },
              ].map((step, i) => (
                <div key={step.number} className="relative">
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent -translate-x-1/2 z-0" />
                  )}
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-heading text-6xl text-white/10">{step.number}</span>
                      <div className="w-px h-10 bg-[#ff6464]/40" />
                    </div>
                    <h3 className="text-2xl text-white mb-4">{step.title}</h3>
                    <p className="text-white/50 font-light leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What happens next */}
        <section className="py-28 bg-[#fafaf7]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
                  What Happens Next
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-[#071f1b]">
                Two paths. Both automated.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-white rounded-2xl border-2 border-emerald-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl text-[#071f1b] mb-4">Complete inquiry</h3>
                <p className="text-sm text-[#071f1b]/60 font-light leading-relaxed mb-4">
                  All key fields present — dates, room count, budget, contact info.
                  The workflow moves to proposal generation, pulling from your
                  hotel&apos;s Brand DNA to build a polished proposal draft for
                  your team to review and send.
                </p>
                <p className="text-xs font-semibold text-emerald-600 tracking-wider uppercase">
                  → Proposal generation
                </p>
              </div>

              <div className="p-8 bg-white rounded-2xl border-2 border-[#ff6464]/20">
                <div className="w-10 h-10 rounded-xl bg-[#fff4f4] border border-[#ff6464]/20 flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-[#ff6464]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </div>
                <h3 className="text-2xl text-[#071f1b] mb-4">Incomplete inquiry</h3>
                <p className="text-sm text-[#071f1b]/60 font-light leading-relaxed mb-4">
                  Missing dates, unclear room count, no budget signal. The workflow
                  sends a professional, branded clarification email to the planner —
                  asking exactly what&apos;s needed before the hotel invests time in a proposal.
                </p>
                <p className="text-xs font-semibold text-[#ff6464] tracking-wider uppercase">
                  → Clarification email
                </p>
              </div>

              <div className="md:col-span-2 p-6 bg-[#071f1b] rounded-2xl flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#ff6464]/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#ff6464]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
                  </svg>
                </div>
                <p className="text-white/80 text-sm font-light">
                  <span className="text-white font-medium">Every inquiry — complete or not — gets logged.</span>{" "}
                  Full details, completeness score, routing decision, and status. Searchable pipeline. Zero manual entry.
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
              Stop triaging inquiries manually
            </h2>
            <p className="text-white/75 text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed">
              Let the workflow read, extract, score, and route every inquiry
              that hits your inbox — automatically.
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
