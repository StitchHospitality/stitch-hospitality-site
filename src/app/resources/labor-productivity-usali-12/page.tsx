import type { Metadata } from "next";
import ArticleLayout, { articleSchema } from "@/components/resources/ArticleLayout";
import { H2, P, InternalLink } from "@/components/resources/prose";
import JsonLd from "@/components/seo/JsonLd";

const SLUG = "labor-productivity-usali-12";
const TITLE = "USALI 12 Labor Reporting: Productivity Per Occupied Room, Explained";
const DESCRIPTION =
  "USALI 12 makes labor visible in standardized detail for the first time — FTEs per occupied room, wage-rate versus volume, management versus line roles. Here's how to narrate it instead of getting caught by it.";

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
        dek="For the first time, owners can see your staffing model in standardized detail. That's a gift for a well-run department and a trap for a report that can't explain a variance."
        ctaLocation={SLUG}
      >
        <P>
          Of everything the 12th Revised Edition changed, labor is the one that will
          change your ownership conversations the most. The new edition pushes far
          more detail into view — headcount expressed as full-time equivalents by
          department, and the productivity ratios that fall out of it. Owners and
          asset managers can now see, in a standardized way, how many people it takes
          to run each part of your hotel. That's a gift for an operator who runs an
          efficient department, and a trap for anyone whose only explanation for a
          payroll variance is "occupancy was up."
        </P>

        <H2>What owners can now see that they never could</H2>
        <P>
          The headline shift is that labor is no longer a single blunt number.
          Expressed as full-time equivalents by department, it supports ratios that
          used to require a special study: FTEs per occupied room in rooms, FTEs per
          cover in food and beverage, the split between management and line roles,
          effective hourly cost by area. An owner's analyst can now benchmark your
          labor model against your own history — and eventually against other
          properties — with real precision.
        </P>
        <P>
          The operator's job is to get ahead of that transparency by narrating it
          first. Show that your rooms department runs at a defensible number of FTEs
          per occupied room, and that the number moved for a reason you can name, and
          you've converted a scrutiny risk into a credibility asset. Stay silent and
          you've left the owner's analyst to draw their own conclusion from a ratio
          you never framed.
        </P>
        <P>
          The ratio itself is simple arithmetic — FTEs divided by occupied rooms per
          day — but the number only means something in context. A rooms department
          running at, say, 0.25 FTEs per occupied room isn't meaningfully efficient
          or inefficient on its own; it's efficient relative to your own trailing
          history, relative to budget, or relative to a comp set once that data
          exists. Report the ratio next to a comparison point, every time. A number
          with nothing to compare against invites the reader to supply their own
          benchmark, and you don't want that benchmark to be a guess.
        </P>

        <H2>Management versus line roles</H2>
        <P>
          The new detail also supports a split between management and line
          headcount, and that split carries its own signal. A department that's
          management-heavy relative to its line staff can mean a few different
          things — a genuinely over-managed structure, a property in a staffing
          transition carrying overlap temporarily, or a service model that requires
          more supervisory presence than a comparable property. All three are
          defensible; none of them are defensible if you've never looked at the
          ratio yourself before an owner points it out. Know your own management-
          to-line split before you're asked about it, and have the one-sentence
          reason ready if it looks unusual.
        </P>

        <H2>Two very different things hiding inside every labor variance</H2>
        <P>
          Every meaningful payroll variance is some mix of two things, and owners
          react to them in opposite ways. Wage inflation is the same work costing
          more — market wage movement, a new minimum, a benefits step-up. It's
          largely outside your control, it affects your competitors too, and an
          owner hears it as "the environment," not "the operator." Structural
          inefficiency is more hours than the volume warranted — a schedule that
          didn't flex down with occupancy, overtime covering a vacancy, a service
          model that quietly got heavier. This is the operator's to own, and it
          compounds if it isn't named.
        </P>
        <P>
          A raw payroll variance blends the two, and a blended number invites the
          worst interpretation. Decomposing it — this much was rate, this much was
          hours, this much was mix — is the single most valuable move in the whole
          labor section.
        </P>

        <H2>The same variance, three ways</H2>
        <P>
          Say rooms-department payroll came in six percent over budget for the month.
          Here's the same fact, written three ways. Only the third survives an asset
          manager.
        </P>
        <P>
          <strong className="text-[#071f1b] font-medium">Version 1 — the recap.</strong>{" "}
          "Rooms payroll was $48,000 (6%) over budget." True, and useless. It
          restates the P&L and leaves every real question open.
        </P>
        <P>
          <strong className="text-[#071f1b] font-medium">Version 2 — the excuse.</strong>{" "}
          "Rooms payroll was over budget due to higher-than-expected occupancy and
          wage pressure." Better, but unquantified and self-serving — it silently
          assumes the labor flexed appropriately, which is exactly what an owner
          won't grant without evidence.
        </P>
        <P>
          <strong className="text-[#071f1b] font-medium">
            Version 3 — the decomposition.
          </strong>{" "}
          "Rooms payroll was $48,000 (6%) over budget. Of that, approximately
          $30,000 reflects the market wage adjustment that took effect this quarter —
          rate, not hours, and now in the run-rate. Roughly $12,000 is volume:
          occupancy ran four points ahead of budget, and the associated variable
          labor is favorable on a cost-per-occupied-room basis. The remaining ~$6,000
          is overtime covering two open housekeeping positions, both in final
          interviews; we expect the overtime to clear by next month."
        </P>
        <P>
          The third version separates what the owner should shrug at, what they
          should actually like, and what they should watch but see is handled. It
          converts a six-percent miss into evidence that the operator is in complete
          control of the labor line — which is exactly the muscle the new edition
          rewards. For the full arc this decomposition sits inside, see{" "}
          <InternalLink href="/resources/ownership-report-narrative">
            writing the ownership report narrative owners actually read
          </InternalLink>
          .
        </P>

        <H2>Building the habit, not just the one paragraph</H2>
        <P>
          The decomposition above works for a single variance in a single month. The
          real value shows up when it's a standing habit rather than a one-time
          rescue for a bad number. Run the same rate-versus-volume-versus-other
          split every month, even in months where payroll lands close to budget — a
          department that's on budget in aggregate can still be masking an
          overstaffed line covering an understaffed one, and you'll only catch that
          by decomposing routinely rather than only when the total misses. The
          discipline is cheap to run and expensive to skip, because the month you
          skip it is usually the month an owner asks.
        </P>

        <H2>Contracted, leased, and cluster labor</H2>
        <P>
          One more classification discipline worth naming: not all labor sits on
          your payroll the same way. Some is contracted, some leased, some shared
          across a cluster of properties. The new edition cares about how these are
          represented so productivity ratios mean what they appear to mean — if
          contracted labor is doing work that would otherwise show up as FTEs, a
          headcount ratio that ignores it will flatter you in a way a sophisticated
          owner will see through. Classify consistently, disclose the model, and make
          sure your FTE story reflects the labor actually running the hotel, not just
          the names on direct payroll.
        </P>

        <H2>Where this intersects with reclassification</H2>
        <P>
          Labor isn't just a new-detail story — some of it is a reclassification
          story too, and the two get confused easily. If a labor-adjacent cost moved
          homes under the new edition, a naive year-over-year comparison will read
          the move as a performance change. Before you narrate a labor variance
          against prior year, confirm the comparative is restated onto the current
          classification — see{" "}
          <InternalLink href="/resources/usali-12-restatement-guide">
            our restatement guide
          </InternalLink>{" "}
          for the method.
        </P>
        <P>
          Get the decomposition right and labor becomes the section of your report
          that builds the most trust, not the one that invites the most questions.
          <InternalLink href="/"> The GM Ownership Report OS</InternalLink> includes a
          workbook tab built specifically to run this decomposition — wage-rate,
          volume, and overtime, reconciled to the total variance — every month,
          without rebuilding the math from scratch.
        </P>
      </ArticleLayout>
    </>
  );
}
