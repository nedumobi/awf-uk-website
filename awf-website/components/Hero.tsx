import Image from "next/image";
import { ReactNode } from "react";
import { placeholderImage } from "@/lib/placeholder";
import { Container } from "./ui";

export default function Hero({
  eyebrow,
  heading,
  copy,
  imageSeed,
  imageAlt,
  children,
  size = "large",
}: {
  eyebrow?: string;
  heading: string;
  copy?: string;
  imageSeed: string;
  imageAlt: string;
  children?: ReactNode;
  size?: "large" | "compact";
}) {
  return (
    <section className="relative">
      <div className={`relative w-full ${size === "large" ? "h-[78vh] min-h-[520px]" : "h-[42vh] min-h-[320px]"}`}>
        <Image
          src={placeholderImage(imageSeed, 1800, 1100)}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-700/85 via-charcoal-700/25 to-charcoal-700/10" />
        <div className="absolute inset-0 flex items-end">
          <Container className="pb-14 md:pb-20">
            <div className="max-w-2xl">
              {eyebrow && (
                <p className="text-gold-300 text-sm font-medium mb-4">{eyebrow}</p>
              )}
              <h1 className="text-4xl md:text-6xl font-semibold text-cream leading-[1.05] tracking-tightish">
                {heading}
              </h1>
              {copy && (
                <p className="mt-5 text-cream/90 text-lg leading-relaxed max-w-xl">
                  {copy}
                </p>
              )}
              {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
