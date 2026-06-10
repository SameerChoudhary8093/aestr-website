import { createPageMetadata } from "@/lib/page-seo";

export const metadata = createPageMetadata("thank-you");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
