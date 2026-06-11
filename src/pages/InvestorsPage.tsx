import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";

export function InvestorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-section bg-gradient-to-br from-primary via-black to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-accent/20 border border-accent/30 text-accent text-body-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Investor Relations
            </span>
            <h1 className="font-heading text-h1 text-white mb-4">
              Investing in the Future of African Tech
            </h1>
            <p className="text-white/70 text-body-lg">
              Custospark builds and operates SaaS products like Custosell and Custocare. We're growing fast, and we're looking for partners who believe in the potential of African technology.
            </p>
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-16 bg-gradient-to-bl from-primary via-black to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-heading text-h2 text-white text-center mb-12">Why Custospark?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Revenue-Generating Products</h3>
              <p className="text-white/70 leading-relaxed">
                Custosell and Custocare are not concepts. They're live products with paying customers across Africa. Recurring SaaS revenue with clear growth trajectory.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Massive Market Opportunity</h3>
              <p className="text-white/70 leading-relaxed">
                The African SaaS market is projected to reach $15B by 2027. Custospark is already on the ground, with products built for the way African businesses actually work.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Capital-Efficient Team</h3>
              <p className="text-white/70 leading-relaxed">
                A small, focused team that ships. We've built two products with minimal resources and are poised to scale with the right partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Strategy */}
      <section className="py-20 bg-gradient-to-br from-primary via-black to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-heading text-h2 text-white text-center mb-16">Business Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02]">
              <h3 className="text-2xl font-bold text-white mb-4">Business Model</h3>
              <p className="text-white/80 leading-relaxed">
                Custospark operates a scalable SaaS model with recurring revenue streams from our product ecosystem. Our portfolio includes Custosell and Custocare, each targeting high-growth markets across Africa and beyond. We combine product-led growth with strategic enterprise partnerships to drive adoption and revenue.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02]">
              <h3 className="text-2xl font-bold text-white mb-4">Global Reach & Funding</h3>
              <p className="text-white/80 leading-relaxed">
                With a presence in 10+ countries and a rapidly growing customer base, Custospark is positioned for exponential growth. We are actively seeking strategic investors who share our vision of transforming Africa's digital landscape through innovative, homegrown technology solutions.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02]">
              <h3 className="text-2xl font-bold text-white mb-4">Innovation for Future Growth</h3>
              <p className="text-white/80 leading-relaxed">
                Our R&D team continuously explores emerging technologies including AI and machine learning to build next-generation solutions. We invest heavily in product innovation, ensuring our platform evolves with market needs and maintains a competitive edge.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02]">
              <h3 className="text-2xl font-bold text-white mb-4">Strategic Growth Plans</h3>
              <p className="text-white/80 leading-relaxed">
                Our roadmap includes expanding into new geographic markets, launching additional products, and building strategic partnerships with enterprise clients. We project significant growth in ARR over the next 24 months through targeted market expansion and product diversification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-20 bg-gradient-to-bl from-primary via-black to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-heading text-h2 text-white text-center mb-16">Market Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02]">
              <h3 className="text-2xl font-bold text-white mb-4">Industry Trends</h3>
              <p className="text-white/80 leading-relaxed">
                The African SaaS market is projected to reach $15B by 2027, growing at 25% CAGR. Key drivers include increasing smartphone penetration, expanding internet access, and a growing middle class demanding digital services. Custospark is strategically positioned to capture this growth.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02]">
              <h3 className="text-2xl font-bold text-white mb-4">Competitor Analysis</h3>
              <p className="text-white/80 leading-relaxed">
                While global players dominate enterprise SaaS, there is a significant gap in affordable, locally-adapted solutions for African SMEs. Custospark's competitive advantage lies in our deep understanding of local markets, offline-first capabilities, and integrated product ecosystem.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02]">
              <h3 className="text-2xl font-bold text-white mb-4">Market Opportunities</h3>
              <p className="text-white/80 leading-relaxed">
                Our unified ecosystem approach adds unmatched value. Users can seamlessly access interconnected tools under one account, reducing cost and friction. By staying laser-focused on underserved and high-growth markets, we're redefining what it means to build for scale and impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Assets */}
      <section className="py-20 bg-gradient-to-br from-primary via-black to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-heading text-h2 text-white text-center mb-16">Investor Relations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Dedicated Investor Support</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Our investor relations team is committed to providing timely, transparent, and comprehensive information to current and prospective investors. We believe in building lasting partnerships through open communication.
              </p>
              <a href="mailto:investors@custospark.com" className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition shadow-md">
                Contact Investor Relations
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Investor Resources</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Access our latest financial reports, pitch decks, and investment memoranda. We provide comprehensive documentation to help you make informed investment decisions.
              </p>
              <a href="mailto:investors@custospark.com" className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition shadow-md">
                Request Financial Reports
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-primary via-black to-primary text-white text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-h2 text-white mb-4">Want to Learn More?</h2>
            <p className="text-white/70 text-body-lg mb-8">
              We're always open to conversations with investors who believe in the potential of African technology. Reach out and let's talk.
            </p>
            <a href="/contact">
              <Button variant="white" size="lg">
                Get in Touch <ArrowRight size={20} />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
