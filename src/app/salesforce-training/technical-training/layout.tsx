import { createPageMetadata } from "@/lib/page-seo";
import ProgramCrossLinks from "@/components/ProgramCrossLinks";

export const metadata = createPageMetadata("salesforce-training/technical-training");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ProgramCrossLinks />
    </>
  );
}
