import { createPageMetadata } from "@/lib/page-seo";

export const metadata = createPageMetadata("salesforce-training/placement-support");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
