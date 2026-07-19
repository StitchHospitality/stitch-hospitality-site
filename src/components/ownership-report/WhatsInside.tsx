export default function WhatsInside() {
  return (
    <section id="whats-inside" className="py-28 bg-[#fafaf7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
            <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
              What&apos;s Inside
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#071f1b] mb-6">
            Four components. One system for the report you send every month.
          </h2>
          <p className="text-lg text-[#071f1b]/60 font-light leading-relaxed">
            Built to be used together on your next month-end — the workbook flags
            the variances, the playbook tells you how to narrate them, the template
            holds the structure, and the prompts accelerate the drafting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card
            title="The PDF Playbook"
            kicker="The judgment layer"
            body="Seven sections and appendices covering why ownership reports fail, how the USALI 12 changes tend to show up in an ownership report, how to narrate labor under the new detail, the loyalty cost story, the energy/water/waste and ESG paragraph institutional owners expect, and a complete worked example annotated line by line — all written in plain, operator language."
            tags={["Worked example", "Narrative craft", "Owner FAQ"]}
          />
          <Card
            title="The Excel Workbook"
            kicker="8 tabs that do the reconciliation"
            body="Enter your actuals, budget, and prior year; the Variance Engine computes and tags variances by cause and drafts first-pass narrative language. The FTE tab decomposes labor. The Loyalty Mapper helps you allocate program costs across the accounts you designate. The energy/water/waste tracker computes intensity metrics. The KPI dashboard prints on one page, with day-use rooms handled correctly in the denominators."
            tags={["Variance engine", "FTE productivity", "KPI dashboard"]}
          />
        </div>

        {/* Restatement Engine — hero feature */}
        <div className="relative overflow-hidden rounded-3xl bg-[#071f1b] p-10 lg:p-14 mb-6">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#ff6464]/10 blur-3xl pointer-events-none" />
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <svg className="w-4 h-4 text-[#ff6464]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#ff6464]">
                The Restatement Engine
              </span>
            </div>
            <h3 className="text-3xl lg:text-4xl text-white mb-6 leading-snug">
              Your prior year, on a like-for-like basis
            </h3>
            <p className="text-white/60 font-light leading-relaxed mb-8">
              The signature tool. You supply the mapping that fits your chart of
              accounts (from your own licensed USALI materials); the engine does the
              rest — and it does more than look things up. Once your mapping is in,
              it saves and reuses your property configuration month to month, applies
              the mapping across all prior-year figures, recalculates comparative
              departmental totals, flags the variances the reclassification distorts
              so you don&apos;t mistake a mapping change for performance, carries the
              restated values into the KPI dashboard and the narrative prompts, and
              keeps an audit trail of every adjustment so you can show an asset
              manager exactly what moved and why. You do the mapping once; the engine
              makes it usable everywhere the report touches.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Restatement engine", "Configure once, reuse monthly", "Audit trail"].map((tag) =>
                tag === "Restatement engine" ? (
                  <a
                    key={tag}
                    href="/resources/usali-12-restatement-guide"
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
                  >
                    {tag}
                  </a>
                ) : (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/70"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Word Template + Prompt Library */}
        <div className="p-8 lg:p-10 rounded-2xl border border-[#e5e3db] bg-white">
          <h3 className="text-xl text-[#071f1b] mb-2 leading-snug">
            The Word Template + Prompt Library
          </h3>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#8b9190] mb-4">
            From blank page to sent report
          </p>
          <p className="text-sm text-[#071f1b]/60 leading-relaxed font-light mb-6 max-w-3xl">
            The ownership-report skeleton — Executive Summary through Initiatives
            &amp; Outlook — with placeholder guidance in each section. Plus 6–8
            prompts keyed to the workbook outputs, each annotated with what good
            output looks like and the common drafting errors to catch (mislabeled
            metrics, day-use rooms, loyalty allocation mix-ups).
          </p>
          <div className="flex flex-wrap gap-2">
            {["Report skeleton", "Annotated prompts"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 rounded-full bg-[#f2f1ec] text-[#071f1b]/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  title,
  kicker,
  body,
  tags,
}: {
  title: string;
  kicker: string;
  body: string;
  tags: string[];
}) {
  return (
    <div className="p-8 rounded-2xl border border-[#e5e3db] bg-white hover:border-[#ff6464]/30 hover:shadow-lg hover:shadow-[#ff6464]/5 transition-all duration-300">
      <h3 className="text-xl text-[#071f1b] mb-2 leading-snug">{title}</h3>
      <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#8b9190] mb-4">
        {kicker}
      </p>
      <p className="text-sm text-[#071f1b]/60 leading-relaxed font-light mb-6">{body}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-3 py-1 rounded-full bg-[#f2f1ec] text-[#071f1b]/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
