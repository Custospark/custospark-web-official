import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { services } from "@/lib/constants";
import { ArrowRight, Settings, Globe, Smartphone, Cloud, Users, Bot } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
 settings: <Settings size={22} />,
 globe: <Globe size={22} />,
 smartphone: <Smartphone size={22} />,
 cloud: <Cloud size={22} />,
 users: <Users size={22} />,
 bot: <Bot size={22} />,
};

export function ServicesSection() {
 return (
 <section id="services" className="py-section bg-surface-muted border-y border-border">
 <div className="max-w-7xl mx-auto px-4 md:px-8">
 <div className="text-center max-w-3xl mx-auto mb-12">
 <p className="text-caption font-semibold tracking-[0.12em] uppercase text-primary mb-3">
 Custom Software
 </p>
 <h2 className="font-heading text-h2 text-ink mb-3">Beyond Our Products</h2>
 <p className="text-text-secondary text-body-lg leading-relaxed">
 Custocare and Custosell are our own products, but we also build custom software for clients — from web and mobile apps to cloud infrastructure, AI, and everything in between. Tell us what you need.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {services.slice(0, 6).map((service) => (
 <Card key={service.title}>
 <div className="w-11 h-11 rounded-md bg-primary-soft text-primary flex items-center justify-center mb-4">
 {iconMap[service.icon]}
 </div>
 <h3 className="font-heading text-h4 text-ink mb-2">{service.title}</h3>
 <p className="text-text-secondary text-body mb-4 leading-relaxed">{service.description}</p>
 <a
 href="/contact"
 className="inline-flex items-center gap-1.5 text-primary text-body-sm font-semibold hover:underline underline-offset-4"
 >
 Tell us what you need <ArrowRight size={14} />
 </a>
 </Card>
 ))}
 </div>

 <div className="text-center mt-10">
 <a href="/contact">
 <Button variant="primary" size="lg">
 Tell Us What You Need <ArrowRight size={18} />
 </Button>
 </a>
 </div>
 </div>
 </section>
 );
}
