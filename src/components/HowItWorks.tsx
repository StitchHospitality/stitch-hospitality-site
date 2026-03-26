const steps = [
  {
    number: "01",
    title: "Automation Audit",
    description:
      "We spend 60 minutes with your sales team mapping every repetitive task — RFP handling, proposal building, CRM entry, follow-ups. You walk away with a clear picture of where hours are being lost.",
    duration: "1-hour discovery call",
  },
  {
    number: "02",
    title: "Custom Build",
    description:
      "We design and build your automation workflows in n8n, integrated with your existing tools — your PMS, CRM, email platform, and any other systems your team uses daily.",
    duration: "1–2 week build sprint",
  },
  {
    number: "03",
    title: "Launch & Handoff",
    description:
      "Your team is trained, workflows are live, and you own everything. No ongoing licensing fees, no lock-in. We stay available for refinements as your operation evolves.",
    duration: "Live in under 3 weeks",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-[#071f1b] relative overflow-hidden">
      {/* Background texture */}
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
            From discovery to live workflows in three weeks
          </h2>
          <p className="text-white/50 font-light max-w-lg mx-auto leading-relaxed">
            No long engagements. No bloated scopes. Just a focused build that
            solves the problems costing your team the most time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent -translate-x-1/2 z-0" />
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

        <div className="mt-20 pt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-white/40 text-sm font-light mb-2">
              Built on open-source technology
            </p>
            <p className="text-white text-lg font-light">
              You own your workflows. No subscription, no vendor lock-in, no
              hidden fees.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-[#ff6464] hover:bg-[#e54d4d] text-white font-medium px-7 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#ff6464]/30 hover:-translate-y-0.5"
          >
            Start Your Audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
