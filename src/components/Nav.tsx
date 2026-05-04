"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Results", href: "/#results" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "What to Expect", href: "/what-to-expect" },
];

const SOLUTION_LINKS = [
  { label: "Hotel RFP Automation", href: "/hotel-rfp-automation" },
  { label: "Event Inquiry Parsing", href: "/event-inquiry-parsing-for-hotels" },
  { label: "Hotel Proposal Automation", href: "/hotel-proposal-automation" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fafaf7]/95 backdrop-blur-md shadow-sm border-b border-[#e5e3db]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="Stitch Hospitality"
            width={120}
            height={62}
            priority
            className="h-12 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-200"
          />
        </Link>

        {/* Hamburger */}
        <button
          className="flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-[#071f1b] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#071f1b] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#071f1b] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="bg-[#fafaf7] border-t border-[#e5e3db] px-6 py-6 flex flex-col gap-1">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-[#071f1b] hover:text-[#ff6464] transition-colors py-2"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-[#e5e3db]">
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#8b9190] mb-2">
              Solutions
            </p>
            {SOLUTION_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[#071f1b]/70 hover:text-[#ff6464] transition-colors py-2 block"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
