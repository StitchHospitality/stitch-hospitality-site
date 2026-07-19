import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { organizationRef } from "@/components/seo/schemas";
import CtaBlock from "./CtaBlock";

const SITE_URL = "https://www.stitchhospitality.com";

export function articleSchema({
  slug,
  title,
  description,
  datePublished,
}: {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
}) {
  const url = `${SITE_URL}/resources/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished,
    dateModified: datePublished,
    author: { "@type": "Person", name: "Chris Suarez", jobTitle: "Hotel General Manager" },
    publisher: organizationRef,
  };
}

export default function ArticleLayout({
  eyebrow,
  title,
  dek,
  ctaLocation,
  children,
}: {
  eyebrow: string;
  title: string;
  dek: string;
  ctaLocation: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="bg-[#fafaf7]">
        <article>
          <header className="pt-32 pb-12 lg:pt-40 lg:pb-16">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
                  {eyebrow}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl text-[#071f1b] leading-[1.15] mb-6">
                {title}
              </h1>
              <p className="text-lg text-[#071f1b]/70 font-light leading-relaxed">
                {dek}
              </p>
            </div>
          </header>

          <div className="pb-16">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">{children}</div>
          </div>

          <div className="pb-24 lg:pb-32">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <CtaBlock location={ctaLocation} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
