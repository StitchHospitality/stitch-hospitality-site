import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#071f1b] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-heading text-[13px] tracking-[0.22em] uppercase text-white mb-4">
              Stitch Hospitality
            </p>
            <p className="text-white/50 font-light text-sm leading-relaxed max-w-xs mb-6">
              Custom n8n workflow automations for hotel sales teams. We build
              the systems that give your people their time back.
            </p>
            <a
              href="https://www.linkedin.com/company/stitchhospitality-com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-4">
              Services
            </p>
            <ul className="space-y-3">
              {[
                { label: "Hotel RFP Automation", href: "/hotel-rfp-automation" },
                { label: "Event Inquiry Parsing", href: "/event-inquiry-parsing-for-hotels" },
                { label: "Hotel Proposal Automation", href: "/hotel-proposal-automation" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-white transition-colors font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-4">
              Resources
            </p>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "What to Expect", href: "/what-to-expect" },
                { label: "Pricing", href: "/pricing" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-white transition-colors font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:chris@stitchhospitality.com"
                  className="text-sm text-white/50 hover:text-white transition-colors font-light"
                >
                  chris@stitchhospitality.com
                </a>
              </li>
              <li>
                <Link
                  href="/#intake-form"
                  className="inline-flex items-center gap-1.5 text-sm text-[#ff6464] hover:text-[#ff8080] transition-colors font-medium mt-2"
                >
                  Let&apos;s Build Your RFP Workflow
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-light">
            &copy; {year} Stitch Hospitality. All rights reserved.
          </p>
          <p className="text-white/20 text-xs font-light">
            You own everything we build.
          </p>
        </div>
      </div>
    </footer>
  );
}
