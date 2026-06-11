import { Card } from "@/components/Card";
import { industries } from "@/lib/constants";

export function IndustriesSection() {
  return (
    <section id="industries" className="py-section bg-gradient-to-b from-primary via-black to-primary text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-heading text-h2 text-white mb-4">Industries We Serve</h2>
          <p className="text-white/70 text-body-lg">
            Tailored solutions for diverse market sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry) => (
            <Card key={industry.title} variant="dark">
              <h3 className="font-heading text-h4 mb-1">{industry.title}</h3>
              <p className="text-white/60 text-body-sm mb-2">{industry.description}</p>
              <p className="text-accent text-body-sm font-medium">{industry.result}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
