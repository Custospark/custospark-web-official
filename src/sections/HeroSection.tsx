import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { ArrowRight, Bot, BarChart3, ArrowUpRight } from "lucide-react";

const phrases = [
  "your business to grow faster.",
  "entrepreneurs to innovate boldly.",
  "teams to collaborate seamlessly.",
  "brands to reach new heights.",
  "your vision to become reality.",
  "companies to scale efficiently.",
];

export function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-primary via-black to-primary text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2)_0%,transparent_70%)]" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="absolute top-8 left-4 md:left-12 animate-float text-center opacity-80">
        <Bot size={40} className="text-blue-300 mx-auto" />
        <p className="mt-1 text-caption text-white/60 font-semibold">AI-Powered</p>
      </div>

      <div className="absolute bottom-8 left-4 md:left-12 animate-float text-center opacity-80" style={{ animationDelay: "2s" }}>
        <BarChart3 size={40} className="text-blue-300 mx-auto" />
        <p className="mt-1 text-caption text-white/60 font-semibold">Data-Driven</p>
      </div>

      <div className="absolute bottom-8 right-4 md:right-12 animate-float text-center opacity-80" style={{ animationDelay: "4s" }}>
        <ArrowUpRight size={40} className="text-blue-300 mx-auto" />
        <p className="mt-1 text-caption text-white/60 font-semibold">Business Growth</p>
      </div>

      <div className="relative z-10 mt-10 max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="font-heading text-h1 md:text-[56px] font-bold text-white drop-shadow-md leading-tight">
            Custospark empowers{" "}
            <span className="text-blue-200">{phrases[phraseIndex]}</span>
          </h1>
          <p className="mt-6 text-body-lg md:text-xl max-w-2xl mx-auto text-white/70">
            We listen, understand your needs, and build smart solutions that work for you
            — including our own powerful SaaS tools to help you grow.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/services">
            <Button variant="white" size="lg">
              Explore Services <ArrowRight size={20} />
            </Button>
          </a>
          <a href="/contact">
            <Button variant="outline" size="lg">
              Book a Consultation
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
