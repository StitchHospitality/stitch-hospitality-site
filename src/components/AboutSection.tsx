export default function AboutSection() {
  return (
    <section className="py-28 bg-[#fafaf7]" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
            <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
              About Stitch Hospitality
            </span>
          </div>

          <h2
            id="about-heading"
            className="text-4xl lg:text-5xl text-[#071f1b] mb-6"
          >
            Hotel Sales Automation Built for Boutique Properties
          </h2>

          <p className="text-lg text-[#071f1b]/65 leading-relaxed font-light mb-12">
            Stitch Hospitality builds custom n8n automation workflows for
            independent and boutique hotel sales teams. The workflows help sales
            managers, revenue leaders, and general managers reduce manual RFP
            review, speed up event inquiry responses, and create more consistent
            proposal workflows.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl text-[#071f1b] mb-4">
                Hotel RFP Automation
              </h3>
              <ul className="space-y-3">
                {[
                  "Event inquiry parsing and response workflows for hotel RFPs",
                  "Proposal generation workflows using hotel-specific brand, rate, meeting space, and F&B details",
                  "LinkedIn content automation for hospitality sales visibility",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff6464] shrink-0" />
                    <span className="text-[#071f1b]/65 font-light leading-relaxed text-sm">
                      {item}
                    </span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#071f1b]/20 shrink-0" />
                  <span className="text-[#071f1b]/40 font-light leading-relaxed text-sm">
                    Coming soon: lead prospecting and proposal follow-up automation
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl text-[#071f1b] mb-4">
                Proposal Automation for Hotel Sales Teams
              </h3>
              <p className="text-[#071f1b]/65 font-light leading-relaxed text-sm mb-4">
                Each workflow is built around the specific terminology, data
                sources, and approval steps that hotel sales teams use every
                day — not generic business automation templates.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "RFPs",
                  "Room blocks",
                  "Meeting space",
                  "F&B minimums",
                  "BEO handoffs",
                  "Rate sheets",
                  "Proposal turnaround",
                ].map((term) => (
                  <span
                    key={term}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white border border-[#e5e3db] text-[#071f1b]/60"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#e5e3db]">
            <h3 className="text-xl text-[#071f1b] mb-3">
              Built Around Hospitality Sales Workflows
            </h3>
            <p className="text-[#071f1b]/60 font-light leading-relaxed text-sm">
              Unlike generic automation consultants, Stitch Hospitality focuses
              only on hotel sales departments. The workflows are designed around
              hospitality terms and workflows such as RFPs, room blocks, meeting
              space, F&B minimums, BEO handoffs, rate sheets, and proposal
              turnaround time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
