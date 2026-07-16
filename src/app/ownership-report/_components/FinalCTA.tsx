import { STRIPE_LINK_PDF, STRIPE_LINK_FULL } from "./stripeLinks";

export default function FinalCTA() {
  return (
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
          Your owners are already reading reports built on USALI 12. Write one.
        </h2>
        <p className="text-white/75 text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed">
          The edition changed January 1. Six months in is not too late to put your
          year-over-year back on a like-for-like footing — but the next ownership
          call is closer than the one after it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={STRIPE_LINK_FULL}
            className="inline-flex items-center gap-2 bg-white text-[#ff6464] hover:bg-[#fff4f4] font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#071f1b]/20 hover:-translate-y-0.5"
          >
            Get the Full OS — $99
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href={STRIPE_LINK_PDF}
            className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-full transition-all duration-200"
          >
            Start with the PDF — $29
          </a>
        </div>

        <p className="text-white/50 text-sm font-light">
          Instant download &nbsp;·&nbsp; Yours to keep &nbsp;·&nbsp; 14-day refund
        </p>
      </div>
    </section>
  );
}
