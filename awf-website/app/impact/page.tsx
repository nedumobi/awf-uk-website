import type { Metadata } from "next";
import { Container, Button } from "@/components/ui";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ImpactStat from "@/components/ImpactStat";
import Testimonial from "@/components/Testimonial";
import CTASection from "@/components/CTASection";
import GalleryGrid from "@/components/GalleryGrid";
import { impactStats, testimonials } from "@/data/impact";
import { programmes } from "@/data/programmes";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "See the difference AWF's programmes make across Greater Manchester's Anambra and Igbo community.",
};

export default function ImpactPage() {
  return (
    <>
      <Hero
        eyebrow="Impact"
        heading="Behind every number is a person, a family or a story."
        imageSeed="impact-hero"
        imageAlt="Community members celebrating together"
        size="compact"
      />

      {/* Stats */}
      <section className="py-20 bg-charcoal">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <ImpactStat key={stat.label} stat={stat} />
            ))}
          </div>
          <p className="mt-8 text-cream/60 text-sm max-w-md">
            Figures are updated periodically. [INSERT LAST VERIFIED DATE].
          </p>
        </Container>
      </section>

      {/* Community stories */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            heading="Community Stories"
            intro="Real stories from the people and families AWF programmes have supported."
          />
          <div className="mt-10">
            <GalleryGrid
              seeds={["impact-1", "impact-2", "impact-3", "impact-4", "impact-5"]}
              altPrefix="AWF community impact"
            />
          </div>
        </Container>
      </section>

      {/* Programme outcomes */}
      <section className="py-20 md:py-28 bg-sand">
        <Container>
          <SectionHeading heading="Programme Outcomes" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.map((p) => (
              <div key={p.slug} className="bg-white rounded-lg border border-charcoal-100 p-6 shadow-card">
                <h3 className="font-semibold text-charcoal mb-2">{p.title}</h3>
                <p className="text-muted text-[15px] leading-relaxed">
                  [INSERT OUTCOME SUMMARY for {p.title}]
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading heading="What People Say" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Testimonial key={t.name + t.context} testimonial={t} />
            ))}
          </div>
        </Container>
      </section>

      {/* Annual highlights / reports */}
      <section className="py-20 md:py-28 bg-sand">
        <Container className="max-w-3xl">
          <SectionHeading heading="Annual Highlights & Reports" />
          <p className="mt-6 text-muted text-[17px] leading-relaxed">
            [INSERT ANNUAL HIGHLIGHTS SUMMARY]. Our annual report and
            accounts are available on our{" "}
            <a href="/governance" className="underline decoration-gold-400 underline-offset-2">
              Governance &amp; Transparency
            </a>{" "}
            page.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href="/governance" variant="secondary">
              View Annual Report
            </Button>
          </div>
        </Container>
      </section>

      <CTASection
        heading="Funders and partners — see how your support helps"
        copy="We're happy to share detailed impact reporting with funders, sponsors and partner organisations."
      >
        <Button href="/contact" variant="primary" className="bg-gold-400 text-charcoal hover:bg-gold-300">
          Get In Touch
        </Button>
      </CTASection>
    </>
  );
}
