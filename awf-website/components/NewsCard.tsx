import Image from "next/image";
import Link from "next/link";
import { NewsArticle } from "@/data/news";
import { placeholderImage } from "@/lib/placeholder";

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group">
      <Link href={`/news/${article.slug}`} className="block">
        <div className="relative h-52 w-full rounded-lg overflow-hidden mb-4">
          <Image
            src={placeholderImage(article.image, 800, 550)}
            alt={`Photo for ${article.title}`}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <p className="text-gold-600 text-sm font-medium mb-2">
          {article.category} &middot; {article.displayDate}
        </p>
        <h3 className="text-lg font-semibold text-charcoal leading-snug group-hover:text-gold-700 transition-colors">
          {article.title}
        </h3>
        <p className="text-muted text-[15px] mt-2 leading-relaxed">
          {article.summary}
        </p>
      </Link>
    </article>
  );
}
