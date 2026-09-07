import { AcademySpotlight, ACADEMY_REGISTER_URL } from "@/sections/AcademySpotlight";
import { Button } from "@/components/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export function AcademyPage() {
  return (
    <>
      <section className="relative py-12 bg-gradient-to-br from-primary via-black to-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_10%_90%,rgba(255,255,255,0.15),transparent_40%)]" style={{ filter: "blur(72px)" }} />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-accent/20 border border-accent/30 text-accent text-body-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Custospark Academy is open for enrollment
            </span>
            <h1 className="font-heading text-h1 text-white mb-4">
              Learn. Build. Launch.
            </h1>
            <p className="text-white/70 text-body-lg">
              Practical, hands-on courses that take you from learner to builder to founder.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {["Hands-on projects", "Live sessions", "Recognised certificates"].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70"
                >
                  {pill}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <a href={ACADEMY_REGISTER_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="white" size="lg">
                  Start learning <ArrowRight size={20} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-20 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_15%_20%,rgba(245,158,11,0.25),transparent_45%),radial-gradient(circle_at_85%_75%,rgba(59,130,246,0.25),transparent_45%)]" style={{ filter: "blur(72px)" }} />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8">
          <AcademySpotlight />
        </div>
      </section>
      <section className="py-16 bg-gradient-to-bl from-zinc-950 via-black to-zinc-950 text-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <Sparkles size={28} className="mx-auto text-accent mb-4" />
          <h2 className="font-heading text-h2 text-white">An institution of Custospark Company Ltd</h2>
          <p className="mt-4 text-white/70 text-body-lg">
            The same standard behind Custocare and Custosell — now for your skills. Verified certificates, fair assessments, real outcomes.
          </p>
        </div>
      </section>
    </>
  );
}
