"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "Do I need any technical skills?",
    answer:
      "No. You fill in a spreadsheet and give us email access. We handle all the technical setup, hosting, and maintenance.",
  },
  {
    question: "What if I need to update my rates or add a new event space?",
    answer:
      "Just let us know. Rate changes, new room types, updated photos — we handle the Brand DNA updates as part of your monthly support.",
  },
  {
    question: "How long does the Brand DNA spreadsheet take?",
    answer:
      "About an hour. We provide a pre-formatted template with example data so you know exactly what goes where. We walk through it together on the kickoff call.",
  },
  {
    question: "Can I see a demo before I commit?",
    answer:
      "Yes. Book a free consultation and we'll show you a live demo with real hotel data — you'll see exactly how inquiries get parsed and proposals get generated.",
  },
  {
    question: "What happens if something breaks?",
    answer:
      "We monitor daily. If a workflow fails or an email doesn't send, we catch it and fix it — usually before your team even notices.",
  },
  {
    question: "Can I cancel the monthly support?",
    answer:
      "Yes, anytime. If you cancel, we transfer the workflow and credentials to you. You own everything we built — there's no lock-in.",
  },
];

export default function WhatToExpectFAQ() {
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
