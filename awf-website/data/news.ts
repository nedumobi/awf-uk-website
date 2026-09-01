export type NewsCategory =
  | "Community"
  | "Culture"
  | "Young People"
  | "Health & Wellbeing"
  | "Events"
  | "AWF News"
  | "Partnerships";

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  category: NewsCategory;
  image: string;
  summary: string;
  content: string;
};

export const news: NewsArticle[] = [
  {
    slug: "keeping-heritage-alive-cultural-education",
    title: "How cultural education is helping a new generation connect with their heritage",
    date: "2026-06-12",
    displayDate: "12 June 2026",
    category: "Culture",
    image: "story-heritage",
    summary:
      "Inside AWF's cultural education programmes, and why they matter for children growing up between two cultures.",
    content:
      "[INSERT FULL STORY] — This article will describe how AWF's language and cultural education sessions are helping children build confidence in both their Anambra heritage and their life in Greater Manchester.",
  },
  {
    slug: "iriji-festival-2025-recap",
    title: "A look back at the 2025 Manchester Iriji Festival",
    date: "2025-09-28",
    displayDate: "28 September 2025",
    category: "Events",
    image: "story-iriji-recap",
    summary:
      "Highlights from another warm, colourful and well-attended New Yam Festival in Manchester.",
    content:
      "[INSERT FULL STORY] — Recap of the 2025 Iriji Festival, attendance, partners involved and community highlights.",
  },
  {
    slug: "welfare-support-in-practice",
    title: "What community welfare support looks like in practice",
    date: "2025-11-04",
    displayDate: "4 November 2025",
    category: "Community",
    image: "story-welfare",
    summary:
      "A closer look at how AWF's welfare and signposting support helps families navigate difficult moments.",
    content:
      "[INSERT FULL STORY] — This article will outline, with appropriate anonymisation and consent, how AWF's welfare support has helped community members in practice.",
  },
];
