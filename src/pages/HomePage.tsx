import { HeroSection } from "@/sections/HeroSection";
import { ProductsBridgeSection } from "@/sections/ProductsBridgeSection";
import { PortfolioSection } from "@/sections/PortfolioSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { IndustriesSection } from "@/sections/IndustriesSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { CTASection } from "@/sections/CTASection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsBridgeSection />
      <PortfolioSection />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
