const problems = [
  {
    number: "01",
    title: "Inquiries pile up faster than your team can respond",
    body: "Every hour a qualified RFP sits unanswered is an hour your competitor is gaining ground. Manual triage means slow response times and missed revenue.",
  },
  {
    number: "02",
    title: "Proposals take hours to build from scratch",
    body: "Copy-pasting room blocks, F&B minimums, and contract language across templates is eating 4–6 hours per proposal — time your closers could spend on calls.",
  },
  {
    number: "03",
    title: "Data entry errors cost you credibility",
    body: "Manually tracking every inquiry across inboxes and spreadsheets introduces typos, missed fields, and duplicate records that erode trust with clients and management alike.",
  },
];

export default function Problem() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
            <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
              The Problem
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#071f1b] mb-6">
            Your sales team is doing the work of three people. Most of it is admin.
          </h2>
          <p className="text-lg text-[#071f1b]/60 font-light leading-relaxed">
            Hotel sales has never been more competitive. The teams that win
            aren&apos;t working harder — they&apos;ve removed the friction
            from their workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p) => (
            <div
              key={p.number}
              className="group p-8 rounded-2xl border border-[#e5e3db] bg-[#fafaf7] hover:border-[#ff6464]/30 hover:bg-[#fff4f4] transition-all duration-300"
            >
              <span className="block font-heading text-5xl text-[#e5e3db] group-hover:text-[#ff6464]/20 transition-colors mb-6">
                {p.number}
              </span>
              <h3 className="text-xl text-[#071f1b] mb-4 leading-snug">{p.title}</h3>
              <p className="text-[#071f1b]/60 text-sm leading-relaxed font-light">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
