import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { products } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function ProductsPage() {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-heading text-h1 text-text-primary mb-6">Our Products</h1>
        <p className="text-text-secondary text-body-lg">
          Discover our suite of SaaS products built to streamline your operations.
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
                Learn More <ArrowRight size={16} />
              </Button>
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
}
