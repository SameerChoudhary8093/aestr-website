import { createPageMetadata } from "@/lib/page-seo";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata("blogs");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blogs", path: "/blogs" },
        ])}
      />
      {children}
    </>
  );
}
