import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";
import heroVideo from "../shared/videos/Collaboration1.mp4";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden text-white">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

      {/* Floating badges */}
      <div className="absolute top-8 left-4 md:left-12 animate-float text-center z-10">
        <p className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-caption text-white/80 font-semibold">
          SaaS Portfolio
        </p>
      </div>

      <div className="absolute bottom-8 left-4 md:left-12 animate-float text-center z-10" style={{ animationDelay: "2s" }}>
        <p className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-caption text-white/80 font-semibold">
          Enterprise Software
        </p>
      </div>

      <div className="absolute bottom-8 right-4 md:right-12 animate-float text-center z-10" style={{ animationDelay: "4s" }}>
        <p className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-caption text-white/80 font-semibold">
          Custom Solutions
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-10 max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <span className="inline-block bg-accent/20 border border-accent/30 text-accent text-body-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Software Company
          </span>
          <h1 className="font-heading text-h1 md:text-[56px] font-bold text-white drop-shadow-md leading-tight">
            Custospark builds{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">
              SaaS products and custom software.
            </span>
          </h1>
          <p className="mt-6 text-body-lg md:text-xl max-w-3xl mx-auto text-white/80 leading-relaxed">
            Including{" "}
            <a href="https://www.custosell.com" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-blue-200 underline underline-offset-2">Custosell</a>{" "}
            and{" "}
            <a href="https://custocare.custospark.com" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-blue-200 underline underline-offset-2">Custocare</a>,{" "}
            plus custom solutions for companies, organisations, and individuals.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/products">
            <Button variant="primary" size="lg">
              Explore Our Products <ArrowRight size={20} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
