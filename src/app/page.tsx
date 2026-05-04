import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import CTA from "@/components/CTA";
import IntakeForm from "@/components/IntakeForm";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { SERVICES_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Hotel RFP Automation for Independent Hotels | Stitch Hospitality",
  description:
    "Custom n8n workflows for hotel sales teams. Parse inbound RFPs, qualify leads, generate proposal drafts, and log every inquiry without manual data entry.",
  keywords: [
    "hotel sales automation",
    "hotel RFP automation",
    "hotel proposal automation",
    "n8n hotel automation",
    "hospitality sales automation",
    "boutique hotel sales workflows",
    "hotel event inquiry automation",
    "hotel sales operations automation",
    "AI automation for hotel sales teams",
    "independent hotel automation",
    "California hotel sales",
    "proposal automation for hotels",
    "n8n workflows for hospitality sales",
  ],
  alternates: {
    canonical: "https://www.stitchhospitality.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.stitchhospitality.com/#organization",
      name: "Stitch Hospitality",
      url: "https://www.stitchhospitality.com",
      description:
        "Custom n8n automation workflows for independent and boutique hotel sales teams. RFP parsing, proposal generation, lead qualification, and sales follow-up automation.",
      email: "chris@stitchhospitality.com",
      sameAs: ["https://www.linkedin.com/company/stitchhospitality-com"],
      founder: {
        "@type": "Person",
        name: "Chris Suarez",
      },
      areaServed: {
        "@type": "State",
        name: "California",
        addressCountry: "US",
      },
      knowsAbout: [
        "hotel sales automation",
        "hotel RFP automation",
        "proposal workflow automation",
        "n8n workflows",
        "hospitality sales operations",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.stitchhospitality.com/#website",
      url: "https://www.stitchhospitality.com",
      name: "Stitch Hospitality",
      publisher: {
        "@id": "https://www.stitchhospitality.com/#organization",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.stitchhospitality.com/#service",
      name: "Stitch Hospitality",
      url: "https://www.stitchhospitality.com",
      description:
        "Custom n8n automation workflows for hotel sales teams, focused on RFP response, proposal generation, and hospitality sales operations.",
      serviceType: "Hotel Sales Automation",
      areaServed: {
        "@type": "State",
        name: "California",
        addressCountry: "US",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "Independent and boutique hotel sales teams, Directors of Sales, Revenue Managers, General Managers",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Hotel Sales Automation Workflows",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Event Inquiry Parsing & Response",
              description:
                "Parses incoming hotel RFPs, scores inquiry completeness, and routes high-confidence and low-confidence inquiries to the right team member.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Proposal Generation",
              description:
                "Uses hotel-specific brand, rate, meeting space, F&B, and visual details to support branded proposal creation for event inquiries.",
            },
          },
        ],
      },
    },
  ],
};

export default async function Home() {
  const services = await client.fetch(SERVICES_QUERY).catch(() => []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services sanityServices={services} />
        <HowItWorks />
        <Results />
        <CTA />
        <IntakeForm />
      </main>
      <Footer />
    </>
  );
}
