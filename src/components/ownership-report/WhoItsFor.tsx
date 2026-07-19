export default function WhoItsFor() {
  return (
    <section className="py-28 bg-[#fafaf7]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-6 justify-center">
          <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
          <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
            Who It&apos;s For
          </span>
        </div>
        <h2 className="text-3xl lg:text-4xl text-[#071f1b] mb-8 leading-snug">
          Written for the person who writes the report — and the people who read it
        </h2>
        <p className="text-lg text-[#071f1b]/60 font-light leading-relaxed mb-6">
          If you&apos;re a GM, director of finance, or ops lead who owns the monthly
          ownership report, this is the system you wish existed the first time you
          had to explain a payroll variance to an asset manager. And if you&apos;re an
          owner or asset manager, the fee-exposure and labor-transparency sections
          are why you&apos;ll want your operators using it — reclassifications can
          change how %-of-gross incentive fees compute under some agreements, and
          this shows you where to look.
        </p>
        <p className="text-sm text-[#071f1b]/50 font-light leading-relaxed">
          Best fit: independent and boutique hotels, smaller management companies,
          owners with inconsistent operator reporting, asset managers overseeing
          several third-party operators, and new GMs who were never taught the
          ownership-report narrative. If your brand or management company already
          mandates a reporting package, this works best as the thinking layer behind
          it, not a replacement for it.
        </p>
      </div>
    </section>
  );
}
