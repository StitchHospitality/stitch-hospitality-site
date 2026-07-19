import type { Metadata } from "next";
import ArticleLayout, { articleSchema } from "@/components/resources/ArticleLayout";
import { H2, P, UL, InternalLink } from "@/components/resources/prose";
import JsonLd from "@/components/seo/JsonLd";

const SLUG = "usali-12-restatement-guide";
const TITLE = "How to Restate Prior-Year Financials for USALI 12 Like-for-Like Comparisons";
const DESCRIPTION =
  "A step-by-step method for restating prior-year hotel financials onto USALI 12th Edition classifications, so year-over-year comparisons reflect the operation, not a reporting change.";

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
        dek="A reclassification that isn't bridged reads as a performance change. Here's the method for restating prior-year figures so your year-over-year comparison tells the truth."
        ctaLocation={SLUG}
      >
        <P>
          Here's the landmine, stated plainly: USALI 12 moved several revenues and
          expenses to different homes on the statement. Nothing about your operation
          changed when that happened. But if you compare this year's report — built
          on the new classifications — against last year's report — built on the
          old ones — without bridging the two, the comparison will read the
          reclassification as if it were a real swing in performance. That's how a
          GM ends up explaining a "decline" that never happened, or worse, how an
          owner ends up doubting a number that was actually correct.
        </P>
        <P>
          Restating means rebuilding your prior-year comparatives as if they had
          always used the current classification. It's mechanical once you've done
          it once, and it's the single highest-leverage thing you can do before your
          next ownership report. See{" "}
          <InternalLink href="/resources/usali-12-changes-summary">
            our summary of what actually changed
          </InternalLink>{" "}
          if you need the background first.
        </P>

        <H2>The five-step method</H2>
        <P>
          You don't need to reproduce the standard to do this — you need your own
          account mapping, built once, applied every month after. Work through these
          five steps using your own licensed copy of the USALI 12th Revised Edition
          and your current chart of accounts.
        </P>
        <UL>
          <li>
            <strong className="text-[#071f1b] font-medium">Identify affected accounts.</strong>{" "}
            From your licensed USALI 12 materials, list every account whose
            classification changed. Note the prior treatment and the current
            treatment in your own words — not the standard's.
          </li>
          <li>
            <strong className="text-[#071f1b] font-medium">Quantify the reclassified amount.</strong>{" "}
            For each affected account, record the prior-year dollar amount that
            moves under the current classification — the figure that would
            otherwise contaminate your comparison.
          </li>
          <li>
            <strong className="text-[#071f1b] font-medium">Restate the comparative.</strong>{" "}
            Rebuild the prior-year figure as if it had always used the current
            classification. This restated number, not the originally reported one,
            is what you compare the current period against.
          </li>
          <li>
            <strong className="text-[#071f1b] font-medium">Draft the footnote.</strong>{" "}
            For every material reclassification, write the one- or two-sentence note
            that tells the owner what moved and why (pattern below).
          </li>
          <li>
            <strong className="text-[#071f1b] font-medium">Check the fee base.</strong>{" "}
            Using your management agreement's specific fee-base definition, note
            whether any reclassification touches the figure your incentive fee is
            calculated on, and prepare the sentence you'll use to surface it
            proactively.
          </li>
        </UL>
        <P>
          Do this once, per account, and you have a mapping you reuse every month —
          the same discipline our workbook automates for buyers who don't want to
          rebuild it by hand each period.
        </P>

        <H2>A worked example</H2>
        <P>
          Say a loyalty benefit cost that used to sit in sales and marketing now
          routes through your rooms department under the current classification.
          Last year, before the reclassification, rooms department expense was
          reported at $822,000 for the month. That figure never included the
          loyalty cost — it wasn't there yet under the old treatment. To restate it,
          you add the loyalty amount that would have flowed through rooms had the
          current classification applied at the time: say $22,000. The restated
          prior-year comparative is $844,000, not $822,000.
        </P>
        <P>
          Now compare this year's actual rooms expense of $846,000 against each
          figure. Against the unrestated $822,000, that's a $24,000 increase — about
          three percent — which reads, to anyone glancing at the trend, like a real
          cost problem. Against the restated $844,000, it's a $2,000 increase — a
          rounding error, essentially flat. Same actual result, two completely
          different stories, and only one of them is true. That gap is the entire
          reason this method exists.
        </P>

        <H2>How material is material enough to restate?</H2>
        <P>
          Not every reclassification is worth a line-item restatement and a
          footnote. A shift of a few hundred dollars on an undistributed expense line
          usually isn't going to change how an owner reads your report, and
          over-footnoting trains the reader to skim past the notes that actually
          matter. Set a materiality threshold — a percentage of the line or a flat
          dollar amount, whichever your owner group responds to — and restate above
          it. Below it, a mapping entry for your own records is enough; you don't
          need to surface every immaterial shift in the report itself. What matters
          is that the threshold is consistent month to month, not that it's
          generous.
        </P>

        <H2>The footnote pattern</H2>
        <P>
          When a reclassification materially affects a comparison, say so plainly —
          in a footnote or a parenthetical, right where the number sits, not exiled
          to a back page. You don't need legalese. A pattern worth adapting:
        </P>
        <P>
          <em>
            "Prior-year figures for [department/line] have been restated to reflect
            the current-edition classification, so that year-over-year comparisons
            are on a like-for-like basis. The [$X] change in [line] is a reporting
            reclassification, not a change in operating performance. Underlying
            [department] performance is discussed above."
          </em>
        </P>
        <P>
          Two rules make this work. First, restate rather than merely warn — an
          owner shouldn't have to do mental arithmetic to understand a comparison;
          show them the restated figure directly. Second, place the note next to the
          number it explains. The goal is that the owner never forms a wrong
          impression in the first place — correcting an impression after the fact
          costs more trust than never creating it.
        </P>

        <H2>Keep an audit trail</H2>
        <P>
          Once you've restated a figure, keep a record of exactly what changed and
          why — the account, the amount moved, the prior treatment, the current
          treatment, and the date you applied it. This isn't bureaucracy for its own
          sake. An asset manager who asks "how did you get from $822,000 to
          $844,000" deserves an answer faster than you re-deriving it from memory,
          and a portfolio-level asset manager overseeing several operators will ask
          exactly that question at some point. A simple log — one row per
          reclassification, applied once and referenced every month after — is the
          difference between answering that question in thirty seconds and
          reconstructing your logic under time pressure on a call.
        </P>
        <P>
          The same log protects you the other direction, too. Six months from now,
          when the reclassification is old news and the restated figure is just "the
          number," you want a record showing the adjustment was applied correctly
          and consistently — not a memory of a decision you made once and never
          wrote down.
        </P>

        <H2>Where this shows up hardest: loyalty and labor</H2>
        <P>
          Two areas deserve special attention because the reclassifications there are
          easy to misread as operational problems. A rooms-related expense line can
          step up year over year purely because a loyalty benefit cost now routes
          through that department instead of sales and marketing — a reclassification
          answer, not a cost-control failure. And certain technology and systems
          costs were regrouped to reflect how hotels actually operate today, which
          can produce a jump that's pure classification, not spend.
        </P>
        <P>
          In both cases, the fix is the same five-step method above, applied to that
          specific account. For the labor side specifically — where the new edition
          adds enough detail that restatement intersects with a real narrative
          challenge — see{" "}
          <InternalLink href="/resources/labor-productivity-usali-12">
            our guide to USALI 12 labor reporting
          </InternalLink>
          .
        </P>

        <H2>The discipline this replaces</H2>
        <P>
          Without restatement, a GM has two bad options: compare unrestated numbers
          and let the owner draw the wrong conclusion, or quietly avoid year-over-year
          comparisons altogether and lose the credibility that comes with showing
          trend. Neither is necessary. The method above is not complicated — it's
          five steps, done once per account, maintained monthly. What it buys you is
          a report where every year-over-year number means what it appears to mean,
          which is the entire foundation the rest of your narrative sits on. For how
          to build that narrative once your numbers are restated, see{" "}
          <InternalLink href="/resources/ownership-report-narrative">
            writing the ownership report narrative owners actually read
          </InternalLink>
          , or go back to{" "}
          <InternalLink href="/">The GM Ownership Report OS</InternalLink> — the
          workbook's restatement engine turns this exact method into a calculating,
          reusable tool instead of a manual rebuild every month.
        </P>
      </ArticleLayout>
    </>
  );
}
