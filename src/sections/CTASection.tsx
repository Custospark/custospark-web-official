import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
 return (
 <section className="bg-ink border-t border-ink-light text-center py-16">
 <div className="max-w-3xl mx-auto px-4">
 <h2 className="font-heading text-h2 text-white mb-3">
 Need a Software Solution?
 </h2>
 <p className="text-white/70 text-body-lg mb-8 leading-relaxed">
 Whether you run a company, manage an organisation, own a business, or have an idea as an individual - we build software that works for you. Tell us what you need.
 </p>
 <a href="/contact">
 <Button variant="primary" size="lg">
 Contact Us <ArrowRight size={18} />
 </Button>
 </a>
 </div>
 </section>
 );
}
