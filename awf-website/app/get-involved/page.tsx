import type { Metadata } from "next";
import { Container, Button } from "@/components/ui";
import Hero from "@/components/Hero";
import UliMark from "@/components/UliMark";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, join the community, partner with us or sponsor a programme at Anambra Welfare Foundation UK.",
};

const pathways = [
  {
    title: "Volunteer",
    copy: "Give your time to support AWF programmes and events — from festival days to ongoing welfare support.",
    cta: "Become a Volunteer",
    href: "/contact",
  },
  {
    title: "Join Our Community",
    copy: "Become part of AWF's community, take part in events and stay connected with what's happening.",
    cta: "Get Involved",
    href: "/contact",
  },
  {
    title: "Partner With Us",
    copy: "We work with local authorities, universities, charities, businesses and community organisations. If your organisation shares our goals, we'd love to talk.",
    cta: "Discuss a Partnership",
    href: "/contact",
  },
  {
    title: "Sponsor a Programme",
    copy: "Sponsorship helps us sustain and grow our welfare, culture, education and wellbeing programmes. [INSERT SPONSORSHIP PACKAGE DETAIL].",
    cta: "Discuss Sponsorship",
    href: "/contact",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <Hero
        eyebrow="Get Involved"
        heading="Help us build stronger communities."
        imageSeed="getinvolved-hero"
        imageAlt="Volunteers and community members working together"
        size="compact"
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid sm:grid-cols-2 gap-8">
            {pathways.map((p) => (
              <div key={p.title} className="bg-white border border-charcoal-100 rounded-lg p-8 shadow-card flex flex-col">
                <UliMark variant="knot" className="w-8 h-8 text-gold-400 mb-5" />
                <h2 className="text-xl font-semibold text-charcoal mb-3">{p.title}</h2>
                <p className="text-muted text-[15px] leading-relaxed mb-6 flex-1">{p.copy}</p>
                <Button href={p.href} variant="secondary" className="w-fit">
                  {p.cta}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Support our work */}
      <section className="py-20 md:py-28 bg-charcoal">
        <Container className="max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-cream leading-[1.15]">
            Support Our Work
          </h2>
          <p className="mt-4 text-cream/80 text-[17px] leading-relaxed">
            Financial support helps us reach more people across the
            community. [INSERT DONATION/PAYMENT INTEGRATION] — online giving
            is coming soon. In the meantime, please get in touch to discuss
            how you can support AWF directly.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button href="/contact" variant="primary" className="bg-gold-400 text-charcoal hover:bg-gold-300">
              Contact Us About Giving
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
