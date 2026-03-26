type SanityTestimonial = {
  _id: string;
  quote: string;
  name: string;
  title?: string;
  property?: string;
};

const STATS = [
  {
    value: "4–6 hrs",
    label: "Saved per proposal",
    description: "Average time reclaimed by automating proposal generation from PMS data.",
  },
  {
    value: "< 5 min",
    label: "RFP triage time",
    description: "From email arrival to qualified lead in your CRM — fully automated.",
  },
  {
    value: "3 weeks",
    label: "To go live",
    description: "From discovery call to production workflows running in your stack.",
  },
  {
    value: "0 hrs",
    label: "Manual data entry",
    description: "Once automated, your CRM stays current without anyone touching a keyboard.",
  },
];

const FALLBACK_TESTIMONIAL = {
  quote:
    "Before Stitch, our sales coordinator was spending two full days a week on proposals and CRM cleanup. Now that same coordinator focuses entirely on client relationships. The ROI was immediate.",
  name: "Director of Sales",
  title: undefined,
  property: "Boutique Hotel Group, Northern California",
};

export default function Results({
  sanityTestimonials,
}: {
  sanityTestimonials?: SanityTestimonial[];
}) {
  const testimonial =
    sanityTestimonials && sanityTestimonials.length > 0
      ? sanityTestimonials[0]
      : FALLBACK_TESTIMONIAL;

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
            These aren&apos;t estimates. They&apos;re the measurable outcomes
            from automations we&apos;ve already built for hospitality teams.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto bg-[#071f1b] rounded-3xl p-10 lg:p-14">
          <div className="flex gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-[#ff6464]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-xl lg:text-2xl font-heading text-white leading-relaxed mb-8">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#ff6464]/20 border border-[#ff6464]/30 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#ff6464]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium text-sm">{testimonial.name}</p>
              {(testimonial.title || testimonial.property) && (
                <p className="text-white/40 text-sm font-light">
                  {[testimonial.title, testimonial.property].filter(Boolean).join(" · ")}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
