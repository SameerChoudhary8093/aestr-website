import { createPageMetadata } from "@/lib/page-seo";

export const metadata = createPageMetadata("salesforce-training/technical-training");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
