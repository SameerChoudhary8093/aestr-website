import type { Metadata } from "next";

export interface PageSeoConfig {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

export const PAGE_SEO: Record<string, PageSeoConfig> = {
  home: {
    path: "/",
    title: "AESTR | Best B.Tech CSE in Jaipur | 2026 Admissions Open!",
    description:
      "Don't just earn a degree - build the future. AESTR at SGVU offers AI-driven learning, real-world projects & industry mentorship for future tech leaders. Apply Now!",
  },
  "ai-ml": {
    path: "/ai-ml",
    title: "AI & Machine Learning B.Tech Specialization | AESTR Jaipur",
    description:
      "Master AI, deep learning, and intelligent systems at AESTR SGVU. Build production-ready ML models with industry mentorship in Jaipur.",
  },
  alumni: {
    path: "/alumni",
    title: "AESTR Alumni Network | Engineers & Founders from SGVU",
    description:
      "Meet AESTR alumni building at top tech companies and startups. Join a network of engineers trained through real-world projects at SGVU Jaipur.",
  },
  "aestr-pathways": {
    path: "/aestr-pathways",
    title: "AESTR Pathways | Majors, Minors & Specializations",
    description:
      "Explore AESTR's B.Tech pathways — AI, robotics, cyber security, data engineering, and more. Choose your specialization at SGVU Jaipur.",
  },
  "btech-ai-shodh-ai": {
    path: "/btech-ai-shodh-ai",
    title: "B.Tech AI with Shodh AI | Elite 60 Cohort | AESTR SGVU",
    description:
      "Join the flagship B.Tech AI program powered by Shodh AI at AESTR. Build sovereign AI systems with direct industry mentorship. Apply for 2026 admissions.",
  },
  "btech-cloud-engineering": {
    path: "/btech-cloud-engineering",
    title: "B.Tech Cloud Engineering | AESTR SGVU Jaipur",
    description:
      "Learn cloud architecture, DevOps, and scalable systems at AESTR. A hands-on B.Tech cloud engineering program at SGVU Jaipur.",
  },

  "cyber-security": {
    path: "/cyber-security",
    title: "Cyber Security B.Tech Specialization | AESTR Jaipur",
    description:
      "Train in ethical hacking, network security, and threat intelligence at AESTR SGVU. A future-ready cyber security specialization in Jaipur.",
  },
  "data-engineering": {
    path: "/data-engineering",
    title: "Data Engineering B.Tech Specialization | AESTR SGVU",
    description:
      "Build data pipelines, warehouses, and analytics systems at AESTR. Master data engineering with real projects at SGVU Jaipur.",
  },
  "day-at-aestr": {
    path: "/day-at-aestr",
    title: "A Day at AESTR | Life Inside the Engineering Residency",
    description:
      "See what a typical day at AESTR looks like — skill sprints, product builds, mentor sessions, and hackathons at SGVU's Silicon Valley-style incubator.",
  },
  "ios-training": {
    path: "/ios-training",
    title: "iOS App Development Training | AATCE & SwiftUI | AESTR",
    description:
      "Master iOS development with SwiftUI and Apple ecosystem training at AESTR SGVU. Build App Store-ready apps with industry mentors.",
  },
  robotics: {
    path: "/robotics",
    title: "Robotics B.Tech Specialization | AESTR SGVU Jaipur",
    description:
      "Design autonomous systems, computer vision, and embodied intelligence at AESTR. A hands-on robotics specialization at SGVU Jaipur.",
  },
  "salesforce-training": {
    path: "/salesforce-training",
    title: "Salesforce Developer Training & Placement | AESTR SGVU",
    description:
      "Become a certified Salesforce developer with AESTR's training and placement program at SGVU. Technical skills, soft skills, and job support.",
  },
  "salesforce-training/placement-support": {
    path: "/salesforce-training/placement-support",
    title: "Salesforce Placement Support | AESTR Training Program",
    description:
      "Get dedicated placement support after Salesforce developer training at AESTR SGVU — interview prep, resume building, and job referrals.",
  },
  "salesforce-training/soft-skills": {
    path: "/salesforce-training/soft-skills",
    title: "Soft Skills Training | AESTR Salesforce Program",
    description:
      "Develop communication, teamwork, and professional skills as part of AESTR's Salesforce developer training at SGVU Jaipur.",
  },
  "salesforce-training/technical-training": {
    path: "/salesforce-training/technical-training",
    title: "Salesforce Technical Training | AESTR SGVU",
    description:
      "Hands-on Salesforce technical training — Apex, Lightning, integrations, and real-world projects at AESTR SGVU Jaipur.",
  },
  "salesforce-training/test-results": {
    path: "/salesforce-training/test-results",
    title: "Salesforce Certification Test Results | AESTR SGVU",
    description:
      "View AESTR students' Salesforce certification achievements and test results from our developer training program at SGVU.",
  },
  "software-cloud-engineering": {
    path: "/software-cloud-engineering",
    title: "Software & Cloud Engineering | B.Tech Specialization | AESTR",
    description:
      "Master software architecture, cloud computing, and DevOps at AESTR SGVU. Build scalable systems in Jaipur's top engineering residency.",
  },
  "software-engineering": {
    path: "/software-engineering",
    title: "Software Engineering B.Tech Specialization | AESTR SGVU",
    description:
      "Learn full-stack development, system design, and software architecture at AESTR. A production-focused software engineering program in Jaipur.",
  },
  "sovereign-ai-initiative": {
    path: "/sovereign-ai-initiative",
    title: "Sovereign AI Initiative | AESTR × Shodh AI | SGVU",
    description:
      "Explore AESTR's Sovereign AI Initiative — building India's own AI infrastructure with Shodh AI, RISC-V labs, and DRDO-backed projects.",
  },
  blogs: {
    path: "/blogs",
    title: "AESTR Insights & Intelligence Blog | AI & Engineering",
    description:
      "Explore the latest research, tech breakthroughs, and pedagogical shifts from the architects of India's AI future at AESTR's Insights & Intelligence blog.",
  },
  curriculum: {
    path: "/curriculum",
    title: "B.Tech Curriculum | Aestr",
    description:
      "Explore the official Aestr curriculum with all semesters, course pages, innovation labs, majors, minors, and track pathways generated from the LaTeX syllabus source.",
  },
  "thank-you": {
    path: "/thank-you",
    title: "Thank You | AESTR Registration",
    description: "Thank you for registering with AESTR at SGVU.",
    noIndex: true,
  },
};

export function createPageMetadata(key: keyof typeof PAGE_SEO): Metadata {
  const seo = PAGE_SEO[key];
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.path,
    },
    ...(seo.noIndex
      ? { robots: { index: false, follow: false } }
      : { robots: { index: true, follow: true } }),
  };
}

export const STATIC_SITEMAP_ROUTES = Object.values(PAGE_SEO)
  .filter((page) => !page.noIndex && page.path !== "/")
  .map((page) => page.path);

export const SITEMAP_PRIORITIES: Record<string, number> = {
  "/": 1.0,
  "/btech-ai-shodh-ai": 0.9,
  "/ai-ml": 0.9,
  "/software-engineering": 0.9,
  "/software-cloud-engineering": 0.9,
  "/cyber-security": 0.9,
  "/data-engineering": 0.9,
  "/robotics": 0.9,
  "/btech-cloud-engineering": 0.9,
  "/sovereign-ai-initiative": 0.9,
  "/aestr-pathways": 0.9,
  "/ios-training": 0.9,
  "/salesforce-training": 0.9,

  "/day-at-aestr": 0.9,
  "/alumni": 0.9,
  "/blogs": 0.8,
  "/curriculum": 0.8,
};

export function getSitemapPriority(path: string): number {
  if (path.startsWith("/curriculum/courses/")) return 0.5;
  if (path.startsWith("/curriculum/tracks/")) return 0.7;
  if (path.startsWith("/blogs/")) return 0.7;
  return SITEMAP_PRIORITIES[path] ?? 0.8;
}
