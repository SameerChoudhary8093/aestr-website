import { faqs } from "@/data/faqs";
import type { BlogPost } from "@/data/blogs";
import { absoluteUrl, SITE_URL } from "./site";

export const HOMEPAGE_VIDEOS = [
  {
    name: "B.Tech CSE for The Top 1% — AESTR Overview",
    description:
      "Discover how AESTR at SGVU delivers a Silicon Valley-style B.Tech CSE program with AI-driven learning and real-world projects.",
    embedUrl: "https://www.youtube.com/embed/mA3Z2VYMNXo",
    thumbnailUrl: "https://img.youtube.com/vi/mA3Z2VYMNXo/hqdefault.jpg",
    uploadDate: "2025-06-01",
  },
  {
    name: "AESTR Engineering Residency — Student Experience",
    description:
      "See what life at AESTR looks like — building products, working with industry mentors, and preparing for future tech careers.",
    embedUrl: "https://www.youtube.com/embed/gGh2HYhMSy8",
    thumbnailUrl: "https://img.youtube.com/vi/gGh2HYhMSy8/hqdefault.jpg",
    uploadDate: "2025-06-01",
  },
  {
    name: "B.Tech in Artificial Intelligence — Powered by Shodh AI",
    description:
      "Learn about AESTR's flagship B.Tech AI program powered by Shodh AI and designed for the engineers of 2030.",
    contentUrl: absoluteUrl("/pm-video.mp4"),
    thumbnailUrl: absoluteUrl("/Other/Nvidia-Image.jpeg"),
    uploadDate: "2025-06-01",
  },
] as const;

export function buildOrganizationSchema() {
  return {
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: "AESTR by Suresh Gyan Vihar University",
    url: SITE_URL,
    logo: absoluteUrl("/Herosection/by-gyan-vihar-2-neon.png"),
    telephone: "18003094545",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61575961450718",
      "https://www.linkedin.com/company/aestr/",
      "https://www.instagram.com/aestr.gyanvihar/",
      "https://www.youtube.com/@AestrbyGyanVihar",
    ],
  };
}

export function buildCourseSchema(
  name: string,
  description: string,
  id?: string
) {
  return {
    "@type": "Course",
    ...(id ? { "@id": id } : {}),
    name,
    description,
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#organization`,
    },
    educationalCredentialAwarded: "B.Tech in Computer Science and Engineering",
  };
}

export function buildGlobalSchemaGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationSchema(),
      buildCourseSchema(
        "B.Tech in Computer Science and Engineering (CSE)",
        "An advanced B.Tech Computer Science and Engineering program offered by AESTR Suresh Gyan Vihar University with AI and Machine Learning integration.",
        `${SITE_URL}/#course`
      ),
    ],
  };
}

export function buildFaqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function buildVideoObjectSchemas() {
  return HOMEPAGE_VIDEOS.map((video) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    ...("embedUrl" in video
      ? { embedUrl: video.embedUrl }
      : { contentUrl: video.contentUrl }),
  }));
}

export function buildBlogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: absoluteUrl(post.image),
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "AESTR",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/Herosection/by-gyan-vihar-2-neon.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blogs/${post.slug}`),
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function breadcrumbsFromPath(
  path: string,
  labels?: Record<string, string>
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ name: "Home", path: "/" }];
  if (path === "/") return items;

  const segments = path.split("/").filter(Boolean);
  let current = "";

  for (const segment of segments) {
    current += `/${segment}`;
    const label =
      labels?.[current] ??
      segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    items.push({ name: label, path: current });
  }

  return items;
}
