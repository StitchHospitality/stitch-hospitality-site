import type { Metadata } from "next";
import ArticleLayout, { articleSchema } from "@/components/resources/ArticleLayout";
import { H2, P, UL, InternalLink } from "@/components/resources/prose";
import JsonLd from "@/components/seo/JsonLd";

const SLUG = "usali-12-changes-summary";
const TITLE = "What Changed in USALI 12th Revised Edition (Operator's Field Guide)";
const DESCRIPTION =
  "A GM's plain-language summary of what the USALI 12th Revised Edition actually changed — labor detail, energy/water/waste reporting, loyalty costs, account reclassifications, and the fee-base wrinkle — and why it matters for your ownership report.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `https://www.stitchhospitality.com/resources/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `https://www.stitchhospitality.com/resources/${SLUG}`,
    type: "article",
    siteName: "Stitch Hospitality",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          slug: SLUG,
          title: TITLE,
          description: DESCRIPTION,
          datePublished: "2026-07-19",
        })}
      />
      <ArticleLayout
        eyebrow="Resources"
        title={TITLE}
        dek="The 12th Revised Edition took effect January 1, 2026 — the first edition change since 2015. Here's what actually moved, described in plain operator language, not the standard's own text."
        ctaLocation={SLUG}
      >
        <P>
          Every operator has heard that the reporting standard changed. Fewer have a
          clear picture of what actually moved, because the honest answer is spread
          across a document most GMs read once, at onboarding, and never again. This
          is the summary I wish I'd had before I had to explain it to my own owners:
          what changed, why it matters to the person reading your report, and where
          the traps sit.
        </P>
        <P>
          A note before you read further: this article describes the categories of
          change in original words. It does not reproduce the standard's schedules,
          account numbers, or specific classification language — that content is
          copyrighted by the{" "}
          <a
            href="https://www.hftp.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff6464] hover:text-[#e54d4d] underline decoration-1 underline-offset-4"
          >
            Hospitality Financial and Technology Professionals (HFTP)
          </a>
          , which publishes and maintains the standard. To apply the specific account
          treatment to your property, use your own licensed copy of the USALI 12th
          Revised Edition.
        </P>

        <H2>The single biggest change: labor</H2>
        <P>
          If you read nothing else, read this section. The new edition pushes far
          more labor detail into the ownership report than owners have ever had
          standardized access to before. Staffing is now visible in a way that
          supports real productivity ratios — headcount expressed consistently
          enough to compare against occupied rooms, against covers, against your own
          trailing history and, eventually, against other properties.
        </P>
        <P>
          The practical effect: "payroll was up" no longer functions as an
          explanation. An owner who can see your labor model in standardized detail
          will ask what drove the number, and a report that doesn't decompose the
          answer into rate versus volume versus a genuine inefficiency reads as
          either unprepared or evasive. This is the muscle worth building first — see{" "}
          <InternalLink href="/resources/labor-productivity-usali-12">
            our full breakdown of labor reporting under USALI 12
          </InternalLink>{" "}
          for the decomposition method.
        </P>

        <H2>Energy, water, and waste — now reported in two currencies</H2>
        <P>
          Utilities used to be a line on the P&L. Under the new edition, the
          expectation is broader: consumption and intensity, not just cost. That
          means the property is reporting energy and water use in physical units,
          not just dollars, plus a landfill diversion figure for waste — the numbers
          institutional owners increasingly roll up into their own investor
          reporting.
        </P>
        <P>
          The operational discipline this creates is around normalization. A utility
          bill that rose because occupancy was higher is a different story than one
          that rose because the building got less efficient, and only an intensity
          metric — consumption per square foot, or per occupied room — separates the
          two for the reader. Reporting raw consumption without that context invites
          the exact confusion the new detail was meant to resolve.
        </P>
        <P>
          Waste gets its own companion metric worth building your narrative around:
          landfill diversion rate, or how much of your waste stream you keep out of
          landfill. For an ESG-minded institutional owner, this is often the single
          number they most want to see moving in the right direction, and it's
          usually the easiest of the three utilities to show real improvement on
          quickly — a recycling-stream change or a composting program can move
          diversion meaningfully within a quarter, in a way energy retrofits rarely
          do.
        </P>

        <H2>Loyalty and brand costs, made explicit</H2>
        <P>
          A hotel loyalty program has always been a single thing to a guest and
          several things on a financial statement — reward costs, service-recovery
          costs, program and promotional costs, each landing in a different place.
          The new edition makes that distribution more explicit, and in places more
          dedicated, including specific visibility for costs like the executive
          lounge. That specific visibility is worth pausing on: an executive lounge
          now carries its own dedicated cost line, which means it's no longer a cost
          that quietly blends into rooms or food and beverage. Whether the lounge is
          an amenity that supports your rate positioning or a cost center that's
          drifted from its purpose becomes a question you're expected to have an
          answer to, not one you can avoid by never separating it out.
        </P>
        <P>
          The trap here isn't the standard itself — it's the reclassification that
          rides along with it (more on that below). A rooms-related expense line can
          step up year over year for no reason other than a loyalty cost now routing
          through a different account. Handled well, that's a footnote. Handled
          silently, it's a question you answer live, defensively, on the ownership
          call.
        </P>

        <H2>The account reclassifications — the quiet landmines</H2>
        <P>
          The changes owners notice first are the new schedules. The changes that
          actually cause trouble are the quiet ones: line items that used to sit in
          one place and now sit in another, with nothing about the underlying
          business having changed at all. Categories worth watching, described by
          type rather than by account number:
        </P>
        <UL>
          <li>Certain consumable and in-room revenue classifications, refined from prior treatment.</li>
          <li>Waste-related costs, which moved out of general property operations and into the consolidated energy/water/waste home.</li>
          <li>Certain technology and systems costs, regrouped to reflect how hotels actually run today.</li>
          <li>Service-charge treatment, where how distributed service charges flow through departmental revenue was clarified.</li>
          <li>Loyalty and brand-related costs, pulled into more explicit reporting, as above.</li>
        </UL>
        <P>
          None of these are large conceptual leaps. All of them break a naive
          year-over-year comparison if the prior period isn't restated onto the new
          classification first. That restatement — and the footnote language that
          goes with it — is its own discipline, covered in{" "}
          <InternalLink href="/resources/usali-12-restatement-guide">
            our restatement guide
          </InternalLink>
          .
        </P>

        <H2>The fee-base wrinkle</H2>
        <P>
          This is the one that turns an accounting update into a conversation about
          money. Many management agreements calculate an incentive fee as a
          percentage of a gross figure — gross revenue, gross operating profit, or a
          defined variant. When a reclassification changes how an amount flows into
          that gross figure — service charges are the clearest example — the base the
          fee is calculated on can move, even though nothing about the operation or
          the owner's economics actually changed.
        </P>
        <P>
          The discipline is not to resolve this yourself. It's to know how your
          specific agreement defines the fee base, understand whether any
          reclassification touches that exact base, and be the one who raises it —
          in your own words, before an asset manager's analyst finds it in a fee
          reconciliation. Whether a reclassification actually changes the fee in your
          agreement is a contract question; confirm the treatment with your
          controller and, where the dollars warrant it, counsel.
        </P>

        <H2>A smaller detail with an outsized signal: day-use rooms</H2>
        <P>
          If day-use, non-overnight rooms get swept into the same denominators as
          overnight rooms, your occupancy statistic inflates and your average rate
          statistic depresses — a half-day product counted as if it were a full room
          night. The disciplined practice is to exclude day-use activity from the
          occupancy and ADR denominators and footnote that you've done so. It's a
          small correction that reads, to anyone who knows the standard, as evidence
          the whole statistical package was built correctly.
        </P>

        <H2>Why this is the year it actually matters</H2>
        <P>
          An edition change is not cosmetic. It moves where revenues and expenses
          appear, adds detail owners have never seen before, and breaks the
          assumption that this year's report is built the same way last year's was.
          Most management agreements bind the operator to the "most current edition"
          of the standard — which means adopting it isn't optional, only the timing
          of when you get ahead of it is. Your owners, their asset managers, and any
          institutional capital behind them are already reading against the new
          edition, whether your report reflects that yet or not.
        </P>
        <P>
          For the full narrative discipline — how to write about these changes so
          they read as competence rather than confusion — see{" "}
          <InternalLink href="/resources/ownership-report-narrative">
            writing the ownership report narrative owners actually read
          </InternalLink>
          , or go back to{" "}
          <InternalLink href="/">The GM Ownership Report OS</InternalLink> for the
          full system built around all of this.
        </P>
      </ArticleLayout>
    </>
  );
}
