import Hero from "@/components/Hero";
import StickyAdmissionsBar from "@/components/StickyAdmissionsBar";
import AboutTopOnePercent from "@/components/AboutTopOnePercent";
import AboutPointOne from "@/components/AboutPointOne";
import AboutPointTwo from "@/components/AboutPointTwo";
import FoundingTeamVideo from "@/components/FoundingTeamVideo";
import ProgramPartners from "@/components/ProgramPartners";
import AboutPointThree from "@/components/AboutPointThree";
import CareerCarousel from "@/components/CareerCarousel";
import AboutPointFour from "@/components/AboutPointFour";
import AboutPointFive from "@/components/AboutPointFive";
import FutureFaculty from "@/components/FutureFaculty";
import Pathways from "@/components/Pathways";
import PlacementPartners from "@/components/PlacementPartners";
import ExecutionTeam from "@/components/ExecutionTeam";


export default function Home() {
  return (
    <main className="relative">
      <StickyAdmissionsBar />
      <Hero />
      <AboutTopOnePercent />
      <AboutPointOne />
      <AboutPointTwo />
      <FoundingTeamVideo />
      <ProgramPartners />
      <AboutPointThree />
      <CareerCarousel />
      <AboutPointFour />
      <AboutPointFive />
      <FutureFaculty />
      <Pathways />
      <PlacementPartners />
      <ExecutionTeam />
    </main>
  );
}
