import type { Metadata } from "next";
import ArticleLayout, { articleSchema } from "@/components/resources/ArticleLayout";
import { H2, P, UL, InternalLink } from "@/components/resources/prose";
import JsonLd from "@/components/seo/JsonLd";

const SLUG = "ownership-report-narrative";
const TITLE = "Writing the Ownership Report Narrative Owners Actually Read";
const DESCRIPTION =
  "Most ownership reports restate the P&L and stop where the owner's real questions begin. Here's the causal-narrative discipline that gets a GM trusted instead of managed.";

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
        dek="Owners don't pay you to recap the numbers. They pay you to explain them. Here's the difference, and the four-part structure that closes the gap."
        ctaLocation={SLUG}
      >
        <P>
          There are two documents hiding inside every ownership report. The first is
          the numbers recap: revenue was down four percent, GOP margin held, payroll
          ran over. It's accurate, it's fast to write, and it tells the owner nothing
          they couldn't have found themselves in the P&L. The second is the causal
          narrative: revenue fell short because a corporate group that anchored the
          comparable period didn't repeat, transient demand held but couldn't fully
          replace it, and you protected rate rather than chasing the gap with
          discounted business. That second document is the one owners actually pay
          for.
        </P>
        <P>
          A useful test: read a paragraph from your last report and ask whether the
          owner could have written that sentence themselves from the P&L. If yes,
          it's recap. A little recap orients the reader, but a report that's entirely
          recap quietly tells the owner they don't need you to interpret the asset —
          not the impression you want to leave the month before a fee conversation.
        </P>

        <H2>The three questions every owner is actually asking</H2>
        <P>
          Underneath the specifics, almost every ownership question reduces to one of
          three. A report that answers all three before they're asked is a report
          that ends the call early.
        </P>
        <UL>
          <li>
            <strong className="text-[#071f1b] font-medium">
              "Are we making the money we expected, and if not, why?"
            </strong>{" "}
            This is the variance question, and the answer they want is causal, not
            arithmetic. They can already see that GOP missed by two points. What they
            can't see is whether that was rate, volume, mix, a one-time item, or a
            cost problem.
          </li>
          <li>
            <strong className="text-[#071f1b] font-medium">"Is this a trend or a blip?"</strong>{" "}
            Owners fear the durable problem dressed up as a bad month. Every
            unfavorable variance should get a deliberate call — transitory or
            structural — and the report should say which.
          </li>
          <li>
            <strong className="text-[#071f1b] font-medium">"Do you have it under control?"</strong>{" "}
            The real question underneath the other two. You answer it not with a
            sentence but with the whole report — naming the bad news first, having
            the response ready before it's asked.
          </li>
        </UL>
        <P>
          Every departmental paragraph you write is really answering these three:
          why the variance, trend or blip, and are you on it. Structure a section
          around that arc and it tends to write itself.
        </P>

        <H2>The four-part arc</H2>
        <P>
          The narrative that survives an asset manager's read follows the same shape
          every time: what happened, why (quantified), whether it's transitory or
          structural, and what you're doing about it. When a paragraph reads flat,
          it's almost always because one of those four is missing. A worked
          comparison makes the difference concrete. Take a labor variance:
        </P>
        <P>
          <em>Recap:</em> "Payroll was 6% over budget."
        </P>
        <P>
          <em>Narrative:</em> "Rooms payroll was $48,000 (6%) over budget. Roughly
          $30,000 reflects a market wage adjustment now in the run-rate — rate, not
          hours. About $12,000 is volume: occupancy ran ahead of budget, and the
          associated variable labor was favorable on a cost-per-occupied-room basis.
          The remaining $6,000 is overtime covering two open positions, both in final
          interviews, expected to clear next month."
        </P>
        <P>
          The second version does what the first can't: it separates what the owner
          should shrug at (rate, market-driven), what they should actually like
          (efficient volume flex), and what they should watch but see is handled
          (small, named, temporary, dated). For the full method behind that
          decomposition — increasingly necessary under the new labor-reporting
          detail — see{" "}
          <InternalLink href="/resources/labor-productivity-usali-12">
            our guide to USALI 12 labor reporting
          </InternalLink>
          .
        </P>

        <H2>Making the trend-or-blip call, and defending it</H2>
        <P>
          "Trend or blip" is the question you're implicitly answering every time you
          narrate a variance, and it deserves more than an adjective. A useful
          discipline: before you write the sentence, name the specific evidence
          behind the call. Transitory variances have a specific, nameable cause that
          doesn't repeat — a corporate group that shifted quarters, a one-time
          repair, a single vacancy now filled. Structural variances have a cause that
          persists absent a deliberate intervention — a demand pattern that's
          genuinely softening, a cost base that's stepped up and stayed there.
        </P>
        <P>
          If you can't point to the specific, nameable reason a variance won't
          repeat, you don't actually know it's transitory — you're hoping. Owners
          can tell the difference between a confident call backed by evidence and an
          optimistic guess dressed up as one, and the second kind is what erodes
          trust fastest. When you're genuinely unsure, say that too: "we're watching
          this for one more period before calling it" is a legitimate, honest
          position. A vague reassurance is not.
        </P>

        <H2>What the narrative leaves out</H2>
        <P>
          The causal-narrative discipline is not permission to write more. Most
          reports fail in the other direction once a GM commits to explaining
          instead of reciting — they over-explain, defend every line, and bury the
          one thing that matters under six things that don't. The arc is happened,
          why, trend-or-blip, response. If a sentence doesn't serve one of those four
          moves, it's decoration, and decoration is exactly what a busy owner skims
          past on the way to deciding whether they trust the page. Cut anything that
          exists to sound thorough rather than to inform a decision.
        </P>

        <H2>The one-page executive summary discipline</H2>
        <P>
          If the owner reads only one page, it's the first one. A working executive
          summary does four things in roughly half a page: states the headline result
          against budget and prior year; names the single most important reason the
          month landed where it did; surfaces anything the owner should be concerned
          about, in your own framing, before they find it themselves; and says what
          to expect next period.
        </P>
        <P>
          The hardest discipline is the third move — naming the bad news yourself, on
          page one. The instinct is to bury a soft result mid-report where it might
          not get read closely. Resist it. The owner finds it either way; the only
          question is whether they find it in your words, with the explanation
          attached, or in their own, with a phone call attached. And compress: a
          summary that lists twelve things hasn't decided which one the owner should
          hold in their head. Pick the one.
        </P>
        <P>
          A useful compression check before you send anything: if you had to delete
          every sentence in the summary but one, which one stays? Write that sentence
          first, lead with it, and build the rest of the summary as support for it
          rather than a list of equally weighted facts. An owner who reads only your
          first sentence should still walk away knowing whether the month was good,
          why, and whether you're on it.
        </P>

        <H2>Reclassifications don't belong in the narrative — they belong in a footnote</H2>
        <P>
          One discipline this narrative approach depends on: every number you
          narrate has to actually mean what it appears to mean. Since USALI 12 took
          effect, that means restating prior-year comparatives before you write about
          them — otherwise you risk building a confident, well-structured narrative
          around a variance that's actually just a reporting change. See{" "}
          <InternalLink href="/resources/usali-12-restatement-guide">
            how to restate prior-year financials for like-for-like comparisons
          </InternalLink>{" "}
          before you draft.
        </P>

        <H2>Why this is the whole job</H2>
        <P>
          The recap describes. The narrative explains, and then does one more thing
          the recap never does: shows what management is doing about it. That arc —
          happened, why, response, outlook — is what separates a report that gets a
          GM managed from one that gets a GM trusted. It's also the entire premise
          behind{" "}
          <InternalLink href="/">The GM Ownership Report OS</InternalLink> — a system
          built to make this narrative discipline repeatable every month, not
          reinvented under deadline the night before the call.
        </P>
      </ArticleLayout>
    </>
  );
}
