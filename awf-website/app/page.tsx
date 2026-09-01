import Image from "next/image";
import { Container, Button } from "@/components/ui";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProgrammeCard from "@/components/ProgrammeCard";
import ImpactStat from "@/components/ImpactStat";
import EventCard from "@/components/EventCard";
import NewsCard from "@/components/NewsCard";
import PartnerLogo from "@/components/PartnerLogo";
import CTASection from "@/components/CTASection";
import UliMark from "@/components/UliMark";
import { programmes } from "@/data/programmes";
import { impactStats } from "@/data/impact";
import { events } from "@/data/events";
import { news } from "@/data/news";
import { partners } from "@/data/partners";
import { placeholderImage } from "@/lib/placeholder";

export default function HomePage() {
  const upcomingEvents = events.filter((e) => !e.isPast).slice(0, 3);
  const latestStory = news[0];

  return (
    <>
      {/* 1. Hero */}
      <Hero
        heading="Building community. Celebrating heritage. Supporting lives."
        copy="Anambra Welfare Foundation UK brings people together through community support, culture, education, wellbeing and programmes that strengthen individuals, families and communities."
        imageSeed="hero-community"
        imageAlt="Community members gathered together at an AWF event"
      >
        <Button href="/our-work" variant="primary" className="bg-gold-400 text-charcoal hover:bg-gold-300">
          Explore Our Work
        </Button>
        <Button href="/get-involved" variant="secondary" className="border-cream text-cream hover:bg-cream hover:text-charcoal">
          Get Involved
        </Button>
      </Hero>

      {/* 2. Introduction */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-[26rem] rounded-lg overflow-hidden order-2 md:order-1">
              <Image
                src={placeholderImage("intro-family", 900, 1100)}
                alt="A family taking part in an AWF community event"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <UliMark variant="seed" className="w-16 h-3 text-gold-400 mb-5" />
              <h2 className="text-3xl md:text-[2.5rem] font-semibold leading-[1.15] tracking-tightish text-charcoal">
                Rooted in heritage. Focused on people.
              </h2>
              <p className="mt-5 text-muted text-[17px] leading-relaxed">
                AWF is a community organisation rooted in Anambra heritage and
                committed to strengthening individuals, families and
                communities. Through welfare, education, culture, wellbeing
                and community programmes, we create opportunities for people
                to connect, participate and thrive.
              </p>
              <Button href="/about" variant="text" className="mt-6 inline-block">
                About AWF
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Our Work */}
      <section className="py-20 md:py-28 bg-sand">
        <Container>
          <SectionHeading
            heading="What We Do"
            intro="Our programmes support people at different stages of life while strengthening the connections that make communities thrive."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.map((p) => (
              <ProgrammeCard key={p.slug} programme={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* 13. Impact */}
      <section className="py-20 md:py-24 bg-charcoal">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-cream leading-[1.15]">
              Our Community. Our Impact.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <ImpactStat key={stat.label} stat={stat} />
            ))}
          </div>
          <p className="mt-12 text-cream/70 text-[15px] max-w-md">
            Behind every number is a person, a family or a story.
          </p>
          <Button href="/impact" variant="secondary" className="mt-6 border-cream/40 text-cream hover:bg-cream hover:text-charcoal">
            See Our Impact
          </Button>
        </Container>
      </section>

      {/* 14. Featured programme */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <UliMark variant="seed" className="w-16 h-3 text-gold-400 mb-5" />
              <h2 className="text-3xl md:text-[2.5rem] font-semibold leading-[1.15] tracking-tightish text-charcoal">
                Keeping Our Heritage Alive
              </h2>
              <p className="mt-5 text-muted text-[17px] leading-relaxed">
                Our cultural education programmes help younger generations
                build stronger connections with their language, heritage and
                identity while creating opportunities for families to learn
                together.
              </p>
              <Button href="/our-work" variant="primary" className="mt-6 inline-flex">
                Discover Our Programmes
              </Button>
            </div>
            <div className="relative h-80 md:h-[26rem] rounded-lg overflow-hidden">
              <Image
                src={placeholderImage("featured-heritage", 900, 1100)}
                alt="Children taking part in a cultural heritage education session"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 15. Events */}
      <section className="py-20 md:py-28 bg-sand">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <SectionHeading heading="Upcoming Events" />
            <Button href="/events" variant="text">
              View All Events
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((e) => (
              <EventCard key={e.slug} event={e} />
            ))}
          </div>
        </Container>
      </section>

      {/* 16. Community story — editorial */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 relative h-[22rem] md:h-[30rem] rounded-lg overflow-hidden">
              <Image
                src={placeholderImage(latestStory.image, 1100, 900)}
                alt={latestStory.title}
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="md:col-span-5">
              <p className="text-gold-600 text-sm font-medium mb-3">
                Stories From Our Community
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-charcoal leading-[1.2]">
                {latestStory.title}
              </h2>
              <p className="mt-4 text-muted text-[16px] leading-relaxed">
                {latestStory.summary}
              </p>
              <Button href={`/news/${latestStory.slug}`} variant="text" className="mt-6 inline-block">
                Read Story
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Latest news grid */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid sm:grid-cols-3 gap-8">
            {news.map((a) => (
              <NewsCard key={a.slug} article={a} />
            ))}
          </div>
        </Container>
      </section>

      {/* 17. Partners */}
      <section className="py-20 md:py-24 bg-sand">
        <Container>
          <SectionHeading
            heading="Working Together"
            intro="We believe stronger communities are built through collaboration. AWF works with local authorities, charities, businesses and community organisations to create opportunities and improve outcomes for the people we serve."
          />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {partners.map((p) => (
              <PartnerLogo key={p.name} partner={p} />
            ))}
          </div>
          <Button href="/get-involved" variant="text" className="mt-8 inline-block">
            Partner With Us
          </Button>
        </Container>
      </section>

      {/* 18. Get involved CTA */}
      <CTASection
        heading="Be Part of Something Bigger"
        copy="Whether you want to volunteer, partner with us, support a programme or take part in community activities, there are many ways to get involved."
      >
        <Button href="/get-involved" variant="primary" className="bg-gold-400 text-charcoal hover:bg-gold-300">
          Get Involved
        </Button>
        <Button href="/contact" variant="secondary" className="border-cream/40 text-cream hover:bg-cream hover:text-charcoal">
          Contact Us
        </Button>
      </CTASection>

      {/* 19. Newsletter */}
      <section className="py-20">
        <Container className="max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal">
            Stay Connected
          </h2>
          <p className="mt-3 text-muted text-[16px]">
            Get updates about AWF programmes, events and community news.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center" aria-label="Newsletter signup">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email address"
              className="w-full sm:w-80 rounded border border-charcoal-100 px-4 py-3 text-[15px] focus:border-gold-400"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded bg-charcoal px-6 py-3 text-[15px] font-medium text-cream hover:bg-charcoal-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-muted">
            We'll only use your email to send AWF updates. You can unsubscribe
            at any time — see our{" "}
            <a href="/governance#privacy" className="underline decoration-gold-400 underline-offset-2">
              privacy policy
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
