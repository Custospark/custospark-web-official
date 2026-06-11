import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { services } from "@/lib/constants";
import { ArrowRight, Settings, Globe, Smartphone, Cloud, Users, Bot } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  settings: <Settings size={36} />,
  globe: <Globe size={36} />,
  smartphone: <Smartphone size={36} />,
  cloud: <Cloud size={36} />,
  users: <Users size={36} />,
  bot: <Bot size={36} />,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-section bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-heading text-h2 text-text-primary mb-4">Our Services</h2>
          <p className="text-text-secondary text-body-lg">
            We offer a range of services to help your business excel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => (
            <Card key={service.title}>
              <div className="text-accent mb-4">{iconMap[service.icon]}</div>
              <h3 className="font-heading text-h4 text-text-primary mb-2">{service.title}</h3>
              <p className="text-text-secondary text-body mb-4">{service.description}</p>
              <a
                href={service.href}
                className="inline-flex items-center gap-1 text-accent text-body-sm font-medium hover:underline"
              >
                Learn More <ArrowRight size={14} />
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/services">
            <Button variant="accent" size="lg">
              View All Services <ArrowRight size={20} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
