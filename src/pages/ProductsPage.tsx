import { PortfolioSection } from "@/sections/PortfolioSection";

export function ProductsPage() {
  return (
    <>
      <section className="py-12 bg-gradient-to-br from-primary via-black to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-accent/20 border border-accent/30 text-accent text-body-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Our Products
            </span>
            <h1 className="font-heading text-h1 text-white mb-4">
              Built by Custospark
            </h1>
            <p className="text-white/70 text-body-lg">
              Two products. Two industries. One standard of quality.
            </p>
          </div>
        </div>
      </section>
      <PortfolioSection />
    </>
  );
}
