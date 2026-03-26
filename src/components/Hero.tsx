export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#fafaf7] overflow-hidden pt-20">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #071f1b 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Soft gradient blobs */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#ff6464]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[#071f1b]/3 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: Text */}
        <div className="flex flex-col gap-8 max-w-xl">
          <div className="inline-flex items-center gap-2 self-start">
            <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
            <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#ff6464]">
              Hotel Sales Automation
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl xl:text-[68px] text-[#071f1b] leading-[1.08]">
            Custom Automations That Give Hotel Sales Teams Their Time Back
          </h1>

          <p className="text-lg text-[#071f1b]/65 leading-relaxed font-light">
            Stitch Hospitality builds custom n8n automation workflows that
            eliminate the repetitive admin burying your sales team — so they
            can focus on building relationships and closing deals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#ff6464] hover:bg-[#e54d4d] text-white font-medium px-7 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#ff6464]/25 hover:-translate-y-0.5"
            >
              Book a Free Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 border border-[#071f1b]/20 text-[#071f1b] hover:border-[#071f1b]/40 hover:bg-[#071f1b]/5 font-medium px-7 py-4 rounded-full transition-all duration-200"
            >
              See How It Works
            </a>
          </div>

          <p className="text-sm text-[#071f1b]/40 font-light">
            Trusted by independent hotels &amp; management groups across California.
          </p>
        </div>

        {/* Right: Workflow visualization */}
        <div className="hidden lg:flex items-center justify-center">
          <WorkflowVisual />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafaf7] to-transparent pointer-events-none" />
    </section>
  );
}

function WorkflowVisual() {
  const steps = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: "New RFP arrives",
      color: "bg-[#fff4f4] border-[#ff6464]/20",
      iconBg: "bg-[#ff6464]",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Automation triggers",
      color: "bg-[#f2f1ec] border-[#071f1b]/10",
      iconBg: "bg-[#071f1b]",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      label: "Proposal drafted",
      color: "bg-[#fff4f4] border-[#ff6464]/20",
      iconBg: "bg-[#ff6464]",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
      label: "CRM updated",
      color: "bg-[#f2f1ec] border-[#071f1b]/10",
      iconBg: "bg-[#071f1b]",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Sales team notified",
      color: "bg-[#fff4f4] border-[#ff6464]/20",
      iconBg: "bg-[#ff6464]",
    },
  ];

  return (
    <div className="relative w-full max-w-sm">
      {/* Card container */}
      <div className="bg-white rounded-3xl border border-[#e5e3db] shadow-2xl shadow-[#071f1b]/8 p-8">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-medium tracking-widest uppercase text-[#8b9190]">
            Live Workflow
          </span>
          <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Active
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              {/* Node */}
              <div className={`relative flex items-center justify-center w-10 h-10 rounded-xl border ${step.color} shrink-0`}>
                <div className={`w-7 h-7 rounded-lg ${step.iconBg} text-white flex items-center justify-center`}>
                  {step.icon}
                </div>
              </div>

              {/* Label */}
              <span className="text-sm font-medium text-[#071f1b]">{step.label}</span>

              {/* Check */}
              <div className="ml-auto w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[47px]" style={{ top: `${72 + i * 56}px`, width: "1px", height: "24px", background: "linear-gradient(to bottom, #e5e3db, transparent)" }} />
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-[#e5e3db] flex items-center justify-between">
          <div>
            <p className="text-2xl font-heading text-[#071f1b]">4.5 hrs</p>
            <p className="text-xs text-[#8b9190] mt-0.5">Saved per RFP</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-heading text-[#ff6464]">100%</p>
            <p className="text-xs text-[#8b9190] mt-0.5">Automated</p>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -top-4 -right-4 bg-[#071f1b] text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg">
        Zero manual data entry
      </div>
    </div>
  );
}
