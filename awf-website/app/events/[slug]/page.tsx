import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Button } from "@/components/ui";
import Hero from "@/components/Hero";
import GalleryGrid from "@/components/GalleryGrid";
import EventCard from "@/components/EventCard";
import { events } from "@/data/events";
import { partners } from "@/data/partners";
import PartnerLogo from "@/components/PartnerLogo";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const event = events.find((e) => e.slug === params.slug);
  if (!event) return {};
  return { title: event.title, description: event.summary };
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = events.find((e) => e.slug === params.slug);
  if (!event) notFound();

  const related = events
    .filter((e) => e.slug !== event.slug && e.programmeCategory === event.programmeCategory)
    .slice(0, 3);

  return (
    <>
      <Hero
        eyebrow={event.programmeCategory}
        heading={event.title}
        copy={`${event.displayDate} · ${event.location}`}
        imageSeed={event.image}
        imageAlt={`Photo for ${event.title}`}
        size="compact"
      >
        {event.registrationUrl && !event.isPast && (
          <Button href={event.registrationUrl} variant="primary" className="bg-gold-400 text-charcoal hover:bg-gold-300">
            Register
          </Button>
        )}
      </Hero>

      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <p className="text-muted text-[17px] leading-relaxed">{event.description}</p>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-sand">
        <Container>
          <h2 className="text-2xl font-semibold text-charcoal mb-8">Gallery</h2>
          <GalleryGrid
            seeds={[`${event.image}-1`, `${event.image}-2`, `${event.image}-3`, `${event.image}-4`, `${event.image}-5`]}
            altPrefix={event.title}
          />
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-2xl font-semibold text-charcoal mb-8">Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {partners.map((p) => (
              <PartnerLogo key={p.name} partner={p} />
            ))}
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-16 md:py-24 bg-sand">
          <Container>
            <h2 className="text-2xl font-semibold text-charcoal mb-8">Related events</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((e) => (
                <EventCard key={e.slug} event={e} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
