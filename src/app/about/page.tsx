import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "About Stitch Hospitality | Hotel Sales Automation",
  description:
    "Stitch Hospitality builds custom n8n automation workflows for independent and boutique hotel sales teams — RFP parsing, proposal generation, and sales admin automation.",
  alternates: {
    canonical: "https://www.stitchhospitality.com/about",
  },
  openGraph: {
    title: "About Stitch Hospitality | Hotel Sales Automation",
    description:
      "Stitch Hospitality builds custom n8n automation workflows for independent and boutique hotel sales teams — RFP parsing, proposal generation, and sales admin automation.",
    url: "https://www.stitchhospitality.com/about",
    type: "website",
    siteName: "Stitch Hospitality",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Stitch Hospitality | Hotel Sales Automation",
    description:
      "Stitch Hospitality builds custom n8n automation workflows for independent and boutique hotel sales teams — RFP parsing, proposal generation, and sales admin automation.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
