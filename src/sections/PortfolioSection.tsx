import { CustocareProduct } from "@/sections/CustocareProduct";
import { CustosellProduct } from "@/sections/CustosellProduct";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-white">
      <div className="bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <CustocareProduct />
        </div>
      </div>
      <div className="bg-surface-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <CustosellProduct />
        </div>
      </div>
    </section>
  );
}
