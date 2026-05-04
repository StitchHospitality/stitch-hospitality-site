const STATS = [
  {
    value: "4–6 hrs",
    label: "Saved per proposal",
    description: "Average time reclaimed by automating proposal drafts from your hotel's Brand DNA.",
  },
  {
    value: "< 5 min",
    label: "RFP triage time",
    description: "From email arrival to scored, logged lead — fully automated.",
  },
  {
    value: "3 weeks",
    label: "To go live",
    description: "From discovery call to production workflows running in your stack.",
  },
  {
    value: "0 hrs",
    label: "Manual data entry",
    description: "Once automated, every inquiry is captured and logged without anyone touching a keyboard.",
  },
];

export default function Results() {
  return (
    <section id="results" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
            <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
              Results
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#071f1b] mb-6">
            What hotel sales teams actually get back
          </h2>
          <p className="text-[#071f1b]/60 font-light max-w-xl mx-auto leading-relaxed">
            Early workflow benchmarks show what&apos;s possible when RFP
            parsing, proposal drafting, and lead logging are automated.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="p-8 rounded-2xl border border-[#e5e3db] bg-[#fafaf7] text-center group hover:border-[#ff6464]/30 hover:bg-[#fff4f4] transition-all duration-300"
            >
              <p className="font-heading text-4xl lg:text-5xl text-[#071f1b] mb-2 group-hover:text-[#ff6464] transition-colors">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-[#071f1b] mb-3">{stat.label}</p>
              <p className="text-xs text-[#071f1b]/50 font-light leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
