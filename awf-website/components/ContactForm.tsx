"use client";

import { FormEvent, useState } from "react";

const REASONS = [
  "General Enquiry",
  "Community Support",
  "Partnership",
  "Volunteering",
  "Events",
  "Media",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const consent = data.get("consent");

    if (!consent) {
      setError("Please confirm you're happy for us to contact you about your enquiry.");
      return;
    }

    // [INSERT FORM SUBMISSION INTEGRATION] — connect to your email service,
    // form backend (e.g. Formspree) or API route here.
    setError(null);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white border border-charcoal-100 rounded-lg p-10 text-center shadow-card">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-50 text-gold-600">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 12.5l5 5L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-charcoal mb-2">Message sent</h3>
        <p className="text-muted text-[15px]">
          Thank you for getting in touch. A member of the AWF team will respond
          as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-charcoal-100 rounded-lg p-8 shadow-card space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded border border-charcoal-100 px-4 py-2.5 text-[15px] focus:border-gold-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded border border-charcoal-100 px-4 py-2.5 text-[15px] focus:border-gold-400"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
            Telephone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded border border-charcoal-100 px-4 py-2.5 text-[15px] focus:border-gold-400"
          />
        </div>
        <div>
          <label htmlFor="organisation" className="block text-sm font-medium text-charcoal mb-1.5">
            Organisation <span className="text-muted font-normal">(optional)</span>
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            className="w-full rounded border border-charcoal-100 px-4 py-2.5 text-[15px] focus:border-gold-400"
          />
        </div>
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-charcoal mb-1.5">
          Reason for enquiry
        </label>
        <select
          id="reason"
          name="reason"
          required
          className="w-full rounded border border-charcoal-100 px-4 py-2.5 text-[15px] focus:border-gold-400 bg-white"
        >
          {REASONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded border border-charcoal-100 px-4 py-2.5 text-[15px] focus:border-gold-400"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-charcoal-200 text-gold-500 focus:ring-gold-400"
        />
        <label htmlFor="consent" className="text-[14px] text-muted leading-relaxed">
          I consent to AWF contacting me about my enquiry and storing my
          details in line with the{" "}
          <a href="/governance#privacy" className="underline decoration-gold-400 underline-offset-2">
            privacy policy
          </a>
          .
        </label>
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded px-4 py-2.5">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded bg-charcoal px-6 py-3 text-[15px] font-medium text-cream hover:bg-charcoal-600 transition-colors"
      >
        Send message
      </button>
    </form>
  );
}
