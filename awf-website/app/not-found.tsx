import Link from "next/link";
import { Container, Button } from "@/components/ui";
import UliMark from "@/components/UliMark";

export default function NotFound() {
  return (
    <section className="py-32">
      <Container className="max-w-xl text-center">
        <UliMark variant="knot" className="w-10 h-10 text-gold-400 mx-auto mb-6" />
        <h1 className="text-3xl md:text-4xl font-semibold text-charcoal">
          We couldn't find that page
        </h1>
        <p className="mt-4 text-muted text-[16px] leading-relaxed">
          The page you're looking for may have moved or no longer exists.
          Here are a few places to start instead.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Button href="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
        <p className="mt-10 text-sm text-muted">
          Looking for something specific?{" "}
          <Link href="/our-work" className="underline decoration-gold-400 underline-offset-2">
            Browse our programmes
          </Link>{" "}
          or{" "}
          <Link href="/events" className="underline decoration-gold-400 underline-offset-2">
            see upcoming events
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
