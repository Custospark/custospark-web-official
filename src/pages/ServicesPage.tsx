import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { services } from "@/lib/constants";
import { Settings, Globe, Smartphone, Cloud, Users, Bot } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  settings: <Settings size={32} />,
  globe: <Globe size={32} />,
  smartphone: <Smartphone size={32} />,
  cloud: <Cloud size={32} />,
  users: <Users size={32} />,
  bot: <Bot size={32} />,
};

export function ServicesPage() {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-heading text-h1 text-text-primary mb-6">Our Services</h1>
        <p className="text-text-secondary text-body-lg">
          We offer a range of services to help your business excel in the digital landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.title}>
            <div className="text-accent mb-4">{iconMap[service.icon]}</div>
            <h3 className="font-heading text-h4 text-text-primary mb-2">{service.title}</h3>
            <p className="text-text-secondary text-body">{service.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
