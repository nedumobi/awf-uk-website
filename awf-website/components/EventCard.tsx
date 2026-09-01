import Image from "next/image";
import Link from "next/link";
import { EventItem } from "@/data/events";
import { placeholderImage } from "@/lib/placeholder";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="bg-white rounded-lg border border-charcoal-100 overflow-hidden shadow-card flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image
          src={placeholderImage(event.image, 800, 500)}
          alt={`${event.title} event photo`}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-gold-600 text-sm font-medium mb-2">
          {event.displayDate} &middot; {event.location}
        </p>
        <h3 className="text-lg font-semibold text-charcoal mb-2 leading-snug">
          {event.title}
        </h3>
        <p className="text-muted text-[15px] leading-relaxed mb-5 flex-1">
          {event.summary}
        </p>
        <Link
          href={`/events/${event.slug}`}
          className="text-[15px] font-medium text-charcoal underline decoration-gold-400 decoration-2 underline-offset-4 w-fit"
        >
          View event
        </Link>
      </div>
    </article>
  );
}
