import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/constants";

export function IndustriesSection() {
  return (
    <section id="industries" className="py-section bg-gradient-to-br from-primary via-black to-primary text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-heading text-h2 text-white mb-4">Industries We Serve</h2>
          <p className="text-white/70 text-body-lg">
            Custocare serves healthcare. Custosell serves retail, e-commerce, and beyond. Together, we cover every industry that needs better software.
          </p>
        </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <Card key={industry.title} variant="dark">
                <h3 className="font-heading text-h4 mb-1">{industry.title}</h3>
                <p className="text-white/60 text-body-sm mb-2">{industry.description}</p>
                <p className="text-orange-400 text-body-sm font-medium mb-3">{industry.result}</p>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href="https://custocare.custospark.com" target="_blank" rel="noopener noreferrer">
              <Button variant="accent" size="md">
                Custocare for Healthcare <ArrowRight size={16} />
              </Button>
            </a>
            <a href="https://www.custosell.com" target="_blank" rel="noopener noreferrer">
              <Button variant="white" size="md">
                Custosell for Retail <ArrowRight size={16} />
              </Button>
            </a>
          </div>
        </div>
    </section>
  );
}
