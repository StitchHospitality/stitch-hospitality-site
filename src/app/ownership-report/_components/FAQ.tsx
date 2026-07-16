const FAQS = [
  {
    q: "Is this designed for USALI 12th Revised Edition?",
    a: "Yes — the whole system is designed around the changes in the 12th Edition, effective January 1, 2026: the account reclassifications, the expanded labor detail, the energy/water/waste reporting, and loyalty-cost treatment. It doesn't reproduce the standard itself — you apply your own licensed USALI mappings, and the workbook does the work around them.",
  },
  {
    q: "I'm not an accountant. Can I use this?",
    a: "Yes. The playbook is written by a GM for GMs — it's about judgment and narrative, not bookkeeping. The workbook does the calculations; you enter your numbers and your mappings, and it drafts the language.",
  },
  {
    q: "What exactly do I download?",
    a: "The Full OS is a PDF playbook, an 8-tab Excel workbook, a Word report template, and a prompt library. The $29 tier is the PDF playbook and worked example.",
  },
  {
    q: "Do I need any subscription or software?",
    a: "No. You need Excel (or Google Sheets/Numbers to import) and Word. You own the files outright — no subscription, no lock-in.",
  },
  {
    q: "What am I licensed to do with the files?",
    a: "Your purchase is a non-transferable license to use the files internally for a single property. It doesn't cover redistribution, resale, or use across multiple properties. A receipt is emailed for expensing. For portfolio/multi-property or management-company licensing, email chris@stitchhospitality.com.",
  },
  {
    q: "What if it's not useful?",
    a: "14-day refund — reply to your receipt. Limited to one refund per customer, and not available once the files have been used in a client-facing or portfolio engagement.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-28 bg-[#fafaf7]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 justify-center">
            <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
            <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#071f1b]">Questions, answered</h2>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group p-6 rounded-2xl border border-[#e5e3db] bg-white open:border-[#ff6464]/30"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <span className="text-base font-medium text-[#071f1b]">{item.q}</span>
                <svg
                  className="w-4 h-4 shrink-0 text-[#8b9190] group-open:rotate-45 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </summary>
              <p className="mt-4 text-sm text-[#071f1b]/60 font-light leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
