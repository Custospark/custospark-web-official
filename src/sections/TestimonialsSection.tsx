import { useState, useEffect } from "react";
import { Section } from "@/components/Section";
import { testimonials } from "@/lib/constants";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        setFading(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[index];

  return (
    <Section id="testimonials" variant="alt">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-heading text-h2 text-text-primary mb-6">What Our Clients Say</h2>
        <p className="text-text-secondary text-body-lg mb-12">
          Trusted by innovators, leaders, and entrepreneurs across industries.
        </p>

        <div
          className={`transition-all duration-500 ${
            fading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <Quote size={40} className="text-accent/50 mx-auto mb-6" />
          <img
            src={t.avatar}
            alt={t.name}
            className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-accent/30"
          />
          <p className="text-body-lg italic text-text-primary mb-6 max-w-2xl mx-auto">
            &ldquo;{t.text}&rdquo;
          </p>
          <p className="font-heading font-semibold text-text-primary">
            {t.name}
            <span className="text-text-muted text-body-sm font-normal"> — {t.title}</span>
          </p>
        </div>
      </div>
    </Section>
  );
}
