import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-gradient-to-br from-primary via-black to-primary text-center py-20 text-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-heading text-h2 text-white mb-4">
          Need a Software Solution?
        </h2>
        <p className="text-white/70 text-body-lg mb-8">
          Whether you run a company, manage an organisation, own a business, or have an idea as an individual — we build software that works for you. Tell us what you need.
        </p>
        <a href="/contact">
          <Button variant="accent" size="lg">
            Contact Us <ArrowRight size={20} />
          </Button>
        </a>
      </div>
    </section>
  );
}
