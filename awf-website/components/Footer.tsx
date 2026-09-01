import Link from "next/link";
import UliMark from "./UliMark";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our Work" },
  { href: "/impact", label: "Impact" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News & Stories" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { href: "/governance#privacy", label: "Privacy Policy" },
  { href: "/governance#safeguarding", label: "Safeguarding" },
  { href: "/governance", label: "Governance" },
  { href: "/governance#terms", label: "Terms" },
];

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X", href: "https://x.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-content pt-16 pb-10">
        <UliMark variant="flow" className="w-32 h-4 text-gold-400 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-400 text-charcoal font-display font-bold text-sm">
                AWF
              </span>
              <span className="font-display font-semibold text-cream text-[15px]">
                Anambra Welfare Foundation UK
              </span>
            </Link>
            <p className="text-charcoal-200 text-[15px] max-w-sm leading-relaxed">
              A community organisation rooted in Anambra heritage, supporting
              individuals, families and communities across Greater Manchester
              through welfare, culture, education and wellbeing programmes.
            </p>
            <ul className="flex gap-4 mt-6">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-charcoal-200 hover:text-gold-300 text-sm underline underline-offset-4"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-cream font-display font-semibold text-sm mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-charcoal-200 hover:text-gold-300 text-[15px]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-cream font-display font-semibold text-sm mb-4">
              Organisation
            </h3>
            <ul className="space-y-2.5 mb-6">
              {LEGAL_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-charcoal-200 hover:text-gold-300 text-[15px]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-charcoal-200 text-[15px]">
              Registered Charity
              <br />
              No. 1196674
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-charcoal-400/40 flex flex-col sm:flex-row justify-between gap-3 text-[13px] text-charcoal-200">
          <p>© {new Date().getFullYear()} Anambra Welfare Foundation UK. All rights reserved.</p>
          <p>Registered charity in England &amp; Wales, No. 1196674</p>
        </div>
      </div>
    </footer>
  );
}
