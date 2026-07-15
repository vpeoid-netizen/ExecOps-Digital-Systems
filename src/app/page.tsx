import { HeroSection } from "@/components/HeroSection";
import { SystemsGrid } from "@/components/SystemsGrid";
import { EvaluationAssistantsSection } from "@/components/EvaluationAssistantsSection";
import { AboutSection } from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="page-atmosphere">
        <SystemsGrid />
        <EvaluationAssistantsSection />
        <AboutSection />
      </div>
    </>
  );
}
