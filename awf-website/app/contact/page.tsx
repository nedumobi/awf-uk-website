import type { Metadata } from "next";
import { Container } from "@/components/ui";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Anambra Welfare Foundation UK.",
};

export default function ContactPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid lg:grid-cols-5 gap-14">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-semibold text-charcoal leading-[1.15]">
              Contact AWF
            </h1>
            <p className="mt-4 text-muted text-[16px] leading-relaxed">
              Whether you're a community member, a partner organisation or a
              funder, we'd love to hear from you.
            </p>

            <dl className="mt-10 space-y-6 text-[15px]">
              <div>
                <dt className="font-medium text-charcoal">Email</dt>
                <dd className="text-muted">[INSERT CONTACT EMAIL]</dd>
              </div>
              <div>
                <dt className="font-medium text-charcoal">Telephone</dt>
                <dd className="text-muted">[INSERT CONTACT NUMBER]</dd>
              </div>
              <div>
                <dt className="font-medium text-charcoal">Address</dt>
                <dd className="text-muted">[INSERT ADDRESS], Manchester, UK</dd>
              </div>
              <div>
                <dt className="font-medium text-charcoal">Registered Charity</dt>
                <dd className="text-muted">No. 1196674</dd>
              </div>
            </dl>

            <div className="mt-10 flex gap-4 text-sm">
              <a href="https://facebook.com" className="underline decoration-gold-400 underline-offset-2">Facebook</a>
              <a href="https://instagram.com" className="underline decoration-gold-400 underline-offset-2">Instagram</a>
              <a href="https://x.com" className="underline decoration-gold-400 underline-offset-2">X</a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
