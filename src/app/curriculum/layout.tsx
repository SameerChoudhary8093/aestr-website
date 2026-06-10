import { createPageMetadata } from "@/lib/page-seo";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = {
  ...createPageMetadata("curriculum"),
  keywords:
    "Aestr curriculum, B.Tech curriculum, semesters, majors, minors, innovation labs, course pages",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Curriculum", path: "/curriculum" },
        ])}
      />
      {children}
    </>
  );
}
