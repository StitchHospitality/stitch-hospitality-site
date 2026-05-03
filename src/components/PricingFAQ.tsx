"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "What do I need to get started?",
    answer:
      "A self-hosted n8n instance (we can help you set one up), a Gmail or Outlook account for sending, and about an hour to fill in your Brand DNA spreadsheet with your hotel's details, imagery, and rate structures.",
  },
  {
    question: "Are there ongoing monthly costs?",
    answer:
      "The $2,500 setup fee is one-time. Your only ongoing costs are your n8n hosting (typically $20–50/month if cloud-hosted, or free if self-hosted on your own server) and AI API usage which runs about $15–30/month depending on inquiry volume.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most hotels are live within 5–7 business days. The biggest variable is how quickly you complete your Brand DNA spreadsheet — once that's done, the technical setup takes 1–2 days.",
  },
  {
    question: "Does this replace my sales team?",
    answer:
      "No. It handles the time-consuming parsing and initial proposal draft. Your team still reviews every proposal before it goes out, and handles all client relationships, negotiations, and follow-ups. Think of it as giving your DOS a dedicated assistant.",
  },
  {
    question: "What if I need changes after setup?",
    answer:
      "You get 30 days of support included. After that, you own the workflow entirely and can modify it yourself, or reach out for additional support as needed.",
  },
  {
    question: "Can I see a demo first?",
    answer:
      "Absolutely. Book a free consultation and we'll walk you through a live demo using real hotel data, so you can see exactly how inquiries are parsed and proposals are generated.",
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[#e5e3db]">
      {FAQ_ITEMS.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-6 py-6 text-left group"
            aria-expanded={openIndex === i}
          >
            <span className="text-[#071f1b] font-medium group-hover:text-[#ff6464] transition-colors">
              {item.question}
            </span>
            <span
              className={`shrink-0 w-6 h-6 rounded-full border border-[#e5e3db] flex items-center justify-center text-[#8b9190] group-hover:border-[#ff6464]/40 group-hover:text-[#ff6464] transition-all duration-200 ${
                openIndex === i ? "rotate-45" : ""
              }`}
            >
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </button>
          {openIndex === i && (
            <div className="pb-6 -mt-2">
              <p className="text-sm text-[#071f1b]/60 font-light leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
