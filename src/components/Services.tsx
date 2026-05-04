type SanityService = {
  _id: string;
  title: string;
  description: string;
  tags?: string[];
  comingSoon?: boolean;
};

const FALLBACK_SERVICES = [
  {
    title: "Inquiry & RFP Triage",
    description:
      "Automatically parse inbound RFPs, extract key details, score lead quality, and route to the right team member — all before your sales manager finishes their morning coffee.",
    tags: ["Email parsing", "Lead scoring", "Auto-routing"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Proposal Generation",
    description:
      "Pull rates, room blocks, and package details from your property's Brand DNA profile to auto-populate branded proposals in minutes. Send a polished document before the client finishes reading your reply.",
    tags: ["Brand DNA profile", "Auto-populate", "PDF generation"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Lead Capture & Logging",
    description:
      "Every inquiry is automatically parsed, scored, and logged — full contact details, event specs, dates, and budget captured without anyone touching a keyboard.",
    tags: ["Auto-parsing", "Lead scoring", "Instant logging"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: "Follow-Up Sequences",
    description:
      "Timed, personalized follow-up emails triggered by deal stage — not by someone remembering to send them. Increase conversion without adding headcount.",
    tags: ["Drip sequences", "Stage-based triggers", "Personalization"],
    comingSoon: true,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Reporting & Analytics",
    description:
      "Automated weekly pipeline reports, conversion dashboards, and revenue forecasts delivered to your inbox — no spreadsheet maintenance required.",
    tags: ["Pipeline reports", "Revenue forecasting", "Slack / email delivery"],
    comingSoon: true,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const DEFAULT_ICON = (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function Services({
  sanityServices,
}: {
  sanityServices?: SanityService[];
}) {
  const useSanity = sanityServices && sanityServices.length > 0;

  const displayServices = useSanity
    ? sanityServices.map((s) => ({
        title: s.title,
        description: s.description,
        tags: s.tags ?? [],
        comingSoon: s.comingSoon ?? false,
        icon: DEFAULT_ICON,
      }))
    : FALLBACK_SERVICES;

  const activeServices = displayServices.filter((s) => !s.comingSoon);
  const comingSoonServices = displayServices.filter((s) => s.comingSoon);

  return (
    <section id="services" className="py-28 bg-[#fafaf7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
                What We Automate
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-[#071f1b]">
              Custom hotel sales workflows that turn inbound RFPs into qualified, logged, proposal-ready opportunities.
            </h2>
          </div>
          <p className="text-[#071f1b]/60 font-light leading-relaxed max-w-xs lg:text-right">
            Built in n8n, so your hotel owns the automation.
          </p>
        </div>

        {/* Active services — three columns */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {activeServices.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-white rounded-2xl border border-[#e5e3db] hover:border-[#ff6464]/30 hover:shadow-lg hover:shadow-[#ff6464]/5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#fafaf7] border border-[#e5e3db] flex items-center justify-center mb-6 text-[#071f1b] group-hover:bg-[#ff6464] group-hover:border-[#ff6464] group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl text-[#071f1b] mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm text-[#071f1b]/60 leading-relaxed font-light mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-[#f2f1ec] text-[#071f1b]/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon services */}
        {comingSoonServices.length > 0 && (
          <div>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#8b9190] mb-4">
              Coming Soon
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 opacity-60">
              {comingSoonServices.map((service) => (
                <div
                  key={service.title}
                  className="p-6 bg-[#f2f1ec] rounded-2xl border border-[#e5e3db]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-white/60 border border-[#e5e3db] flex items-center justify-center text-[#071f1b]/40">
                      {service.icon}
                    </div>
                    <h3 className="text-base text-[#071f1b]/60 leading-snug">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#071f1b]/50 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
