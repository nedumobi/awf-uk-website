import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Button } from "@/components/ui";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import CTASection from "@/components/CTASection";
import { programmes } from "@/data/programmes";
import { events } from "@/data/events";

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const programme = programmes.find((p) => p.slug === params.slug);
  if (!programme) return {};
  return {
    title: programme.title,
    description: programme.shortDescription,
  };
}

export default function ProgrammeDetailPage({ params }: { params: { slug: string } }) {
  const programme = programmes.find((p) => p.slug === params.slug);
  if (!programme) notFound();

  const relatedEvents = events
    .filter((e) => e.programmeCategory === programme.title && !e.isPast)
    .slice(0, 3);

  return (
    <>
      <Hero
        eyebrow="Our Work"
        heading={programme.title}
        copy={programme.intro}
        imageSeed={programme.image}
        imageAlt={`Photo representing the ${programme.title} programme`}
        size="compact"
      />

      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-charcoal mb-4">Why it matters</h2>
          <p className="text-muted text-[17px] leading-relaxed">{programme.whyItMatters}</p>

          <h2 className="text-2xl font-semibold text-charcoal mt-12 mb-4">What we do</h2>
          <ul className="space-y-3">
            {programme.whatWeDo.map((item) => (
              <li key={item} className="flex gap-3 text-muted text-[16px] leading-relaxed">
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-charcoal mt-12 mb-4">Who it supports</h2>
          <p className="text-muted text-[17px] leading-relaxed">{programme.whoItSupports}</p>

          <h2 className="text-2xl font-semibold text-charcoal mt-12 mb-4">Example activities</h2>
          <ul className="space-y-3">
            {programme.exampleActivities.map((item) => (
              <li key={item} className="flex gap-3 text-muted text-[16px] leading-relaxed">
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {relatedEvents.length > 0 && (
        <section className="py-16 md:py-24 bg-sand">
          <Container>
            <h2 className="text-2xl font-semibold text-charcoal mb-8">Related events</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedEvents.map((e) => (
                <EventCard key={e.slug} event={e} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection heading={`Want to support ${programme.title}?`}>
        <Button href="/get-involved" variant="primary" className="bg-gold-400 text-charcoal hover:bg-gold-300">
          Get Involved
        </Button>
      </CTASection>
    </>
  );
}
