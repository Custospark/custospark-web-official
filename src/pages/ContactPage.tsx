import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export function ContactPage() {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-heading text-h1 text-text-primary mb-6">Contact Us</h1>
        <p className="text-text-secondary text-body-lg">
          Get in touch with us for any inquiries or support. We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Card hover={false}>
          <Mail size={24} className="text-accent mb-3" />
          <h3 className="font-heading font-semibold text-text-primary mb-1">Email</h3>
          <a href="mailto:support@custospark.com" className="text-text-secondary text-body-sm hover:text-accent transition-colors">
            support@custospark.com
          </a>
        </Card>
        <Card hover={false}>
          <MapPin size={24} className="text-accent mb-3" />
          <h3 className="font-heading font-semibold text-text-primary mb-1">Location</h3>
          <p className="text-text-secondary text-body-sm">Dar es Salaam, Tanzania</p>
        </Card>
        <Card hover={false}>
          <Phone size={24} className="text-accent mb-3" />
          <h3 className="font-heading font-semibold text-text-primary mb-1">Phone</h3>
          <p className="text-text-secondary text-body-sm">+255 123 456 789</p>
        </Card>
        <Card hover={false}>
          <Clock size={24} className="text-accent mb-3" />
          <h3 className="font-heading font-semibold text-text-primary mb-1">Hours</h3>
          <p className="text-text-secondary text-body-sm">Mon-Fri, 8:00 - 17:00</p>
        </Card>
      </div>
    </Section>
  );
}
