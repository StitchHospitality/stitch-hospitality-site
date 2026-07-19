const STEPS = [
  {
    number: "01",
    title: "Download instantly",
    description:
      "Checkout, and the full bundle is in your inbox in minutes. No call, no scope, no waiting on a build.",
  },
  {
    number: "02",
    title: "Restate and reconcile in the workbook",
    description:
      "Set your property inputs and mappings once. Enter your month. The restatement engine puts last year on a like-for-like basis, the variance engine flags what matters, and the workbook drafts your first-pass narrative.",
  },
  {
    number: "03",
    title: "Write the report that survives the call",
    description:
      "Assemble in the Word template, tighten with the prompt library, and send owners a report aligned to USALI 12 — the standard they're already reading against, whether you've adapted or not.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-[#071f1b] relative overflow-hidden">
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
            Buy it today. Run your next month-end in the new standard.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent -translate-x-1/2 z-0" />
              )}

              <div className="relative z-10">
                <span className="font-heading text-6xl text-white/10 block mb-6">
                  {step.number}
                </span>
                <h3 className="text-2xl text-white mb-4">{step.title}</h3>
                <p className="text-white/50 font-light leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-16 border-t border-white/10 text-center">
          <p className="text-white text-lg font-light max-w-xl mx-auto">
            You own everything you buy. One-time purchase — no subscription, no
            seat licenses, no lock-in — the same principle Stitch has always built
            on.
          </p>
        </div>
      </div>
    </section>
  );
}
