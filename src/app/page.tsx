import TypingHero from "@/components/TypingHero";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import WorkflowSection from "@/components/WorkflowSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      {/* 1. HERO & INTRODUCTION (with Reja's photo on the side) */}
      <TypingHero />

      {/* 2. FREELANCE TRACK RECORD (Fiverr 155+ reviews, Upwork 100% JSS, Testimonials) */}
      <ExperienceSection />

      {/* 3. PORTFOLIO (Long-form Videos & Viral Reels with interactive modal player) */}
      <PortfolioSection />

      {/* 4. WORKING PROCEDURE (7-step pipeline from raw assets to cleared delivery) */}
      <WorkflowSection />

      {/* 5. PACKAGES AND PRICING */}
      <PricingSection />

      {/* 6. CONTACT ME (Direct individual freelancer contact) */}
      <ContactSection />
    </main>
  );
}
