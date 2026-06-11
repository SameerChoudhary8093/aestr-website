import { createPageMetadata } from "@/lib/page-seo";

export const metadata = createPageMetadata("salesforce-training/soft-skills");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
