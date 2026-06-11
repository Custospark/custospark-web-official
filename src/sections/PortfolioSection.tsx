import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { products } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function PortfolioSection() {
  return (
    <Section id="portfolio">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="font-heading text-h2 text-text-primary mb-6">
          Discover our collection of software solutions
        </h2>
        <p className="text-text-secondary text-body-lg">
          Need something custom? We develop software tailored to your unique needs
          — built exactly the way you envision it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.slug} className="flex flex-col">
            <h3 className="font-heading text-h3 text-text-primary mb-2">{product.name}</h3>
            <p className="text-accent text-body-sm font-medium mb-3">{product.tagline}</p>
            <p className="text-text-secondary text-body flex-1 mb-6">{product.description}</p>
            <a
              href={`https://${product.slug}.custospark.com`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="md" className="w-full">
                Get Started <ArrowRight size={16} />
              </Button>
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
}
