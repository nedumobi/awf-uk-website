import type { Metadata } from "next";
import { Container } from "@/components/ui";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Governance & Transparency",
  description:
    "Governance, trustees, annual reports, safeguarding and policies for Anambra Welfare Foundation UK.",
};

const sections = [
  {
    id: "governance-overview",
    title: "About Our Governance",
    body: "AWF is a registered charity in England & Wales (Charity No. 1196674), governed by a board of trustees who oversee the organisation's strategy, finances and compliance with charity law.",
  },
  {
    id: "trustees",
    title: "Trustees",
    body: "[INSERT TRUSTEE LIST AND REGISTER LINK] — see also our About page for trustee biographies.",
  },
  {
    id: "annual-reports",
    title: "Annual Reports",
    body: "[INSERT LINK TO ANNUAL REPORT] — our latest annual report and trustees' report will be made available here.",
  },
  {
    id: "financial-accounts",
    title: "Financial Accounts",
    body: "[INSERT LINK TO ACCOUNTS] — our latest independently examined accounts, as filed with the Charity Commission, will be made available here.",
  },
  {
    id: "safeguarding",
    title: "Safeguarding",
    body: "[INSERT SAFEGUARDING POLICY SUMMARY] — AWF is committed to the safety and wellbeing of all children and adults at risk who take part in our activities. Our full safeguarding policy is available on request.",
  },
  {
    id: "privacy",
    title: "Privacy",
    body: "[INSERT PRIVACY POLICY] — this section will set out how AWF collects, uses and protects personal data in line with UK GDPR.",
  },
  {
    id: "equality",
    title: "Equality and Inclusion",
    body: "[INSERT EQUALITY & INCLUSION STATEMENT] — AWF is committed to equality of opportunity and welcomes people of all backgrounds into the life of the organisation.",
  },
  {
    id: "complaints",
    title: "Complaints Policy",
    body: "[INSERT COMPLAINTS POLICY] — how to raise a concern or complaint with AWF, and how it will be handled.",
  },
  {
    id: "terms",
    title: "Constitution / Governing Document",
    body: "[INSERT LINK TO GOVERNING DOCUMENT] — AWF's constitution, as registered with the Charity Commission.",
  },
];

export default function GovernancePage() {
  return (
    <>
      <Hero
        eyebrow="Governance"
        heading="Governance & Transparency"
        copy="We're committed to being open and accountable to the community we serve, our funders and our partners."
        imageSeed="governance-hero"
        imageAlt="AWF trustees meeting"
        size="compact"
      />

      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <div className="space-y-14">
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="text-2xl font-semibold text-charcoal mb-3">{s.title}</h2>
                <p className="text-muted text-[16px] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
