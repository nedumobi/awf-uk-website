import type { Metadata } from "next";
import { Container, Button } from "@/components/ui";
import Hero from "@/components/Hero";
import ProgrammeCard from "@/components/ProgrammeCard";
import CTASection from "@/components/CTASection";
import { programmes } from "@/data/programmes";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore AWF's six programme areas — welfare, culture, young people, wellbeing, education and community integration.",
};

export default function OurWorkPage() {
  return (
    <>
      <Hero
        eyebrow="Our Work"
        heading="Supporting people. Strengthening communities."
        copy="Six programme areas, one shared purpose — helping individuals, families and communities across Greater Manchester to connect, participate and thrive."
        imageSeed="ourwork-hero"
        imageAlt="Community members taking part in an AWF programme"
        size="compact"
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.map((p) => (
              <ProgrammeCard key={p.slug} programme={p} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading="Want to get involved with any of our programmes?"
        copy="Whether as a volunteer, participant or partner, there's a way for you to take part."
      >
        <Button href="/get-involved" variant="primary" className="bg-gold-400 text-charcoal hover:bg-gold-300">
          Get Involved
        </Button>
      </CTASection>
    </>
  );
}
