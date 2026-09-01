import type { Metadata } from "next";
import Image from "next/image";
import { Container, Button } from "@/components/ui";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import TeamMemberCard from "@/components/TeamMemberCard";
import CTASection from "@/components/CTASection";
import UliMark from "@/components/UliMark";
import { trustees } from "@/data/team";
import { placeholderImage } from "@/lib/placeholder";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Anambra Welfare Foundation UK — our story, mission, vision, values and leadership.",
};

const values = [
  { name: "Community", desc: "We put the community's needs at the centre of everything we do, working alongside people rather than for them." },
  { name: "Compassion", desc: "We meet people where they are, with understanding and without judgement." },
  { name: "Heritage", desc: "We celebrate and protect Anambra and Igbo culture as something to be shared and passed on." },
  { name: "Inclusion", desc: "We welcome everyone, regardless of background, into the life of our community." },
  { name: "Integrity", desc: "We act openly and honestly, and hold ourselves accountable to the people we serve." },
  { name: "Service", desc: "We show up consistently for our community, in ways big and small." },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About AWF"
        heading="A community built on heritage, service and belonging"
        imageSeed="about-hero"
        imageAlt="AWF community members at a gathering"
        size="compact"
      />

      {/* Who we are */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <UliMark variant="seed" className="w-16 h-3 text-gold-400 mb-5" />
              <h2 className="text-3xl md:text-4xl font-semibold leading-[1.15] text-charcoal">
                Who We Are
              </h2>
              <p className="mt-5 text-muted text-[17px] leading-relaxed">
                Anambra Welfare Foundation UK (AWF) is a community
                organisation rooted in Anambra heritage and contributing to
                stronger communities across Greater Manchester. We bring
                people together through welfare support, cultural
                celebration, education and wellbeing — helping individuals,
                families and the wider community to connect, participate and
                thrive.
              </p>
              <p className="mt-4 text-muted text-[17px] leading-relaxed">
                [INSERT AWF HISTORY] — this section should describe how AWF
                began, the community need it responds to, and how the
                organisation has grown.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src={placeholderImage("about-who", 900, 1000)}
                alt="AWF volunteers and community members"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Our story */}
      <section className="py-20 md:py-28 bg-sand">
        <Container className="max-w-3xl">
          <SectionHeading heading="Our Story" />
          <p className="mt-6 text-muted text-[17px] leading-relaxed">
            [INSERT AWF HISTORY] — AWF grew from a shared commitment among
            members of the Anambra community in Greater Manchester to look
            after one another, celebrate where we come from, and build a
            stronger future for the next generation. This section should
            outline key milestones, founding members and the organisation's
            journey to becoming a registered charity.
          </p>
        </Container>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white border border-charcoal-100 rounded-lg p-8 shadow-card">
              <h3 className="text-xl font-semibold text-charcoal mb-3">Our Mission</h3>
              <p className="text-muted text-[16px] leading-relaxed">
                To strengthen individuals, families and communities through
                support, education, cultural connection and opportunities
                that enable people to thrive.
              </p>
            </div>
            <div className="bg-white border border-charcoal-100 rounded-lg p-8 shadow-card">
              <h3 className="text-xl font-semibold text-charcoal mb-3">Our Vision</h3>
              <p className="text-muted text-[16px] leading-relaxed">
                A connected, confident and thriving community where heritage
                is celebrated, people are supported and future generations
                are empowered.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-charcoal">
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold text-cream leading-[1.15] max-w-xl">
            Our Values
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.name} className="border-t border-gold-400/40 pt-5">
                <h3 className="text-cream font-display font-semibold text-lg mb-2">
                  {v.name}
                </h3>
                <p className="text-cream/75 text-[15px] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            heading="Leadership & Trustees"
            intro="AWF is led by a board of trustees who volunteer their time and expertise to guide the organisation."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustees.map((t) => (
              <TeamMemberCard key={t.name} member={t} />
            ))}
          </div>
        </Container>
      </section>

      {/* Governance */}
      <section className="py-20 md:py-28 bg-sand">
        <Container className="max-w-3xl">
          <SectionHeading heading="Governance" />
          <p className="mt-6 text-muted text-[17px] leading-relaxed">
            AWF is a registered charity in England &amp; Wales (Charity No.
            1196674), governed by a board of trustees and operated in line
            with Charity Commission requirements. Read more on our{" "}
            <a href="/governance" className="underline decoration-gold-400 underline-offset-2">
              Governance &amp; Transparency
            </a>{" "}
            page.
          </p>
        </Container>
      </section>

      <CTASection
        heading="Want to know more about AWF?"
        copy="We're always happy to talk to community members, partners and funders about our work."
      >
        <Button href="/contact" variant="primary" className="bg-gold-400 text-charcoal hover:bg-gold-300">
          Contact Us
        </Button>
      </CTASection>
    </>
  );
}
