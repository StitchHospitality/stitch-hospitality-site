export default function CTA() {
  return (
    <section id="contact" className="py-28 bg-[#ff6464] relative overflow-hidden">
      {/* Background pattern */}
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
          Ready to give your sales team their time back?
        </h2>
        <p className="text-white/75 text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed">
          Book a free 60-minute automation audit. We&apos;ll map your biggest
          time drains and show you exactly what we&apos;d build — no commitment
          required.
        </p>

        <div className="flex justify-center mb-12">
          <a
            href="#intake-form"
            className="inline-flex items-center gap-2 bg-white text-[#ff6464] hover:bg-[#fff4f4] font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#071f1b]/20 hover:-translate-y-0.5"
          >
            Let&apos;s Build Your Automation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <p className="text-white/50 text-sm font-light">
          60-minute call &nbsp;·&nbsp; No commitment &nbsp;·&nbsp; You keep the audit report either way
        </p>
      </div>
    </section>
  );
}
