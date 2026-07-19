const SITE_URL = "https://www.stitchhospitality.com";
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// Sitewide — imported once in layout.tsx so it emits on every page, and
// referenced by @id from other schemas (Product.publisher, Person.worksFor)
// instead of duplicating the full object.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Stitch Hospitality",
  url: SITE_URL,
  logo: `${SITE_URL}/opengraph-image`,
  description:
    "Stitch Hospitality builds The GM Ownership Report OS — an operator-built playbook, workbook, Word template, and prompt library that helps hotel general managers write ownership reports designed for the USALI 12th Revised Edition.",
  sameAs: ["https://www.linkedin.com/company/stitchhospitality-com"],
  founder: {
    "@type": "Person",
    name: "Chris Suarez",
    jobTitle: "General Manager",
  },
};

export const organizationRef = { "@id": ORGANIZATION_ID };
