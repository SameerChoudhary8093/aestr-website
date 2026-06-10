import { createPageMetadata } from "@/lib/page-seo";
import ProgramCrossLinks from "@/components/ProgramCrossLinks";

export const metadata = createPageMetadata("robotics");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ProgramCrossLinks />
    </>
  );
}
