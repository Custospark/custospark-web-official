import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { products } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function ProductsPage() {
  return (
    <>
      <section className="py-section bg-gradient-to-bl from-primary via-black to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-h1 text-white mb-6">Our Products</h1>
            <p className="text-white/70 text-body-lg">
              Discover our suite of SaaS products built to streamline your operations.
            </p>
          </div>
        </div>
      </section>

      <Section>
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
                  Learn More <ArrowRight size={16} />
                </Button>
              </a>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
