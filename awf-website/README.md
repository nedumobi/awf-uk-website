# Anambra Welfare Foundation UK — Website

A Next.js (App Router) + TypeScript + Tailwind CSS website for AWF, built to
be credible to funders, local authorities and corporate sponsors while
remaining warm and welcoming to community members and families.

---

## 1. Architecture summary

- **Framework:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS
- **Content model:** structured data files in `/data` (no CMS yet — see
  "Future CMS" below) power programmes, events, news, team and impact
  content, so copy can be edited without touching component code
- **Design tokens:** defined once in `tailwind.config.ts` (charcoal, gold,
  cream, sand, ink, muted) and `app/globals.css`
- **Signature visual device:** `components/UliMark.tsx` — a restrained,
  hand-drawn-style linework mark inspired by Uli motifs, used sparingly as a
  divider/accent rather than a repeating background pattern
- **Images:** all photography is currently a seeded placeholder
  (`lib/placeholder.ts`, via picsum.photos) so every image slot is filled and
  laid out correctly — see "Replacing images" below

## 2. Pages created

| Route | Purpose |
|---|---|
| `/` | Homepage — hero, intro, six programmes, impact stats, featured programme, events, community story, news, partners, get-involved CTA, newsletter |
| `/about` | Who we are, story, mission, vision, values, trustees, governance summary |
| `/our-work` | Index of all six programme areas |
| `/our-work/[slug]` | Detail page per programme (why it matters, what we do, who it supports, activities, related events) |
| `/impact` | Stats, community stories, programme outcomes, testimonials, reports |
| `/events` | Upcoming + past events |
| `/events/[slug]` | Event detail (description, gallery, partners, related events) |
| `/news` | News & stories index |
| `/news/[slug]` | Article detail with related stories |
| `/get-involved` | Volunteer / join / partner / sponsor / support pathways |
| `/contact` | Contact form with validation, success state, and org details |
| `/governance` | Trustees, reports, accounts, safeguarding, privacy, equality, complaints, constitution |
| `/sitemap.xml`, `/robots.txt` | Auto-generated SEO files |
| `not-found.tsx` | Custom 404 |

## 3. Reusable components (`/components`)

`Header`, `Footer`, `Hero`, `SectionHeading`, `ProgrammeCard`, `EventCard`,
`NewsCard`, `ImpactStat`, `Testimonial`, `PartnerLogo`, `TeamMemberCard`,
`CTASection`, `GalleryGrid`, `ContactForm`, `ProgrammeIcon`, `UliMark`, plus
shared primitives in `ui.tsx` (`Container`, `Button`, `Eyebrow`).

## 4. Running the website locally

Requires [Node.js](https://nodejs.org) 18.18+ and npm.

```bash
cd awf-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edit any file under
`/app`, `/components` or `/data` — changes hot-reload automatically.

To build for production:

```bash
npm run build
npm run start
```

## 5. Replacing placeholder content

All AWF-specific facts that weren't provided in the brief are marked with
`[INSERT ...]` so nothing is presented as real before you confirm it.
Search the project for `[INSERT` to find every instance. The main places:

- `data/impact.ts` — impact statistics and testimonials
- `data/team.ts` — trustee names, roles and bios
- `data/events.ts` — event venues and registration links
- `data/news.ts` — article content
- `data/partners.ts` — partner organisation names
- `app/about/page.tsx` — AWF's history/story
- `app/contact/page.tsx` — email, phone, address
- `app/governance/page.tsx` — policies, reports, accounts links

## 6. Replacing images

Every image currently points to a seeded placeholder via
`lib/placeholder.ts`. To swap in real AWF photography:

1. Add your images to `/public/images/` (e.g. `hero-community.jpg`)
2. Replace the relevant `placeholderImage("seed-name")` call with a direct
   path, e.g. `src="/images/hero-community.jpg"`
3. Update the `alt` text to accurately describe the real photo
4. For many images at once, consider extending `lib/placeholder.ts` with a
   lookup table so you only need to add real filenames in one place

Add a real `favicon.ico`, `apple-touch-icon.png` and icons referenced in
`public/site.webmanifest`.

## 7. Suggested hosting

- **[Vercel](https://vercel.com)** — built by the Next.js team, simplest
  option, generous free tier for a nonprofit site of this size
- **Netlify** — also supports Next.js well
- If AWF already has UK-based hosting requirements, any Node-compatible host
  works via `npm run build && npm run start`

## 8. Environment variables

None are required to run the site as-is. You'll likely want to add:

- A form backend (e.g. Formspree, Resend, or a custom API route) for
  `components/ContactForm.tsx` and the newsletter form on the homepage —
  currently these show a success state without sending data anywhere
- Analytics (e.g. Plausible or GA4) if AWF wants visitor tracking

## 9. Content AWF still needs to provide

- Real photography across all sections
- Verified impact statistics and their as-of date
- Trustee names, roles, and short biographies
- Organisation history/story for the About page
- Contact email, phone number and address
- Governance documents: constitution, annual report, accounts, safeguarding
  policy, privacy policy, equality statement, complaints policy
- Partner/sponsor logos (with permission to display)
- Community testimonials (with consent)
- Confirmed event venues and registration links

## 10. Recommended next improvements

- Connect the contact and newsletter forms to a real backend
- Add a lightweight CMS (e.g. Sanity, Contentful, or Markdown/MDX in
  `/data`) once non-technical staff need to edit content directly — the data
  file structure is already shaped to make this migration straightforward
- Add online donations once a payment provider is chosen
- Add event registration/ticketing if AWF wants to manage RSVPs directly
- Add a members' area if a membership scheme is introduced
- Run a Lighthouse/axe accessibility audit with real content and images in
  place, since placeholder text and images can behave differently to final
  assets (e.g. real alt text, real colour contrast on final photography)
