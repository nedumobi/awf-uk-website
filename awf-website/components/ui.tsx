import Link from "next/link";
import { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container-content ${className}`}>{children}</div>;
}

type ButtonVariant = "primary" | "secondary" | "text";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded px-6 py-3 text-[15px] font-medium transition-colors";
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-charcoal text-cream hover:bg-charcoal-600",
    secondary:
      "border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream",
    text: "text-charcoal underline underline-offset-4 decoration-gold-400 decoration-2 hover:text-gold-600 px-0 py-0",
  };
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-gold-600 text-sm font-medium mb-3">{children}</p>
  );
}
