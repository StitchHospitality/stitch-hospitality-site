import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Stitch Hospitality",
  description:
    "Stitch Hospitality builds operator-authored tools for hotel leadership. The GM Ownership Report OS is written by a sitting general manager at a luxury property, from the operator's side of the ownership table.",
  alternates: {
    canonical: "https://www.stitchhospitality.com/about",
  },
  openGraph: {
    title: "About — Stitch Hospitality",
    description:
      "Operator-authored tools for hotel leadership, built by a sitting general manager.",
    url: "https://www.stitchhospitality.com/about",
    type: "website",
    siteName: "Stitch Hospitality",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Stitch Hospitality",
    description:
      "Operator-authored tools for hotel leadership, built by a sitting general manager.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#fafaf7]">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
                About
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl text-[#071f1b] leading-[1.15] mb-8">
              Operator-authored tools for hotel leadership.
            </h1>
            <p className="text-lg text-[#071f1b]/70 font-light leading-relaxed mb-6">
              Stitch Hospitality builds tools for the person who runs the hotel — not
              tools that pretend to. Every product ships from the operator&apos;s
              side of the ownership table, written by a sitting general manager at a
              luxury property.
            </p>
            <p className="text-lg text-[#071f1b]/70 font-light leading-relaxed">
              The first release is{" "}
              <a href="/" className="text-[#ff6464] hover:text-[#e54d4d] underline decoration-1 underline-offset-4">
                The GM Ownership Report OS
              </a>{" "}
              — an operator-built ownership-reporting system designed for the USALI 12th
              Revised Edition, which took effect January 1, 2026. It exists because the
              standard changed and most operators didn&apos;t have a defensible way to
              write the monthly report against the new classifications. It&apos;s the
              system I built for my own property, then made available as a product.
            </p>
          </div>
        </section>

        <section className="pb-24 lg:pb-32">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl text-[#071f1b] mb-6">
              What you can expect from what we build
            </h2>
            <ul className="flex flex-col gap-4 text-[#071f1b]/70 font-light leading-relaxed">
              <li>
                <span className="font-medium text-[#071f1b]">Written by someone who sends the report.</span>{" "}
                Not a consultant explaining what a report should look like — a GM who has
                sat through the ownership call and knows what survives it.
              </li>
              <li>
                <span className="font-medium text-[#071f1b]">Precise on the domain.</span>{" "}
                USALI terminology used correctly, ownership-report structure that matches
                what asset managers actually read, no fluff added to pad a deliverable.
              </li>
              <li>
                <span className="font-medium text-[#071f1b]">Independent by design.</span>{" "}
                Not affiliated with, authorized by, or endorsed by HFTP, AHLA, or GFC.
                Compliance guardrails are built into the product — buyers configure the
                workbook using their own licensed USALI materials.
              </li>
              <li>
                <span className="font-medium text-[#071f1b]">One-time purchase.</span>{" "}
                You own the files. No subscription, no seat licenses, no lock-in.
              </li>
            </ul>
          </div>
        </section>

        <section className="pb-24 lg:pb-32">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 border-t border-[#e5e3db] pt-16">
            <p className="text-sm text-[#8b9190] mb-2 tracking-wide uppercase font-medium">
              Get in touch
            </p>
            <p className="text-lg text-[#071f1b]/70 font-light leading-relaxed">
              Portfolio licensing, management-company inquiries, or a correction to report:{" "}
              <a href="mailto:chris@stitchhospitality.com" className="text-[#ff6464] hover:text-[#e54d4d] underline decoration-1 underline-offset-4">
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
