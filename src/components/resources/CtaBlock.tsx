import { STRIPE_LINK_PDF, STRIPE_LINK_FULL, withUtm } from "@/components/ownership-report/stripeLinks";

export default function CtaBlock({ location }: { location: string }) {
  return (
    <div className="rounded-3xl bg-[#071f1b] p-8 lg:p-10 text-center">
      <h2 className="text-2xl lg:text-3xl text-white mb-3">
        The GM Ownership Report OS
      </h2>
      <p className="text-white/60 font-light leading-relaxed mb-8 max-w-xl mx-auto">
        The playbook, workbook, template, and prompts to write this report the way
        this article argues for — built by a sitting GM, designed for USALI 12.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href={withUtm(STRIPE_LINK_FULL, `resources_${location}`)}
          className="inline-flex items-center justify-center gap-2 bg-[#ff6464] hover:bg-[#e54d4d] text-white font-medium px-7 py-4 rounded-full transition-all duration-200"
        >
          Get the Full OS — $99
        </a>
        <a
          href={withUtm(STRIPE_LINK_PDF, `resources_${location}`)}
          className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-medium px-7 py-4 rounded-full transition-all duration-200"
        >
          Start with the PDF — $29
        </a>
      </div>
    </div>
  );
}
