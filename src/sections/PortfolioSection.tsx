import { CustocareProduct } from "@/sections/CustocareProduct";
import { CustosellProduct } from "@/sections/CustosellProduct";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-section bg-gradient-to-bl from-primary via-black to-primary text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <CustocareProduct />
        <CustosellProduct />
      </div>
    </section>
  );
}
