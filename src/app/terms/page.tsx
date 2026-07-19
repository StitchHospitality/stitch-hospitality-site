import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";

const TERMS_URL = "https://www.stitchhospitality.com/terms";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.stitchhospitality.com/" },
    { "@type": "ListItem", position: 2, name: "Terms & Refunds", item: TERMS_URL },
  ],
};

export const metadata: Metadata = {
  title: "Terms & Refunds",
  description:
    "License terms, refund policy, and the USALI trademark disclaimer for The GM Ownership Report OS.",
  alternates: { canonical: TERMS_URL },
  openGraph: {
    title: "Terms & Refunds — Stitch Hospitality",
    description:
      "License terms, refund policy, and the USALI trademark disclaimer for The GM Ownership Report OS.",
    url: TERMS_URL,
    type: "website",
    siteName: "Stitch Hospitality",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Refunds — Stitch Hospitality",
    description:
      "License terms, refund policy, and the USALI trademark disclaimer for The GM Ownership Report OS.",
  },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <Nav />
      <main className="bg-[#fafaf7]">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
              <span role="doc-subtitle" className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
                Terms
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl text-[#071f1b] leading-[1.15] mb-8">
              Terms &amp; Refunds
            </h1>
            <p className="text-lg text-[#071f1b]/70 font-light leading-relaxed">
              The license, refund, and trademark terms for The GM Ownership Report OS —
              the same terms referenced at checkout, consolidated here.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl text-[#071f1b] mb-6">License</h2>
            <p className="text-[#071f1b]/70 font-light leading-relaxed mb-4">
              Your purchase is a non-transferable license to use the files internally
              for a single property. It does not permit redistribution, resale, or use
              across multiple properties. Multi-property and management-company
              licensing:{" "}
              <a
                href="mailto:chris@stitchhospitality.com"
                className="text-[#ff6464] hover:text-[#e54d4d] underline decoration-1 underline-offset-4"
              >
                chris@stitchhospitality.com
              </a>
              .
            </p>
            <p className="text-[#071f1b]/70 font-light leading-relaxed">
              A receipt is emailed for expensing. You own everything you buy — one-time
              purchase, no subscription, no seat licenses, no lock-in.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl text-[#071f1b] mb-6">Refunds</h2>
            <p className="text-[#071f1b]/70 font-light leading-relaxed">
              Built by an operator who sends this report every month. If the toolkit
              isn&apos;t a fit, reply to your receipt within 14 days for a full refund —
              limited to one refund per customer, and not available once the files have
              been used in a client-facing or portfolio engagement.
            </p>
          </div>
        </section>

        <section className="pb-24 lg:pb-32">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 border-t border-[#e5e3db] pt-16">
            <h2 className="text-2xl lg:text-3xl text-[#071f1b] mb-6">
              USALI trademark disclaimer
            </h2>
            <p className="text-[#071f1b]/60 font-light leading-relaxed text-sm">
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
        </section>
      </main>
      <Footer />
    </>
  );
}
