import { HeroSection } from "@/sections/HeroSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { IndustriesSection } from "@/sections/IndustriesSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { PortfolioSection } from "@/sections/PortfolioSection";
import { CTASection } from "@/sections/CTASection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <PortfolioSection />
      <CTASection />
    </>
  );
}
