import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";

const PRODUCTS_URL = "https://www.stitchhospitality.com/products";

// BreadcrumbList only. Deliberately no Product/ItemList schema here: two of the
// four entries below don't exist yet, and emitting Product markup for unbuilt
// products would misrepresent the catalog to search and answer engines.
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.stitchhospitality.com/" },
    { "@type": "ListItem", position: 2, name: "Products", item: PRODUCTS_URL },
  ],
};

export const metadata: Metadata = {
  title: "Products",
  description:
    "What Stitch Hospitality builds: The GM Ownership Report OS, HotelComply, and tools in development for hotel operators.",
  alternates: { canonical: PRODUCTS_URL },
  openGraph: {
    title: "Products — Stitch Hospitality",
    description:
      "What Stitch Hospitality builds: The GM Ownership Report OS, HotelComply, and tools in development for hotel operators.",
    url: PRODUCTS_URL,
    type: "website",
    siteName: "Stitch Hospitality",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products — Stitch Hospitality",
    description:
      "What Stitch Hospitality builds: The GM Ownership Report OS, HotelComply, and tools in development for hotel operators.",
  },
};

type Status = "available" | "live" | "development";

const STATUS_STYLES: Record<Status, string> = {
  available: "bg-emerald-50 text-emerald-700 border-emerald-200",
  live: "bg-emerald-50 text-emerald-700 border-emerald-200",
  development: "bg-[#f2f1ec] text-[#071f1b]/50 border-[#e5e3db]",
};

const STATUS_LABELS: Record<Status, string> = {
  available: "Available now",
  live: "Live",
  development: "In development",
};

function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`text-[11px] font-medium tracking-wide px-3 py-1 rounded-full border ${STATUS_STYLES[status]}`}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <Nav />
      <main className="bg-[#fafaf7]">
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
              <span
                role="doc-subtitle"
                className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]"
              >
                Products
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl text-[#071f1b] leading-[1.15] mb-8">
              What Stitch Hospitality builds
            </h1>
            <p className="text-lg text-[#071f1b]/70 font-light leading-relaxed">
              Tools for the person who runs the hotel, built from the operator&apos;s
              side of the ownership table. Some of what&apos;s below you can buy
              today. Some of it isn&apos;t built yet — it&apos;s labeled either way.
            </p>
          </div>
        </section>

        <section className="pb-24 lg:pb-32">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
            {/* GM Ownership Report OS */}
            <div className="p-8 rounded-2xl border border-[#e5e3db] bg-white">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-2xl text-[#071f1b] leading-snug">
                  The GM Ownership Report OS
                </h2>
                <StatusBadge status="available" />
              </div>
              <p className="text-sm text-[#071f1b]/60 font-light leading-relaxed mb-6">
                An operator-built ownership-reporting system designed for the USALI
                12th Revised Edition. A PDF playbook, an 8-tab Excel workbook with a
                restatement engine, a Word report template, and a prompt library —
                for GMs, directors of finance, and ops leads who write the monthly
                ownership report.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 bg-[#ff6464] hover:bg-[#e54d4d] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
                >
                  See the product
                </a>
                <span className="text-sm text-[#071f1b]/50 font-light">
                  $29 playbook · $99 full OS
                </span>
              </div>
            </div>

            {/* HotelComply */}
            <div className="p-8 rounded-2xl border border-[#e5e3db] bg-white">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-2xl text-[#071f1b] leading-snug">HotelComply</h2>
                <StatusBadge status="live" />
              </div>
              <p className="text-sm text-[#071f1b]/60 font-light leading-relaxed mb-6">
                CCPA and CPRA compliance for California hotel portfolio operators —
                asset managers, management companies, and multi-property groups.
                Guided onboarding, Records of Processing, vendor DPA tracking, and
                DSAR workflow management. Operated as Stitch Hospitality, LLC dba
                HotelComply, on its own site.
              </p>
              <a
                href="https://hotelcomply.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#071f1b]/20 text-[#071f1b] hover:border-[#071f1b]/40 hover:bg-[#071f1b]/5 text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
              >
                Visit hotelcomply.com
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>

            {/* The Operator's Stack */}
            <div className="p-8 rounded-2xl border border-[#e5e3db] bg-[#fafaf7]">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-2xl text-[#071f1b]/70 leading-snug">
                  The Operator&apos;s Stack
                </h2>
                <StatusBadge status="development" />
              </div>
              <p className="text-sm text-[#071f1b]/60 font-light leading-relaxed">
                Curated equipment, vendor, and software recommendations from a
                working general manager. Not built yet. When it ships it will carry
                affiliate relationships, and those will be disclosed on the page.
              </p>
            </div>

            {/* Hotel Group Sales Training */}
            <div className="p-8 rounded-2xl border border-[#e5e3db] bg-[#fafaf7]">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-2xl text-[#071f1b]/70 leading-snug">
                  Hotel Group Sales Training
                </h2>
                <StatusBadge status="development" />
              </div>
              <p className="text-sm text-[#071f1b]/60 font-light leading-relaxed">
                A training program for hotel group sales. Not built yet — format,
                pricing, and audience aren&apos;t set.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24 lg:pb-32">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 border-t border-[#e5e3db] pt-16">
            <p className="text-sm text-[#8b9190] mb-2 tracking-wide uppercase font-medium">
              Get in touch
            </p>
            <p className="text-lg text-[#071f1b]/70 font-light leading-relaxed">
              Portfolio licensing, management-company inquiries, or a question about
              anything in development:{" "}
              <a
                href="mailto:chris@stitchhospitality.com"
                className="text-[#ff6464] hover:text-[#e54d4d] underline decoration-1 underline-offset-4"
              >
                chris@stitchhospitality.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
