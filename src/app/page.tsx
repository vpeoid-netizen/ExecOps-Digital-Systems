import { HeroSection } from "@/components/HeroSection";
import { SystemsGrid } from "@/components/SystemsGrid";
import { EvaluationAssistantsSection } from "@/components/EvaluationAssistantsSection";
import { OfficeOfThePresidentSection } from "@/components/OfficeOfThePresidentSection";
import { DownloadDesktopSection } from "@/components/DownloadDesktopSection";
import { AboutSection } from "@/components/AboutSection";

export default function Home() {
  return (
    <div className="illustrative-scene">
      <HeroSection />
      <SystemsGrid />
      <EvaluationAssistantsSection />
      <OfficeOfThePresidentSection />
      <DownloadDesktopSection />
      <AboutSection />
    </div>
  );
}
