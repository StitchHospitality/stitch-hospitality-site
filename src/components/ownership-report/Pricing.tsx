import { STRIPE_LINK_PDF, STRIPE_LINK_FULL, withUtm } from "./stripeLinks";

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 justify-center">
            <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
            <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
              Pricing
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#071f1b]">
            Two ways in. Founding-cohort pricing.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          {/* PDF Playbook */}
          <div className="p-8 lg:p-10 rounded-3xl border border-[#e5e3db] bg-[#fafaf7] flex flex-col">
            <h3 className="text-2xl text-[#071f1b] mb-2">PDF Playbook</h3>
            <p className="font-heading text-4xl text-[#071f1b] mb-6">$29</p>
            <p className="text-sm text-[#071f1b]/60 font-light leading-relaxed mb-6">
              The full playbook and the complete worked example, plus a one-page
              restatement primer. Everything you need to understand how USALI 12
              shows up in an ownership report and how to write the narrative.
            </p>
            <ul className="flex flex-col gap-3 mb-8 text-sm text-[#071f1b]/70">
              {[
                "PDF Playbook (7 sections + appendices)",
                "Complete annotated worked example",
                "Restatement primer (1-page)",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={withUtm(STRIPE_LINK_PDF, "pricing_pdf")}
              className="mt-auto inline-flex items-center justify-center gap-2 border border-[#071f1b]/20 text-[#071f1b] hover:border-[#071f1b]/40 hover:bg-[#071f1b]/5 font-medium px-7 py-4 rounded-full transition-all duration-200"
            >
              Get the Playbook — $29
            </a>
          </div>

          {/* Full OS */}
          <div className="relative p-8 lg:p-10 rounded-3xl bg-[#071f1b] flex flex-col overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#ff6464]/10 blur-3xl pointer-events-none" />
            <span className="absolute top-6 right-6 text-[11px] font-medium tracking-[0.15em] uppercase text-[#ff6464] bg-[#ff6464]/10 px-3 py-1 rounded-full">
              Most popular
            </span>
            <h3 className="relative text-2xl text-white mb-2">The Full OS</h3>
            <p className="relative font-heading text-4xl text-white mb-1">$99</p>
            <p className="relative text-xs font-medium tracking-wide uppercase text-[#ff6464] mb-6">
              Founding-cohort price
            </p>
            <p className="relative text-sm text-white/60 font-light leading-relaxed mb-6">
              Everything in the PDF, plus the tools that do the work: the 8-tab
              workbook with the restatement engine, the Word report template, and
              the prompt library.
            </p>
            <ul className="relative flex flex-col gap-3 mb-8 text-sm text-white/80">
              {[
                "Everything in the PDF Playbook",
                "Excel Workbook — all 8 tabs",
                "Restatement engine (you configure the mapping)",
                "Word Report Template",
                "Prompt Library (6–8 annotated prompts)",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check dark />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={withUtm(STRIPE_LINK_FULL, "pricing_full")}
              className="relative mt-auto inline-flex items-center justify-center gap-2 bg-[#ff6464] hover:bg-[#e54d4d] text-white font-medium px-7 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#ff6464]/25"
            >
              Get the Full OS — $99
            </a>
          </div>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col gap-3 text-center">
          <p className="text-sm text-[#071f1b]/60 font-light leading-relaxed">
            $99 is introductory pricing for the first cohort of buyers. It&apos;s a
            one-time purchase — you keep the files, no subscription. (Where this is
            headed: a per-property implementation setup, and portfolio licensing for
            management companies and asset managers. Those are separate,
            higher-touch offers — this page sells the self-serve toolkit.)
          </p>
          <p className="text-sm text-[#071f1b]/60 font-light leading-relaxed">
            Bought the PDF first? You&apos;ll get a code for the $29 back toward the
            Full OS — you only pay the difference.
          </p>
          <p className="text-sm text-[#071f1b]/60 font-light leading-relaxed">
            Built by an operator who sends this report every month. If the toolkit
            isn&apos;t a fit, reply to your receipt within 14 days for a full refund
            — limited to one refund per customer, and not available once the files
            have been used in a client-facing or portfolio engagement.
          </p>
          <p className="text-xs text-[#071f1b]/40 font-light leading-relaxed pt-2">
            Your purchase is a non-transferable license to use the files internally
            for a single property. It does not permit redistribution, resale, or use
            across multiple properties. Multi-property and management-company
            licensing: chris@stitchhospitality.com.
          </p>
        </div>
      </div>
    </section>
  );
}

function Check({ dark }: { dark?: boolean }) {
  return (
    <span
      className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
        dark ? "bg-[#ff6464]/20" : "bg-emerald-50 border border-emerald-200"
      }`}
    >
      <svg
        className={`w-2.5 h-2.5 ${dark ? "text-[#ff6464]" : "text-emerald-500"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </span>
  );
}
