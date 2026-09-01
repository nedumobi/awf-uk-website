import type { Metadata } from "next";
import { Container } from "@/components/ui";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming and past events from Anambra Welfare Foundation UK.",
};

export default function EventsPage() {
  const upcoming = events.filter((e) => !e.isPast);
  const past = events.filter((e) => e.isPast);

  return (
    <>
      <Hero
        eyebrow="Events"
        heading="Join us at an upcoming event"
        copy="From our flagship Iriji Festival to welfare drop-ins and wellbeing evenings, there's a way to connect with the community all year round."
        imageSeed="events-hero"
        imageAlt="Community members at an AWF event"
        size="compact"
      />

      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-2xl font-semibold text-charcoal mb-8">Upcoming events</h2>
          {upcoming.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcoming.map((e) => (
                <EventCard key={e.slug} event={e} />
              ))}
            </div>
          ) : (
            <p className="text-muted">
              No events are currently scheduled — check back soon.
            </p>
          )}
        </Container>
      </section>

      {past.length > 0 && (
        <section className="py-16 md:py-24 bg-sand">
          <Container>
            <h2 className="text-2xl font-semibold text-charcoal mb-8">Past events</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {past.map((e) => (
                <EventCard key={e.slug} event={e} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
