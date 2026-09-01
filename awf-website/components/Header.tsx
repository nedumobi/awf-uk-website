"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our Work" },
  { href: "/impact", label: "Impact" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News & Stories" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 bg-cream/95 backdrop-blur border-b transition-[padding] ${
        scrolled ? "border-charcoal-100 py-2" : "border-transparent py-4"
      }`}
    >
      <div className="container-content flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setMenuOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal text-gold-300 font-display font-bold text-sm">
            AWF
          </span>
          <span className="font-display font-semibold text-charcoal leading-tight text-[15px]">
            Anambra Welfare
            <br className="hidden sm:block" /> Foundation UK
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] text-charcoal-500 hover:text-gold-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/get-involved"
            className="inline-flex items-center rounded bg-charcoal px-5 py-2.5 text-[15px] font-medium text-cream hover:bg-charcoal-600 transition-colors"
          >
            Get Involved
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-charcoal"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-charcoal-100 bg-cream">
          <nav className="container-content flex flex-col py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-[16px] text-charcoal-500 border-b border-charcoal-100 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-involved"
              className="mt-4 inline-flex items-center justify-center rounded bg-charcoal px-5 py-3 text-[15px] font-medium text-cream"
              onClick={() => setMenuOpen(false)}
            >
              Get Involved
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
