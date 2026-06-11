import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-gradient-to-br from-primary via-black to-primary text-center py-20 text-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-heading text-h2 text-white mb-4">
          Ready to Take Your Business to the Next Level?
        </h2>
        <p className="text-white/70 text-body-lg mb-8">
          Book a consultation with our experts and discover how our tailored solutions
          can drive growth for your business.
        </p>
        <a href="/contact">
          <Button variant="accent" size="lg">
            Book Your Consultation <ArrowRight size={20} />
          </Button>
        </a>
      </div>
    </section>
  );
}
