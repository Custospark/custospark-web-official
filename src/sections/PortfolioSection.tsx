import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { products } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-section bg-gradient-to-bl from-primary via-black to-primary text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-heading text-h2 text-white mb-6">
            Discover our collection of software solutions
          </h2>
          <p className="text-white/70 text-body-lg">
            Need something custom? We develop software tailored to your unique needs
            — built exactly the way you envision it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.slug} variant="dark" className="flex flex-col">
              <h3 className="font-heading text-h3 mb-2">{product.name}</h3>
              <p className="text-accent text-body-sm font-medium mb-3">{product.tagline}</p>
              <p className="text-white/60 text-body flex-1 mb-6">{product.description}</p>
              <a
                href={`https://${product.slug}.custospark.com`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="white" size="md" className="w-full">
                  Get Started <ArrowRight size={16} />
                </Button>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
