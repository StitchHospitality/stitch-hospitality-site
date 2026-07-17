import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing — Stitch Hospitality",
  description:
    "Pricing for The GM Ownership Report OS: PDF Playbook $29, Full OS $99 (founding-cohort price).",
  alternates: {
    canonical: "https://www.stitchhospitality.com/pricing",
  },
  robots: { index: false, follow: true },
};

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen flex items-center justify-center bg-[#fafaf7] pt-20">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center py-24">
          <div className="inline-flex items-center gap-2 mb-6 justify-center">
            <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
            <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
              Pricing
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl text-[#071f1b] mb-6 leading-snug">
            Product pricing lives on the homepage.
          </h1>
          <p className="text-lg text-[#071f1b]/60 font-light leading-relaxed mb-8">
            The GM Ownership Report OS is priced on{" "}
            <a href="/#pricing" className="text-[#ff6464] hover:text-[#e54d4d] underline decoration-1 underline-offset-4">
              the homepage pricing section
            </a>
            . PDF Playbook is $29, Full OS is $99 (founding-cohort price).
          </p>
          <a
            href="/#pricing"
            className="inline-flex items-center justify-center gap-2 bg-[#ff6464] hover:bg-[#e54d4d] text-white font-medium px-7 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#ff6464]/25 hover:-translate-y-0.5"
          >
            See pricing
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
