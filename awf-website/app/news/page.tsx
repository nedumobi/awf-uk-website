import type { Metadata } from "next";
import { Container } from "@/components/ui";
import Hero from "@/components/Hero";
import NewsCard from "@/components/NewsCard";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "News & Stories",
  description: "News, updates and community stories from Anambra Welfare Foundation UK.",
};

export default function NewsPage() {
  return (
    <>
      <Hero
        eyebrow="News & Stories"
        heading="Stories from our community"
        copy="Updates on our programmes, events and the people they support."
        imageSeed="news-hero"
        imageAlt="AWF community members reading and connecting"
        size="compact"
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {news.map((a) => (
              <NewsCard key={a.slug} article={a} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
