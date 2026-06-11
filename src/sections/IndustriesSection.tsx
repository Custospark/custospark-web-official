import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { industries } from "@/lib/constants";

export function IndustriesSection() {
  return (
    <Section id="industries">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="font-heading text-h2 text-text-primary mb-4">Industries We Serve</h2>
        <p className="text-text-secondary text-body-lg">
          Tailored solutions for diverse market sectors.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {industries.map((industry) => (
          <Card key={industry.title}>
            <h3 className="font-heading text-h4 text-text-primary mb-1">{industry.title}</h3>
            <p className="text-text-secondary text-body-sm mb-2">{industry.description}</p>
            <p className="text-accent text-body-sm font-medium">{industry.result}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
