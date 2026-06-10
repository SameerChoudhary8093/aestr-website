import { createPageMetadata } from "@/lib/page-seo";
import ProgramCrossLinks from "@/components/ProgramCrossLinks";

export const metadata = createPageMetadata("data-engineering");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ProgramCrossLinks />
    </>
  );
}
