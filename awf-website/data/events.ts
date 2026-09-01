export type EventItem = {
  slug: string;
  title: string;
  date: string; // ISO date
  displayDate: string;
  location: string;
  summary: string;
  description: string;
  programmeCategory: string;
  image: string;
  isPast: boolean;
  registrationUrl?: string;
};

export const events: EventItem[] = [
  {
    slug: "manchester-iriji-festival-2026",
    title: "Manchester Iriji Festival 2026",
    date: "2026-09-19",
    displayDate: "19 September 2026",
    location: "[INSERT VENUE], Manchester",
    summary:
      "AWF's flagship annual New Yam Festival celebrating Anambra and Igbo culture, food, music and tradition.",
    description:
      "Join us for the Manchester Iriji Festival, our flagship celebration of Anambra and Igbo heritage. Expect traditional food, music, dance, dress and a warm welcome for families of all backgrounds. [INSERT FULL EVENT DETAIL].",
    programmeCategory: "Culture & Heritage",
    image: "iriji",
    isPast: false,
    registrationUrl: "#",
  },
  {
    slug: "awa-couples-dinner-night",
    title: "AWA Couples Dinner Night",
    date: "2026-11-14",
    displayDate: "14 November 2026",
    location: "[INSERT VENUE], Manchester",
    summary:
      "An evening for couples in the community to connect, celebrate and enjoy an evening together.",
    description:
      "A relaxed evening bringing couples from across the community together to connect and celebrate. [INSERT FULL EVENT DETAIL].",
    programmeCategory: "Health & Wellbeing",
    image: "dinner",
    isPast: false,
    registrationUrl: "#",
  },
  {
    slug: "community-welfare-drop-in",
    title: "Community Welfare Drop-In",
    date: "2026-10-03",
    displayDate: "3 October 2026",
    location: "[INSERT VENUE], Manchester",
    summary:
      "A drop-in session offering welfare guidance, signposting and community support.",
    description:
      "An open drop-in for anyone in the community who needs a listening ear, practical guidance or signposting to further support. [INSERT FULL EVENT DETAIL].",
    programmeCategory: "Welfare & Community Support",
    image: "drop-in",
    isPast: false,
  },
];
