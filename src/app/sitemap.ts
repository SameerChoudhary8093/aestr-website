import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogs";
import { coursesData, tracksData } from "@/lib/curriculum";
import { absoluteUrl } from "@/lib/site";
import { getSitemapPriority } from "@/lib/page-seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/aestr-pathways",
    "/ai-ml",
    "/alumni",
    "/blogs",
    "/btech-ai-shodh-ai",
    "/btech-cloud-engineering",
    "/collaborations",
    "/curriculum",
    "/cyber-security",
    "/data-engineering",
    "/day-at-aestr",
    "/ios-training",
    "/robotics",
    "/salesforce-training",
    "/salesforce-training/placement-support",
    "/salesforce-training/soft-skills",
    "/salesforce-training/technical-training",
    "/salesforce-training/test-results",
    "/software-cloud-engineering",
    "/software-engineering",
    "/sovereign-ai-initiative",
  ];

  const blogRoutes = blogPosts.map((post) => `/blogs/${post.slug}`);
  const courseRoutes = coursesData.map((course) => `/curriculum/courses/${course.id}`);
  const trackRoutes = tracksData.map((track) => `/curriculum/tracks/${track.id}`);

  const allRoutes = [...staticRoutes, ...blogRoutes, ...courseRoutes, ...trackRoutes];

  return allRoutes.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path.startsWith("/blogs/") ? "weekly" : "monthly",
    priority: getSitemapPriority(path),
  }));
}
