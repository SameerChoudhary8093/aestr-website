import Hero from "@/components/Hero";
import AboutAestr from "@/components/AboutAestr";
import ProgramFeatures from "@/components/ProgramFeatures";
import CareerCarousel from "@/components/CareerCarousel";
import BootcampsAndLabs from "@/components/BootcampsAndLabs";
import FutureFaculty from "@/components/FutureFaculty";
import Pathways from "@/components/Pathways";
import PlacementPartners from "@/components/PlacementPartners";
import ExecutionTeam from "@/components/ExecutionTeam";
import BottomCTA from "@/components/BottomCTA";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <AboutAestr />
      <ProgramFeatures />
      <CareerCarousel />
      <BootcampsAndLabs />
      <FutureFaculty />
      <Pathways />
      <PlacementPartners />
      <ExecutionTeam />
      <BottomCTA />
    </main>
  );
}
