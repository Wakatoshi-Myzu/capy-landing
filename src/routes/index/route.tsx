import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "./_partials/-hero-section";
import MarqueeBanner from "./_partials/-marquee-banner";
import AboutSection from "./_partials/-about-section";
import FeaturesSection from "./_partials/-features-section";
import GettingStartedSection from "./_partials/-getting-started-section";
import TokenomicsSection from "./_partials/-tokenomics-section";
import RoadmapSection from "./_partials/-roadmap-section";
import FAQSection from "./_partials/-faq-section";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main>
      <HeroSection />
      <MarqueeBanner />
      <AboutSection />
      <FeaturesSection />
      <GettingStartedSection />
      <TokenomicsSection />
      <RoadmapSection />
      <FAQSection />
    </main>
  );
}
