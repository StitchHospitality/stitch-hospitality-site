import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/ownership-report/Hero";
import DefinitionBlock from "@/components/ownership-report/DefinitionBlock";
import UrgencyBand from "@/components/ownership-report/UrgencyBand";
import Problem from "@/components/ownership-report/Problem";
import WhatsInside from "@/components/ownership-report/WhatsInside";
import HowItWorks from "@/components/ownership-report/HowItWorks";
import DesignedToImprove from "@/components/ownership-report/DesignedToImprove";
import WhoItsFor from "@/components/ownership-report/WhoItsFor";
import Pricing from "@/components/ownership-report/Pricing";
import FAQ from "@/components/ownership-report/FAQ";
import FinalCTA from "@/components/ownership-report/FinalCTA";
import Footer from "@/components/Footer";

const PAGE_URL = "https://www.stitchhospitality.com/";
const OG_IMAGE = "https://www.stitchhospitality.com/og-image-ownership-report.png";

export const metadata: Metadata = {
  title: "The GM Ownership Report OS — USALI 12 Ownership Reports, by a Sitting GM",
  description:
    "An operator-built ownership-reporting system designed for USALI 12th Revised Edition (effective Jan 1, 2026). PDF playbook, 8-tab Excel workbook with a restatement engine, Word template, and prompt library. Built by a sitting GM. From $29. Independent — not affiliated with HFTP.",
  authors: [{ name: "Chris Suarez" }],
  keywords: [
    "USALI 12",
    "USALI 12th revised edition",
    "hotel ownership report",
    "GM ownership report",
    "hotel owner reporting",
    "USALI restatement",
    "hotel account reclassification",
    "hotel labor productivity reporting",
    "hotel variance analysis",
    "RevPAR index RGI MPI ARI",
    "hotel P&L narrative",
    "energy water waste reporting",
    "hotel asset management report",
    "monthly hotel ownership report template",
    "hotel owner reporting toolkit",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: "Stitch Hospitality",
    title: "The GM Ownership Report OS — USALI 12, Built by a Sitting GM",
    description:
      "USALI 12 changed your report on January 1. The playbook, 8-tab workbook, Word template, and prompts to write ownership reports that survive the call — with a restatement engine you configure. From $29.",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "The GM Ownership Report OS by Stitch Hospitality",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The GM Ownership Report OS — USALI 12, by a Sitting GM",
    description:
      "An operator-built ownership-report system designed for USALI 12. Playbook + 8-tab workbook + Word template + prompts, with a restatement engine you configure. From $29.",
    images: [OG_IMAGE],
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "The GM Ownership Report OS",
  brand: { "@type": "Brand", name: "Stitch Hospitality" },
  description:
    "An operator-built ownership-reporting system designed for the USALI 12th Revised Edition (effective January 1, 2026). Includes a PDF playbook, an 8-tab Excel workbook with a restatement engine the buyer configures with their own account mappings, a Word report template, and a prompt library. Built by a sitting hotel general manager. Independent product; not affiliated with or endorsed by HFTP.",
  category: "Hotel financial reporting / hospitality operations",
  author: { "@type": "Person", name: "Chris Suarez", jobTitle: "Hotel General Manager" },
  audience: {
    "@type": "Audience",
    audienceType: "Hotel general managers, directors of finance, hotel owners and asset managers",
  },
  offers: [
    {
      "@type": "Offer",
      name: "PDF Playbook",
      price: "29.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${PAGE_URL}#pricing`,
    },
    {
      "@type": "Offer",
      name: "The Full OS",
      price: "99.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${PAGE_URL}#pricing`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is USALI 12 and why does it affect hotel ownership reports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "USALI 12th Revised Edition is the hotel-industry financial reporting standard effective January 1, 2026 — the first edition change since 2015. It reclassifies where several revenues and expenses appear, expands labor reporting detail, adds energy/water/waste reporting, and refines loyalty-cost treatment. If prior periods aren't restated onto the new classifications, year-over-year comparisons can be misleading.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in The GM Ownership Report OS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A PDF playbook, an 8-tab Excel workbook (including a restatement engine the buyer configures with their own account mappings), a Word ownership-report template, and a prompt library. The full bundle is $99 (founding-cohort intro price); a PDF-only tier is $29.",
      },
    },
    {
      "@type": "Question",
      name: "Who built The GM Ownership Report OS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It was built by Chris Suarez, a sitting general manager at a luxury hotel — an operator who writes the monthly ownership report. It is an independent product and is not affiliated with or endorsed by HFTP, and it does not reproduce USALI content.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <DefinitionBlock />
        <UrgencyBand />
        <Problem />
        <WhatsInside />
        <HowItWorks />
        <DesignedToImprove />
        <WhoItsFor />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
