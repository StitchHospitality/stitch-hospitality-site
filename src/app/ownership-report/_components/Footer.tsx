import { STRIPE_LINK_PDF, STRIPE_LINK_FULL } from "./stripeLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#071f1b] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div className="lg:col-span-2">
            <p className="font-heading text-[13px] tracking-[0.22em] uppercase text-white mb-4">
              Stitch Hospitality
            </p>
            <p className="text-white/50 font-light text-sm leading-relaxed max-w-xs">
              Operator-built tools for hotel leadership. The GM Ownership Report OS
              is written by a sitting GM for the people who answer to ownership.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-4">
              Product
            </p>
            <ul className="space-y-3">
              <li>
                <a href={STRIPE_LINK_FULL} className="text-sm text-white/50 hover:text-white transition-colors font-light">
                  The Full OS — $99
                </a>
              </li>
              <li>
                <a href={STRIPE_LINK_PDF} className="text-sm text-white/50 hover:text-white transition-colors font-light">
                  PDF Playbook — $29
                </a>
              </li>
              <li>
                <a href="#whats-inside" className="text-sm text-white/50 hover:text-white transition-colors font-light">
                  What&apos;s inside
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-white/50 hover:text-white transition-colors font-light">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-4">
              Company
            </p>
            <ul className="space-y-3">
              <li>
                <a href="mailto:chris@stitchhospitality.com" className="text-sm text-white/50 hover:text-white transition-colors font-light">
                  chris@stitchhospitality.com
                </a>
              </li>
              <li>
                <a href="#pricing" className="inline-flex items-center gap-1.5 text-sm text-[#ff6464] hover:text-[#ff8080] transition-colors font-medium mt-2">
                  Terms &amp; Refunds
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-xs font-light">
              &copy; {year} Stitch Hospitality. All rights reserved. You own everything
              you buy.
            </p>
          </div>
          <p className="text-white/20 text-[11px] font-light leading-relaxed max-w-4xl">
            USALI™ is a trademark of, and is copyrighted by, the Hospitality
            Financial and Technology Professionals (HFTP). The GM Ownership Report
            OS is an independent product. It is not affiliated with, authorized by,
            or endorsed by HFTP, AHLA, or GFC, and it does not reproduce or
            distribute USALI content. Buyers configure the workbook using their own
            licensed USALI materials. This product provides general operational
            guidance and is not accounting, legal, or tax advice; consult your
            controller and your management agreement for your property&apos;s
            specifics.
          </p>
        </div>
      </div>
    </footer>
  );
}
