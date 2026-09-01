export type ImpactStatItem = {
  value: string;
  label: string;
};

// Placeholder figures — replace with verified figures before publishing.
export const impactStats: ImpactStatItem[] = [
  { value: "[INSERT VERIFIED IMPACT FIGURE]", label: "People engaged" },
  { value: "[INSERT VERIFIED IMPACT FIGURE]", label: "Community activities" },
  { value: "[INSERT VERIFIED IMPACT FIGURE]", label: "Children & young people reached" },
  { value: "[INSERT VERIFIED IMPACT FIGURE]", label: "Volunteers" },
];

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "[INSERT COMMUNITY TESTIMONIAL]",
    name: "[INSERT NAME OR INITIALS]",
    context: "Community member",
  },
  {
    quote: "[INSERT COMMUNITY TESTIMONIAL]",
    name: "[INSERT NAME OR INITIALS]",
    context: "Parent, Iriji Festival attendee",
  },
  {
    quote: "[INSERT COMMUNITY TESTIMONIAL]",
    name: "[INSERT NAME OR INITIALS]",
    context: "Partner organisation",
  },
];
