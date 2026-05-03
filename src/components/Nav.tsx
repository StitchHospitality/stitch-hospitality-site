"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
            className="h-8 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-200"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Services", href: "#services" },
            { label: "How It Works", href: "#how-it-works" },
            { label: "Results", href: "#results" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#071f1b]/70 hover:text-[#071f1b] transition-colors tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#intake-form"
            className="inline-flex items-center gap-2 bg-[#ff6464] hover:bg-[#e54d4d] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#ff6464]/25"
          >
            Let&apos;s Build Your Automation
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#fafaf7] border-t border-[#e5e3db] px-6 py-6 flex flex-col gap-4">
          {[
            { label: "Services", href: "#services" },
            { label: "How It Works", href: "#how-it-works" },
            { label: "Results", href: "#results" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-[#071f1b] hover:text-[#ff6464] transition-colors py-1"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#intake-form"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex justify-center bg-[#ff6464] hover:bg-[#e54d4d] text-white font-medium px-5 py-3 rounded-full transition-colors"
          >
            Let&apos;s Build Your Automation
          </a>
        </div>
      )}
    </header>
  );
}
