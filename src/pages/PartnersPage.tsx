import { Handshake, Globe, Users, Lightbulb, Mail, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function PartnersPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary via-black to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <Handshake size={48} className="mx-auto mb-4 text-yellow-300" />
          <h1 className="font-heading text-h1 text-white mb-4">Partner with Custospark</h1>
          <p className="text-white/70 text-body-lg max-w-3xl mx-auto">
            Join us in shaping the future of technology in Africa. Whether you're an investor, technology partner, or strategic collaborator, we're excited to explore how we can create impact together.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-bl from-primary via-black to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-heading text-h2 text-white text-center mb-12">Why Partner With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Globe size={40} className="mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-bold text-white mb-2">Growing Ecosystem</h3>
              <p className="text-white/70">Our SaaS ecosystem spans multiple high-growth verticals with a rapidly expanding customer base across 10+ countries.</p>
            </div>
            <div className="text-center">
              <Users size={40} className="mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-bold text-white mb-2">Shared Vision</h3>
              <p className="text-white/70">We're building technology that transforms industries in Africa. Partners who share our vision of inclusive, sustainable digital transformation are welcome.</p>
            </div>
            <div className="text-center">
              <Lightbulb size={40} className="mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
              <p className="text-white/70">We invest heavily in R&D and are always exploring cutting-edge technologies. Partners bring expertise and networks that accelerate our impact.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-primary via-black to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-h2 text-white mb-6">Let's Talk</h2>
          <p className="text-white/70 text-body-lg mb-8 max-w-2xl mx-auto">
            Interested in partnering with Custospark? Reach out to our partnerships team and let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:partners@custospark.com" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition shadow-md">
              <Mail size={20} />
              partners@custospark.com
            </a>
            <a href={`tel:${COMPANY.SUPPORT_PHONE.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition shadow-md">
              <Phone size={20} />
              {COMPANY.SUPPORT_PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
