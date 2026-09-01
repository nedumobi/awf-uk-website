import { MetadataRoute } from "next";
import { programmes } from "@/data/programmes";
import { events } from "@/data/events";
import { news } from "@/data/news";

const BASE_URL = "https://www.awf-uk.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/our-work",
    "/impact",
    "/events",
    "/news",
    "/get-involved",
    "/contact",
    "/governance",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const programmePages = programmes.map((p) => ({
    url: `${BASE_URL}/our-work/${p.slug}`,
    lastModified: new Date(),
  }));

  const eventPages = events.map((e) => ({
    url: `${BASE_URL}/events/${e.slug}`,
    lastModified: new Date(e.date),
  }));

  const newsPages = news.map((a) => ({
    url: `${BASE_URL}/news/${a.slug}`,
    lastModified: new Date(a.date),
  }));

  return [...staticPages, ...programmePages, ...eventPages, ...newsPages];
}
