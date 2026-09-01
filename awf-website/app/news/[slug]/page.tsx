import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui";
import NewsCard from "@/components/NewsCard";
import { news } from "@/data/news";
import { placeholderImage } from "@/lib/placeholder";

export function generateStaticParams() {
  return news.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = news.find((a) => a.slug === params.slug);
  if (!article) return {};
  return { title: article.title, description: article.summary };
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const article = news.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const related = news.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <article className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <p className="text-gold-600 text-sm font-medium mb-3">
            {article.category} &middot; {article.displayDate}
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold text-charcoal leading-[1.1]">
            {article.title}
          </h1>

          <div className="relative h-80 md:h-[26rem] rounded-lg overflow-hidden mt-10 mb-10">
            <Image
              src={placeholderImage(article.image, 1400, 900)}
              alt={article.title}
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <p className="text-muted text-[18px] leading-relaxed">{article.content}</p>

          <div className="mt-12 pt-6 border-t border-charcoal-100 flex items-center gap-4">
            <span className="text-sm text-muted">Share:</span>
            <a href="#" className="text-sm underline decoration-gold-400 underline-offset-2">Facebook</a>
            <a href="#" className="text-sm underline decoration-gold-400 underline-offset-2">X</a>
            <a href="#" className="text-sm underline decoration-gold-400 underline-offset-2">Email</a>
          </div>
        </Container>
      </article>

      <section className="py-16 md:py-24 bg-sand">
        <Container>
          <h2 className="text-2xl font-semibold text-charcoal mb-8">Related stories</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {related.map((a) => (
              <NewsCard key={a.slug} article={a} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
