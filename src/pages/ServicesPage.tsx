import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { ArrowRight, Settings, Globe, Smartphone, Cloud, Users, Bot } from "lucide-react";
import { services } from "@/lib/constants";

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
    <>
      <section className="py-section bg-gradient-to-br from-primary via-black to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-accent/20 border border-accent/30 text-accent text-body-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Custom Software
            </span>
            <h1 className="font-heading text-h1 text-white mb-6">
              Beyond Custosell and Custocare
            </h1>
            <p className="text-white/70 text-body-lg">
              Our own products handle retail and healthcare. But we also build custom software for any industry — web apps, mobile apps, cloud infrastructure, AI, and more. Whatever you need, we can build it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-section bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className={service.featured ? "border-accent/50 ring-1 ring-accent/20" : ""}
              >
                <div className="text-accent mb-4">{iconMap[service.icon]}</div>
                <h3 className="font-heading text-h4 text-text-primary mb-2">{service.title}</h3>
                <p className="text-text-secondary text-body mb-4">{service.description}</p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-1 text-accent text-body-sm font-medium hover:underline"
                >
                  Tell us what you need <ArrowRight size={14} />
                </a>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/contact">
              <Button variant="accent" size="lg">
                Tell Us What You Need <ArrowRight size={20} />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
