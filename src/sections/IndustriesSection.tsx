import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/constants";

export function IndustriesSection() {
 return (
 <section id="industries" className="py-section bg-surface-muted border-y border-border">
 <div className="max-w-7xl mx-auto px-4 md:px-8">
 <div className="text-center max-w-3xl mx-auto mb-10">
 <p className="text-caption font-semibold tracking-[0.12em] uppercase text-primary mb-3">Industries</p>
 <h2 className="font-heading text-h2 text-ink mb-3">Industries We Serve</h2>
 <p className="text-text-secondary text-body-lg leading-relaxed">
 Custocare serves healthcare. Custosell serves retail, e-commerce, and beyond. Together, we cover every industry that needs better software.
 </p>
 </div>

 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {industries.map((industry) => (
 <Card key={industry.title}>
 <h3 className="font-heading text-h4 text-ink mb-1.5">{industry.title}</h3>
 <p className="text-text-secondary text-body-sm mb-2 leading-relaxed">{industry.description}</p>
 <p className="text-primary text-body-sm font-semibold">{industry.result}</p>
 </Card>
 ))}
 </div>

 <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
 <a href="https://custocare.custospark.com" target="_blank" rel="noopener noreferrer">
 <Button variant="primary" size="md">
 Custocare for Healthcare <ArrowRight size={16} />
 </Button>
 </a>
 <a href="https://www.custosell.com" target="_blank" rel="noopener noreferrer">
 <Button variant="secondary" size="md">
 Custosell for Retail <ArrowRight size={16} />
 </Button>
 </a>
 </div>
 </div>
 </section>
 );
}
