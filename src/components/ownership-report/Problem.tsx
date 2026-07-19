const LINK_CLASS = "text-[#ff6464] hover:text-[#e54d4d] underline decoration-1 underline-offset-4";

const PROBLEMS: { number: string; title: string; body: React.ReactNode }[] = [
  {
    number: "01",
    title: "The numbers recap gets you managed, not trusted",
    body: "A report that restates the P&L tells owners nothing they can't read themselves. The causal narrative — why the variance happened and what you're doing about it — is the actual deliverable. Most GMs were never taught to write it.",
  },
  {
    number: "02",
    title: "USALI 12 can make your year-over-year misleading",
    body: "It's the first edition change since 2015, and it reclassified where several revenues and expenses appear. If you compare this year to last without bridging prior periods onto the new classifications, some apparent variances reflect a reporting change rather than anything that happened in your operation — and owners can't tell the difference unless you show them.",
  },
  {
    number: "03",
    title: "Labor is under a brighter light",
    body: (
      <>
        The new standard pushes far more{" "}
        <a href="/resources/labor-productivity-usali-12" className={LINK_CLASS}>
          labor detail
        </a>{" "}
        into ownership reporting — productivity per occupied room, compensation by
        department, management vs. non-management. &quot;Payroll was up 6%&quot; no
        longer survives the call. You need the variance decomposition — wage
        inflation vs. structural inefficiency — and you need it before the asset
        manager asks.
      </>
    ),
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
            Owners don&apos;t pay you to recap the numbers. They pay you to explain
            them — and USALI 12 just moved the numbers.
          </h2>
          <p className="text-lg text-[#071f1b]/60 font-light leading-relaxed">
            The report that keeps owners confident isn&apos;t the one with the most
            charts. It&apos;s the one that answers the three questions they were about
            to ask — in the correct standard, before they ask them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROBLEMS.map((p) => (
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
