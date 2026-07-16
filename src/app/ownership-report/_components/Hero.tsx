import { STRIPE_LINK_FULL } from "./stripeLinks";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#fafaf7] overflow-hidden pt-20">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #071f1b 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#ff6464]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[#071f1b]/3 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
        <div className="flex flex-col gap-8 max-w-xl">
          <div className="inline-flex items-center gap-2 self-start">
            <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
            <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#ff6464]">
              Designed for USALI 12th Edition · Effective January 1, 2026
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl xl:text-[64px] text-[#071f1b] leading-[1.08]">
            Write the ownership report your numbers can&apos;t write for you.
          </h1>

          <p className="text-lg text-[#071f1b]/65 leading-relaxed font-light">
            The GM Ownership Report OS is an operator-built playbook, workbook, and
            reporting system designed for USALI 12 — so you can explain performance,
            reconcile like-for-like comparisons, and stay ahead of the ownership call.
            Built by a sitting GM at a luxury property, from the operator&apos;s side of
            the ownership table. Four pieces that run as one monthly rhythm, not four
            loose downloads.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={STRIPE_LINK_FULL}
              className="inline-flex items-center justify-center gap-2 bg-[#ff6464] hover:bg-[#e54d4d] text-white font-medium px-7 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#ff6464]/25 hover:-translate-y-0.5"
            >
              Get the Full OS — $99
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#whats-inside"
              className="inline-flex items-center justify-center gap-2 border border-[#071f1b]/20 text-[#071f1b] hover:border-[#071f1b]/40 hover:bg-[#071f1b]/5 font-medium px-7 py-4 rounded-full transition-all duration-200"
            >
              See what&apos;s inside
            </a>
          </div>

          <p className="text-sm text-[#071f1b]/40 font-light">
            Instant download · PDF Playbook + Excel Workbook + Word Template + Prompt
            Library · Yours to keep, no subscription.
          </p>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <BundlePanel />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafaf7] to-transparent pointer-events-none" />
    </section>
  );
}

const BUNDLE_ITEMS = [
  { label: "PDF Playbook", sub: "The judgment layer", color: "bg-[#fff4f4] border-[#ff6464]/20", iconBg: "bg-[#ff6464]" },
  { label: "Excel Workbook", sub: "8 tabs · restatement engine", color: "bg-[#f2f1ec] border-[#071f1b]/10", iconBg: "bg-[#071f1b]" },
  { label: "Word Report Template", sub: "The full report skeleton", color: "bg-[#fff4f4] border-[#ff6464]/20", iconBg: "bg-[#ff6464]" },
  { label: "Prompt Library", sub: "6–8 annotated prompts", color: "bg-[#f2f1ec] border-[#071f1b]/10", iconBg: "bg-[#071f1b]" },
];

function BundlePanel() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="bg-white rounded-3xl border border-[#e5e3db] shadow-2xl shadow-[#071f1b]/8 p-8">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-medium tracking-widest uppercase text-[#8b9190]">
            The GM Ownership Report OS
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {BUNDLE_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <div className={`relative flex items-center justify-center w-10 h-10 rounded-xl border ${item.color} shrink-0`}>
                <div className={`w-3 h-3 rounded-full ${item.iconBg}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-[#071f1b] leading-tight">{item.label}</p>
                <p className="text-xs text-[#8b9190] leading-tight">{item.sub}</p>
              </div>
              <div className="ml-auto w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-[#e5e3db] flex items-center justify-between gap-2 flex-wrap">
          {["Designed for USALI 12", "8-tab workbook", "Yours to keep"].map((chip) => (
            <span
              key={chip}
              className="text-[11px] font-medium px-3 py-1 rounded-full bg-[#f2f1ec] text-[#071f1b]/60"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute -top-4 -right-4 bg-[#071f1b] text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg">
        Instant download
      </div>
    </div>
  );
}
