import Hero from "@/components/Hero";
import StickyAdmissionsBar from "@/components/StickyAdmissionsBar";
import JsonLd from "@/components/JsonLd";
import LatestInsights from "@/components/LatestInsights";
import { createPageMetadata } from "@/lib/page-seo";
import {
  buildFaqPageSchema,
  buildVideoObjectSchemas,
} from "@/lib/schema";
import dynamic from "next/dynamic";

export const metadata = createPageMetadata("home");

const AboutTopOnePercent = dynamic(() => import("@/components/AboutTopOnePercent"));
const FrontierHub = dynamic(() => import("@/components/FrontierHub"));
const ProgramPartners = dynamic(() => import("@/components/ProgramPartners"));
const AboutPointThree = dynamic(() => import("@/components/AboutPointThree"));
const CareerCarousel = dynamic(() => import("@/components/CareerCarousel"));
const AestrDifferentiators = dynamic(() => import("@/components/AestrDifferentiators"));
const AboutPointFour = dynamic(() => import("@/components/AboutPointFour"));
const AboutPointFive = dynamic(() => import("@/components/AboutPointFive"));
const Pathways = dynamic(() => import("@/components/Pathways"));
const PlacementPartners = dynamic(() => import("@/components/PlacementPartners"));
const ExecutionTeam = dynamic(() => import("@/components/ExecutionTeam"));
const CourseraPartnership = dynamic(() => import("@/components/CourseraPartnership"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const BTechCSEEvolution = dynamic(() => import("@/components/BTechCSEEvolution"));


export default function Home() {
  return (
    <main className="relative">
      <JsonLd data={[buildFaqPageSchema(), ...buildVideoObjectSchemas()]} />
      <StickyAdmissionsBar />
      <Hero />
      <BTechCSEEvolution />
      <AboutTopOnePercent />
      <FrontierHub />
      {/* <AboutPointOne /> */}
      {/* <AboutPointTwo /> */}
      {/* <FoundingTeamVideo /> */}
      <ProgramPartners />
      <AboutPointThree />
      <CareerCarousel />
      <AestrDifferentiators />
      <AboutPointFour />
      <AboutPointFive />
      {/* <FutureFaculty /> */}
      <Pathways />
      <PlacementPartners />
      <ExecutionTeam />
      <CourseraPartnership />
      <LatestInsights />
      <FAQ />
    </main>
  );
}
