import { ReactNode } from "react";
import { Container } from "./ui";
import UliMark from "./UliMark";

export default function CTASection({
  heading,
  copy,
  children,
}: {
  heading: string;
  copy?: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-charcoal">
      <Container className="py-20 text-center">
        <UliMark variant="seed" className="w-16 h-3 text-gold-400 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-semibold text-cream max-w-2xl mx-auto leading-[1.15]">
          {heading}
        </h2>
        {copy && (
          <p className="mt-4 text-cream/80 text-[17px] max-w-xl mx-auto leading-relaxed">
            {copy}
          </p>
        )}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">{children}</div>
      </Container>
    </section>
  );
}
